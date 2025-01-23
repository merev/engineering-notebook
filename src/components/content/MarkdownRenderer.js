import React from 'react';
import MarkdownIt from 'markdown-it';
import markdownItKatex from 'markdown-it-katex';
import markdownItContainer from 'markdown-it-container';
import './MarkdownRenderer.css';
import 'katex/dist/katex.min.css';

const MarkdownRenderer = ({ content }) => {
  // Initialize Markdown-It with KaTeX, Container plugin, and HTML enabled
  const md = new MarkdownIt({
    html: true, // Enable raw HTML
  })
    .use(markdownItKatex)
    .use(markdownItContainer, 'columns', {
      render: (tokens, idx) => {
        if (tokens[idx].nesting === 1) {
          // Opening tag for container
          return '<div class="columns">\n';
        } else {
          // Closing tag for container
          return '</div>\n';
        }
      },
    });

  // Render the Markdown content with custom plugins
  const renderedContent = md.render(content);

  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
};

export default MarkdownRenderer;
