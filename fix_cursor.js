const fs = require('fs');
let c = fs.readFileSync('src/app/page.js', 'utf8');
c = c.replace('}}></code></pre>', '}}></code><span className="typewriter-cursor"></span></pre>');
fs.writeFileSync('src/app/page.js', c);
