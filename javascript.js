/* ---------- MOBILE MENU TOGGLE ---------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  // If the elements don't exist (just a safety check), do nothing
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
    });
  });
}

/* ---------- CONTACT FORM (demo only) ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');

  // Only run if we're on the contact page
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.classList.remove('hidden');
    form.reset();
    setTimeout(function () {
      msg.classList.add('hidden');
    }, 3000);
  });
}

/* ---------- RUN EVERYTHING AFTER PAGE LOAD ---------- */
document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initContactForm();
});