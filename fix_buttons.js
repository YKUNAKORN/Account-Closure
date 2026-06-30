const fs = require('fs');
const path = require('path');

// 1. insert-da.html
let insertDaPath = path.join(__dirname, 'pages/insert-da.html');
let insertDaContent = fs.readFileSync(insertDaPath, 'utf-8');
insertDaContent = insertDaContent.replace(/<button([\s\S]*?Cancel[\s\S]*?)<\/button>/, `<button onclick="window.location.href='../index.html'"$1</button>`);
insertDaContent = insertDaContent.replace(/<button([\s\S]*?Submit Balances[\s\S]*?)<\/button>/, `<button onclick="window.location.href='../index.html'"$1</button>`);
fs.writeFileSync(insertDaPath, insertDaContent, 'utf-8');
console.log('Fixed insert-da.html');

// 2. insert-other.html
let insertOtherPath = path.join(__dirname, 'pages/insert-other.html');
let insertOtherContent = fs.readFileSync(insertOtherPath, 'utf-8');
insertOtherContent = insertOtherContent.replace(/<button([\s\S]*?Cancel[\s\S]*?)<\/button>/, `<button onclick="window.location.href='../index.html'"$1</button>`);
fs.writeFileSync(insertOtherPath, insertOtherContent, 'utf-8');
console.log('Fixed insert-other.html');

// 3. operation-check.html
let opCheckPath = path.join(__dirname, 'pages/operation-check.html');
let opCheckContent = fs.readFileSync(opCheckPath, 'utf-8');
opCheckContent = opCheckContent.replace("submitBtn.addEventListener('click'", "document.getElementById('submit-btn').addEventListener('click'");
fs.writeFileSync(opCheckPath, opCheckContent, 'utf-8');
console.log('Fixed operation-check.html');

// 4. settlement-check.html
let settlementPath = path.join(__dirname, 'pages/settlement-check.html');
let settlementContent = fs.readFileSync(settlementPath, 'utf-8');
settlementContent = settlementContent.replace(/<button([\s\S]*?Cancel[\s\S]*?)<\/button>/, `<button onclick="window.location.href='../index.html'"$1</button>`);
settlementContent = settlementContent.replace(/<button([\s\S]*?Submit Decision[\s\S]*?)<\/button>/, `<button onclick="window.location.href='../index.html'"$1</button>`);
fs.writeFileSync(settlementPath, settlementContent, 'utf-8');
console.log('Fixed settlement-check.html');

// 5. cash-management-check.html
let cashPath = path.join(__dirname, 'pages/cash-management-check.html');
let cashContent = fs.readFileSync(cashPath, 'utf-8');
// Fix Cancel if present
cashContent = cashContent.replace(/<button([\s\S]*?Cancel[\s\S]*?)<\/button>/, `<button onclick="window.location.href='../index.html'"$1</button>`);
// Fix Submit Execution
cashContent = cashContent.replace(/<button([\s\S]*?Submit Execution[\s\S]*?)<\/button>/, `<button onclick="window.location.href='../index.html'"$1</button>`);
fs.writeFileSync(cashPath, cashContent, 'utf-8');
console.log('Fixed cash-management-check.html');

