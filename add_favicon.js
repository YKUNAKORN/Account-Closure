const fs = require('fs');
const path = require('path');

function addFavicon(filePath, prefix) {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) return;
    
    let content = fs.readFileSync(fullPath, 'utf-8');
    
    // Check if it already has a favicon
    if (content.includes('rel="icon"')) {
        console.log(`Favicon already exists in ${filePath}`);
        return;
    }
    
    const faviconTag = `  <link rel="icon" href="${prefix}assets/favicon.svg" type="image/svg+xml">\n`;
    
    // Insert right before </head> or after <head>
    content = content.replace(/<\/head>/i, `${faviconTag}</head>`);
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`Added favicon to ${filePath}`);
}

addFavicon('index.html', '');

const pagesDir = path.join(__dirname, 'pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

pages.forEach(p => {
    addFavicon(`pages/${p}`, '../');
});
