import './style.css';
import { htmlElementAttributes } from 'html-element-attributes';

const hrefTags = Object.entries(htmlElementAttributes).filter(
  ([tag, attributes]) => {
    return attributes.includes('href');
  }
);
document.querySelector('#app').innerHTML = `
<h1>href tag list</h1>
<p>Ref: <a title="HTML Standard" href="https://html.spec.whatwg.org/multipage/indices.html">HTML Standard</a></p>

<ul>
${hrefTags
  .map(([tag, attrs]) => {
    return `<li><b>${tag}</b>: ${attrs.join(',')}</li>`;
  })
  .join('\n')}
</ul>`;
