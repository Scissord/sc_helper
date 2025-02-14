const follower = document.getElementById('follower');

document.addEventListener('mousemove', (e) => {
  follower.style.left = e.clientX - 50 + 'px';
  follower.style.top = e.clientY - 50 + 'px';
});