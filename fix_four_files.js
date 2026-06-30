const fs = require('fs');
const path = require('path');

const newNav = `        <nav class="flex flex-col gap-2">
            <!-- Inactive Tab: Dashboard -->
            <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors active:scale-95"
                href="../index.html">
                <span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                <span class="font-title-sm text-title-sm">Dashboard</span>
            </a>
            <!-- Inactive Tab: Sales -->
            <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors active:scale-95"
                href="check-da.html">
                <span class="material-symbols-outlined" data-icon="point_of_sale">point_of_sale</span>
                <span class="font-title-sm text-title-sm">Sales</span>
            </a>
            <!-- Inactive Tab: Digital Assets -->
            <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors active:scale-95"
                href="insert-da.html">
                <span class="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
                <span class="font-title-sm text-title-sm">Digital Assets</span>
            </a>
            <!-- Inactive Tab: Middle -->
            <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors active:scale-95"
                href="insert-other.html">
                <span class="material-symbols-outlined" data-icon="account_tree">account_tree</span>
                <span class="font-title-sm text-title-sm">Middle</span>
            </a>
            <!-- Inactive Tab: Head of Sales -->
            <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors active:scale-95"
                href="head-of-sales.html">
                <span class="material-symbols-outlined" data-icon="manage_accounts">manage_accounts</span>
                <span class="font-title-sm text-title-sm">Head of Sales</span>
            </a>
            <!-- Inactive Tab: Operation -->
            <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors active:scale-95"
                href="operation-check.html">
                <span class="material-symbols-outlined" data-icon="settings">settings</span>
                <span class="font-title-sm text-title-sm">Operation</span>
            </a>
            <!-- Inactive Tab: Settlement -->
            <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors active:scale-95"
                href="settlement-check.html">
                <span class="material-symbols-outlined" data-icon="handshake">handshake</span>
                <span class="font-title-sm text-title-sm">Settlement</span>
            </a>
            <!-- Inactive Tab: Cash Management -->
            <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors active:scale-95"
                href="cash-management-check.html">
                <span class="material-symbols-outlined" data-icon="account_balance">account_balance</span>
                <span class="font-title-sm text-title-sm">Cash Management</span>
            </a>
            <!-- Inactive Tab: Tracking -->
            <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors active:scale-95"
                href="view-detail.html">
                <span class="material-symbols-outlined" data-icon="analytics">analytics</span>
                <span class="font-title-sm text-title-sm">Tracking</span>
            </a>
        </nav>`;

const files = [
    'pages/insert-da.html',
    'pages/insert-other.html',
    'pages/settlement-check.html',
    'pages/cash-management-check.html'
];

files.forEach(f => {
    let p = path.join(__dirname, f);
    let content = fs.readFileSync(p, 'utf-8');
    content = content.replace(/<nav class="flex flex-col gap-2.*?>[\s\S]*?<\/nav>/i, newNav);
    fs.writeFileSync(p, content, 'utf-8');
    console.log(`Updated SideNavBar in ${f}`);
});
