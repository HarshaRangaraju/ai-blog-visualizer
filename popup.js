async function getBlogContent(tabId) {
  // Inject content.js first
  await chrome.scripting.executeScript({
    target: { tabId },
    files: ["content.js"],
  });

  // Then get the blog content
  const [result] = await chrome.scripting.executeScript({
    target: { tabId },
    func: () => window.blogContent || "No content found!",
  });

  return result.result;
}

document.getElementById("extractBtnSummary").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const blogText = await getBlogContent(tab.id);

  if (!blogText || blogText === "No content found!") {
    alert("No blog content found on the page.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: blogText }),
    });

    if (!response.ok) throw new Error("Failed to fetch summary");

    const { summary } = await response.json();
    document.getElementById("output").innerHTML = `<strong>Summary:</strong><p>${summary}</p>`;
  } catch (error) {
    console.error("Error fetching summary:", error);
    alert("Failed to generate summary.");
  }
});

document.getElementById("extractBtnPoints").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const blogText = await getBlogContent(tab.id);

  if (!blogText || blogText === "No content found!") {
    alert("No blog content found on the page.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: blogText }),
    });

    if (!response.ok) throw new Error("Failed to fetch key points");

    const { points } = await response.json();
    document.getElementById("output").innerHTML =
      `<strong>Key Points:</strong><ul>${points.map(p => `<li>${p.trim()}</li>`).join("")}</ul>`;
  } catch (error) {
    console.error("Error fetching key points:", error);
    alert("Failed to generate key points.");
  }
});
