/* =====================================================
   script.js — La Mesa Weekly Menu Site
   Minimal JavaScript — only what's necessary.
   ===================================================== */

// ── Auto-update copyright year in the footer ──
// No need to edit this ever again.
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ── Cache-bust the menu image so the browser always loads
//    the latest menu.jpg when you replace the file. ──
// This appends ?v=YYYYMMDD to the image URL each day,
// so returning visitors always see the freshest menu.
const menuImg = document.querySelector('.menu-img');
if (menuImg) {
  const today = new Date();
  const dateStamp =
    today.getFullYear().toString() +
    String(today.getMonth() + 1).padStart(2, '0') +
    String(today.getDate()).padStart(2, '0');
  const src = menuImg.getAttribute('src');
  menuImg.setAttribute('src', src + '?v=' + dateStamp);
}