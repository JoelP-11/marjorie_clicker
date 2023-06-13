let score = 0;

// Get the score element and the image element
const scoreElement = document.getElementById('score');
const imageElement = document.getElementById('image');

// Increment the score when the image is clicked
imageElement.addEventListener('click', function() {
  score++;
  scoreElement.textContent = `Score: ${score}`;
  imageElement.classList.add('bounce');
setTimeout(function() {
    imageElement.classList.remove('bounce');
}, 500);
});
