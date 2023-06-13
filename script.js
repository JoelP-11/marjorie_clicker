let score = 0;

// Get the score element and the image element
const scoreElement = document.getElementById('score');
const imageElement = document.getElementById('image');
const imageContainer = document.getElementById('image-container');

function createTinyImage() {
  const tinyImage = document.createElement('img');
  tinyImage.src = imageElement.src;
  tinyImage.classList.add('tiny-image');
  
  const leftPosition = Math.random() * (imageContainer.offsetWidth - 50);
  tinyImage.style.left = `${leftPosition}px`;

  imageContainer.appendChild(tinyImage);
  setTimeout(function() {
    imageContainer.removeChild(tinyImage);
  }, 1000);
}

// Function to update the score and check for bounce effect
function updateScore() {
  score++;
  scoreElement.textContent = `Marjories killed: ${score}`;

  createTinyImage();
}

// Increment the score and check for bounce effect when the image is clicked
imageElement.addEventListener('click', updateScore);