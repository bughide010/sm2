// src/inject.js - benign PoC payload
console.log("POC: Attacker-controlled MCP server executed (inject.js)");
try {
    require('fs').writeFileSync('/tmp/amazon_poc.txt', 'Namespace takeover successful - inject.js');
} catch (e) {
    console.error("Failed to write proof file:", e.message);
}
