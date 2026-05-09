const fs = require('fs');

const htmlContent = fs.readFileSync('legacy-vite/index.html', 'utf8');

// Extract body content
const bodyMatch = htmlContent.match(/<body>([\s\S]*?)<\/body>/i);
let bodyHtml = bodyMatch ? bodyMatch[1] : '';

// Remove script tags from HTML (we will handle scripts separately)
bodyHtml = bodyHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Convert class to className
let jsxContent = bodyHtml.replace(/class=/g, 'className=');

// Convert for to htmlFor
jsxContent = jsxContent.replace(/for=/g, 'htmlFor=');

// Self close tags: img, br, hr, input, source, path, circle, rect, polyline, polygon, line
const selfClosingTags = ['img', 'br', 'hr', 'input', 'source'];
selfClosingTags.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
    jsxContent = jsxContent.replace(regex, `<${tag}$1 />`);
});

// React style="" requires objects, but to keep it simple and perfectly matching, 
// I will let React handle it as strings if possible, wait, React strictly requires style={{...}}.
// I will write a basic converter for style="a: b; c: d" to style={{a: "b", c: "d"}}
jsxContent = jsxContent.replace(/style="([^"]*)"/g, (match, p1) => {
    const styles = p1.split(';').filter(s => s.trim() !== '');
    const styleObjStr = styles.map(s => {
        const [key, ...val] = s.split(':');
        if (!key || val.length === 0) return '';
        const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${camelKey}: '${val.join(':').trim()}'`;
    }).filter(s => s !== '').join(', ');
    return `style={{ ${styleObjStr} }}`;
});

// Fix viewBox
jsxContent = jsxContent.replace(/viewbox=/g, 'viewBox=');
jsxContent = jsxContent.replace(/stroke-width=/g, 'strokeWidth=');
jsxContent = jsxContent.replace(/stroke-linecap=/g, 'strokeLinecap=');
jsxContent = jsxContent.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
jsxContent = jsxContent.replace(/fill-rule=/g, 'fillRule=');
jsxContent = jsxContent.replace(/clip-rule=/g, 'clipRule=');
jsxContent = jsxContent.replace(/stroke-dasharray=/g, 'strokeDasharray=');
jsxContent = jsxContent.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');

// SVG tags that don't self close but should be self closed if empty
const svgSelfClosing = ['path', 'circle', 'rect', 'polyline', 'polygon', 'line'];
svgSelfClosing.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)></${tag}>`, 'gi');
    jsxContent = jsxContent.replace(regex, `<${tag}$1 />`);
});

const pageComponent = `"use client";
import { useEffect } from 'react';
import Script from 'next/script';

export default function Home() {
  useEffect(() => {
    // We will initialize main logic after component mounts
    // by loading main.js
  }, []);

  return (
    <>
      ${jsxContent}
      <Script src="/main.js" strategy="lazyOnload" />
    </>
  );
}
`;

fs.writeFileSync('src/app/page.js', pageComponent);
console.log('Conversion complete!');
