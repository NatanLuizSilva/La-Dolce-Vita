// Array of image URLs for the banner
const bannerImages = [
    "assets/img/banner 1.jpg",
    "assets/img/banner 2.jpg"
  ];
  
// Index to track the current image
let currentIndex = 0;

// Function to change the banner image
function changeBannerImage() {
  const bannerImageElement = document.getElementById('bannerImage');
  currentIndex = (currentIndex + 1) % bannerImages.length;
  bannerImageElement.src = bannerImages[currentIndex];
}

// Change banner image every 3 seconds
setInterval(changeBannerImage, 2000);

// Function to open the modal
function openModal(src) {
  const modal = document.getElementById('myModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = "block";
  modalImage.src = src;
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = "none";
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {  // Verifica se a tecla pressionada é 'Esc'
      closeModal();  // Chama a função closeModal para fechar o modal
  }
});
