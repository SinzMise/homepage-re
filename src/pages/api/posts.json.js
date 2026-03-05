import { rssConfig } from '../../../astro.config.mjs';
import { parseString } from 'xml2js';

export async function GET() {
  try {
    const response = await fetch(rssConfig.url);
    if (!response.ok) {
      throw new Error('Failed to fetch RSS');
    }
    
    const xmlText = await response.text();
    
    const result = await new Promise((resolve, reject) => {
      parseString(xmlText, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    
    const items = result.rss?.channel?.[0]?.item || [];
    const posts = items.slice(0, 10).map(item => ({
      title: item.title?.[0] || '',
      link: item.link?.[0] || '',
      pubDate: item.pubDate?.[0] || '',
      description: item.description?.[0] || '',
      categories: item.category || []
    }));
    
    return new Response(JSON.stringify(posts), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });
  } catch (error) {
    console.error('Error fetching RSS:', error);
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
