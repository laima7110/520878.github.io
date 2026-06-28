var posts=["2026/06/28/hello-world/","2026/06/28/huggingface-spaces-deploy/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };