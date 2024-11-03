// tombol menu dan menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// toggle untuk menampilkan dan menyembunyikan menu mobile
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});