const fs = require('fs');

let lines = fs.readFileSync('src/app/page.js', 'utf8').split('\n');
let start = -1;
let end = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<pre><code id="typewriter-code">')) {
    start = i;
  }
  if (start !== -1 && lines[i].includes('</code></pre>')) {
    end = i;
    break;
  }
}

if (start !== -1 && end !== -1) {
  const replacement = `                    <pre><code id="typewriter-code" dangerouslySetInnerHTML={{ __html: \`<span class="keyword">const</span> nexus = {\\n  Nuestra Visión: <span class="string">'Innovar para el Futuro'</span>,\\n  Nuestra Misión: <span class="string">'Ecosistemas escalables'</span>,\\n  Nuestros Valores: <span class="string">'Excelencia y calidad'</span>,\\n  status: <span class="variable">true</span>\\n};\\n\\n<span class="function">async function</span> <span class="function">evolve</span>() {\\n  <span class="keyword">await</span> nexus.<span class="method">launch</span>();\\n}\` }}></code></pre>`;
  
  lines.splice(start, end - start + 1, replacement);
  fs.writeFileSync('src/app/page.js', lines.join('\n'));
  console.log('Replaced successfully!');
} else {
  console.log('Not found');
}
