import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// 获取当前目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// RSS URL
const rssUrl = 'https://blog.storia.ren/atom.xml';
console.log('Fetching RSS from:', rssUrl);

https.get(rssUrl, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // 解析 XML (简化版，直接提取所需字段)
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');
    
    const items = xmlDoc.querySelectorAll('entry');
    const posts = [];
    
    for (let i = 0; i < Math.min(items.length, 10); i++) {
      const item = items[i];
      const title = item.querySelector('title')?.textContent || '';
      const link = item.querySelector('link')?.getAttribute('href') || '';
      const pubDate = item.querySelector('published')?.textContent || '';
      const description = item.querySelector('content')?.textContent || '';
      const categories = Array.from(item.querySelectorAll('category')).map(cat => cat.getAttribute('term'));
      
      posts.push({
        title,
        link,
        pubDate,
        description,
        categories
      });
    }
    
    // 保存为 JSON 文件
    const jsonData = JSON.stringify(posts, null, 2);
    const outputPath = path.join(__dirname, '..', 'public', 'data', 'posts.json');
    
    // 确保目录存在
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, jsonData);
    console.log('RSS fetched and saved to:', outputPath);
    console.log('Fetched', posts.length, 'posts');
  });
}).on('error', (err) => {
  console.error('Error fetching RSS:', err);
  process.exit(1);
});

// 导入 JSDOM
import { JSDOM } from 'jsdom';

// 模拟 DOMParser 用于 Node.js
class DOMParser {
  parseFromString(xmlString, mimeType) {
    const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
    const parser = new dom.window.DOMParser();
    return parser.parseFromString(xmlString, mimeType);
  }
}