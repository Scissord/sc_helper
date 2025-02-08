const box = document.getElementById('box');
let pos = 0;

function animate() {
  pos += 1;
  box.style.left = pos + 'px';
  if (pos < 300) {
    requestAnimationFrame(animate);
  }
}

animate();