const paragraphs = Array.from(document.querySelectorAll("p"))
  .map(p => p.innerText)
  .filter(Boolean)
  .join("\n\n");

// Save to window for now
window.blogContent = paragraphs;
