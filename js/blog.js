const postList = [
  "hello.md",
  "projektupdate-2025.md"
];

const postContainer = document.getElementById("blog-posts");

postList.forEach(filename => {
  fetch(`posts/${filename}`)
    .then(res => res.text())
    .then(md => {
      const meta = extractMeta(md);
      const html = marked.parse(md.split('---')[2]);
      const postEl = document.createElement("article");
      postEl.className = "border-b border-[#E6E4D9] pb-6";
      postEl.innerHTML = `
        <h2 class="text-2xl font-semibold mb-2">${meta.title}</h2>
        <p class="text-sm mb-4 text-[#B7B5AC]">${meta.date}</p>
        <div class="prose max-w-none">${html}</div>
      `;
      postContainer.appendChild(postEl);
    });
});

function extractMeta(md) {
  const meta = {};
  const lines = md.split('\n');
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") break;
    const [key, ...rest] = lines[i].split(':');
    meta[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '');
  }
  return meta;
}
