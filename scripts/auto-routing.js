(function () {
    const normalizedPath = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    const pagePrefix = normalizedPath.includes('/pages/') ? '../' : '';
    const currentPage = normalizedPath.split('/').pop();

    const routes = {
        dashboard: 'index.html',
        newRequest: 'pages/new-request.html',
        tasks: 'pages/insert-da.html',
        insertDa: 'pages/insert-da.html',
        checkDa: 'pages/check-da.html',
        insertOther: 'pages/insert-other.html',
        checkOther: 'pages/check-other.html',
        headOfSales: 'pages/head-of-sales.html',
        middleCheck: 'pages/middle-check.html',
        operationCheck: 'pages/operation-check.html',
        settlementCheck: 'pages/settlement-check.html',
        cashManagementCheck: 'pages/cash-management-check.html',
        operationFinal: 'pages/operation-final.html',
        tracking: 'pages/view-detail.html',
    };

    const pageActions = {
        'new-request.html': [
            { match: 'submit request', target: routes.dashboard },
            { match: 'cancel', target: routes.dashboard },
        ],
        'insert-da.html': [
            { match: 'submit balances', target: routes.dashboard },
            { match: 'cancel', target: routes.dashboard },
        ],
        'check-da.html': [
            { match: 'check other asset', target: routes.checkOther },
        ],
        'insert-other.html': [
            { match: 'submit balances', target: routes.middleCheck },
            { match: 'cancel', target: routes.dashboard },
        ],
        'check-other.html': [
            { match: 'back', target: routes.checkDa },
        ],
        'head-of-sales.html': [
            {
                match: 'submit review',
                handle: function () {
                    routeByDecision({
                        approve: routes.dashboard,
                        reject: routes.dashboard,
                    });
                },
            },
        ],
        'middle-check.html': [
            { match: 'view da assets', target: routes.checkDa },
            {
                match: 'submit review',
                handle: function () {
                    routeByDecision({
                        approve: routes.dashboard,
                        reject: routes.dashboard,
                    });
                },
            },
        ],
        'operation-check.html': [
            {
                match: 'submit decision',
                handle: function () {
                    routeByDecision({
                        approve: routes.operationFinal,
                        reject: routes.dashboard,
                    });
                },
            },
        ],
        'settlement-check.html': [
            { match: 'submit decision', target: routes.dashboard },
            { match: 'cancel', target: routes.dashboard },
        ],
        'cash-management-check.html': [
            { match: 'submit execution', target: routes.dashboard },
            { match: 'cancel', target: routes.dashboard },
        ],
        'operation-final.html': [
            {
                match: 'finalize closure',
                handle: function () {
                    routeByDecision({
                        approve: routes.dashboard,
                        reject: routes.dashboard,
                    });
                },
            },
        ],
        'view-detail.html': [
            { match: 'back', target: routes.dashboard },
        ],
    };

    function toUrl(path) {
        return new URL(`${pagePrefix}${path}`, window.location.href).href;
    }

    function normalizeText(text) {
        return text.replace(/\s+/g, ' ').trim().toLowerCase();
    }

    function navigate(path) {
        window.location.href = toUrl(path);
    }

    function normalizeShellStyles() {
        document.body.style.backgroundColor = '#f4f4f6';

        const bodyChildren = Array.from(document.body.children).filter(function (element) {
            return element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE';
        });

        bodyChildren.forEach(function (element) {
            const className = element.className || '';
            const isShellSurface = element.tagName === 'ASIDE' || element.tagName === 'HEADER' || (element.tagName === 'NAV' && element.className);
            const isPrimaryCanvas = element.tagName === 'MAIN' || className.includes('ml-') || className.includes('flex-1');

            if (isShellSurface) {
                element.style.backgroundColor = '#ffffff';
                element.style.backgroundImage = 'none';
            }

            if (isPrimaryCanvas) {
                element.style.backgroundColor = 'transparent';
                element.style.backgroundImage = 'none';
            }
        });

        document.querySelectorAll('header, aside, nav').forEach(function (element) {
            if (element.closest('main')) {
                return;
            }

            const className = element.className || '';
            const looksLikeShell = className.includes('fixed') || className.includes('w-sidebar_width') || className.includes('w-[260px]');

            if (looksLikeShell) {
                element.style.backgroundColor = '#ffffff';
                element.style.backgroundImage = 'none';
            }
        });

        document.querySelectorAll('button, a').forEach(function (element) {
            const text = normalizeText(element.textContent || '');

            if (text.includes('back to dashboard')) {
                element.remove();
            }
        });
    }

    function routeByDecision(routeMap) {
        const selectedDecision = document.querySelector('input[name="decision"]:checked');

        if (!selectedDecision) {
            return;
        }

        const nextRoute = routeMap[selectedDecision.value];

        if (nextRoute) {
            navigate(nextRoute);
        }
    }

    function matchRoute(label) {
        const text = normalizeText(label);

        if (text.includes('dashboard') || text.includes('back to dashboard')) {
            return routes.dashboard;
        }

        if (text === 'new request' || text === '+ new request' || text.includes('new request')) {
            return routes.newRequest;
        }

        if (text.includes('tasks') || text.includes('pending reviews')) {
            return routes.tasks;
        }

        if (text.includes('tracking') || text === 'view') {
            return routes.tracking;
        }

        return '';
    }

    function applyLinkBehavior(element) {
        const route = matchRoute(element.textContent || '');

        if (!route) {
            return;
        }

        if (element.tagName === 'A') {
            element.href = toUrl(route);
            return;
        }

        element.type = 'button';
        element.addEventListener('click', function (event) {
            event.preventDefault();
            navigate(route);
        });
    }

    function applyPageSpecificBehavior(element) {
        const actions = pageActions[currentPage] || [];
        const text = normalizeText(element.textContent || '');

        for (const action of actions) {
            if (!text.includes(action.match)) {
                continue;
            }

            element.addEventListener('click', function (event) {
                event.preventDefault();

                if (action.target) {
                    navigate(action.target);
                    return;
                }

                if (action.handle) {
                    action.handle();
                }
            });

            return;
        }
    }

    function wireActions() {
        normalizeShellStyles();

        const interactiveElements = document.querySelectorAll('a[href="#"], button');

        interactiveElements.forEach(function (element) {
            applyPageSpecificBehavior(element);
            applyLinkBehavior(element);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', wireActions);
    } else {
        wireActions();
    }
}());