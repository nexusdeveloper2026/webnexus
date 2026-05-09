const fs = require('fs');

let content = fs.readFileSync('src/app/page.js', 'utf8');

content = content.replace(/<span className="keyword">const<\/span> nexus = \{/g, '<span className="keyword">const</span> nexus = {"{"}');
content = content.replace(/status: <span className="variable">true<\/span>\r?\n\};/g, 'status: <span className="variable">true</span>\n{"}"};');
content = content.replace(/<span className="function">evolve<\/span>\(\) \{/g, '<span className="function">evolve</span>() {"{"}');
content = content.replace(/<span className="method">launch<\/span>\(\);\r?\n\}/g, '<span className="method">launch</span>();\n{"}"}');

// Fix nested quotes in backgroundImage style using a simpler approach
// style={{ backgroundImage: 'url('https... ')' }} -> style={{ backgroundImage: `url('https...')` }}
// Since ` in JSX might be a string literal, we can do: style={{ backgroundImage: "url('https...')"}}
content = content.replace(/backgroundImage: 'url\('([^']+)'\)'/g, 'backgroundImage: "url(\'$1\')"');

fs.writeFileSync('src/app/page.js', content);
