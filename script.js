function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

window.onload = () => {
  const posts = [
    { title: "Post One", link: "posts/post1.html" },
    { title: "Post Two", link: "posts/post2.html" }
  ];

  let postsContainer = document.getElementById("posts");
  posts.forEach(post => {
    let postItem = document.createElement("div");
    postItem.innerHTML = `<a href="${post.link}">${post.title}</a>`;
    postsContainer.appendChild(postItem);
  });
}
