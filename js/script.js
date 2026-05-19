// Animasi fade-up saat elemen masuk ke viewport
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fadeup');
  
  // Jika sudah terlihat saat halaman dimuat, langsung beri class visible
  const checkVisibility = () => {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  };
  
  // Panggil sekali untuk elemen yang sudah tampil di awal
  checkVisibility();
  
  // Intersection Observer untuk elemen yang muncul saat scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Setelah terlihat, hentikan observasi
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  
  fadeElements.forEach(el => observer.observe(el));
});