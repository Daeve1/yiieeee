document.addEventListener('DOMContentLoaded', function () {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');

  // Make the "No" button move away when the user hovers over it
  noBtn.addEventListener('mouseover', function () {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
  });

  // When "Yes" is clicked, redirect to a new page or show a message
  yesBtn.addEventListener('click', function () {
    window.location.href = 'yes_page.html'; // Create a new HTML file for this
  });
});