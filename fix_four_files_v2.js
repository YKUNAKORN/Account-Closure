const fs = require('fs');
const path = require('path');

const menuItems = [
    { name: 'Dashboard', icon: 'dashboard', href: '../index.html' },
    { name: 'Sales', icon: 'point_of_sale', href: 'check-da.html' },
    { name: 'Digital Assets', icon: 'account_balance_wallet', href: 'insert-da.html' },
    { name: 'Middle', icon: 'account_tree', href: 'insert-other.html' },
    { name: 'Head of Sales', icon: 'manage_accounts', href: 'head-of-sales.html' },
    { name: 'Operation', icon: 'settings', href: 'operation-check.html' },
    { name: 'Settlement', icon: 'handshake', href: 'settlement-check.html' },
    { name: 'Cash Management', icon: 'account_balance', href: 'cash-management-check.html' },
    { name: 'Tracking', icon: 'analytics', href: 'view-detail.html' }
];

const inactiveClasses = "flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors active:scale-95";

function generateNav() {
    let html = `\n`;
    menuItems.forEach((item) => {
        html += `            <!-- Inactive Tab: ${item.name} -->\n`;
        html += `            <a class="${inactiveClasses}"\n`;
        html += `                href="${item.href}">\n`;
        html += `                <span class="material-symbols-outlined" data-icon="${item.icon}">${item.icon}</span>\n`;
        html += `                <span class="font-title-sm text-title-sm">${item.name}</span>\n`;
        html += `            </a>\n`;
    });
    return html + `        `;
}

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const newNav = generateNav();
    // find <nav> ... </nav> and replace contents
    const regex = /(<nav[^>]*>)([\s\S]*?)(<\/nav>)/i;
    const newContent = content.replace(regex, `$1${newNav}$3`);
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated SideNavBar in ${filePath}`);
}

const files = [
    'pages/insert-da.html',
    'pages/insert-other.html',
    'pages/settlement-check.html',
    'pages/cash-management-check.html'
];

files.forEach(f => {
    const fullPath = path.join(__dirname, f);
    if (fs.existsSync(fullPath)) {
        processFile(fullPath);
    }
});
