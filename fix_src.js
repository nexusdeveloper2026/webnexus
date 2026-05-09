const fs = require('fs');
let c = fs.readFileSync('src/app/page.js','utf8');
c = c.replace(/src=""/g, 'src={null}');
fs.writeFileSync('src/app/page.js',c);
