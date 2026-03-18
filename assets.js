/**
 * ============================================================
 *  assets.js — Konfigurasi Gambar & Foto IMMt SHOP
 * ============================================================
 *
 *  Ini satu-satunya file yang perlu diedit untuk mengganti
 *  semua gambar di website. Isi path atau URL foto di bawah.
 *
 *  FORMAT PATH:
 *    - File lokal  → 'images/nama-foto.jpg'
 *    - URL online  → 'https://example.com/foto.jpg'
 *    - Kosong ('')  → otomatis tampil placeholder
 *
 *  STRUKTUR FOLDER YANG DISARANKAN:
 *    📁 immt-shop/
 *      ├── index.html
 *      ├── assets.js
 *      └── 📁 images/
 *            ├── logo.png
 *            ├── banner.jpg
 *            ├── qris.png
 *            └── ... dst
 *
 * ============================================================
 */


// ─────────────────────────────────────────────
//  LOGO, BANNER HERO, & QRIS
// ─────────────────────────────────────────────

window.IMAGE_SITE_LOGO   = '';   // contoh: 'images/logo.png'
window.IMAGE_HERO_BANNER = '';   // contoh: 'images/banner.jpg'
window.IMAGE_QRIS        = '';   // contoh: 'images/qris.png'


// ─────────────────────────────────────────────
//  BUNDLE
// ─────────────────────────────────────────────

window.IMAGE_GALLERY = {

  'final-suit-bundle':   ['', '', '', ''],
  'face-card-edition':   ['', '', '', ''],
  'ground-entry-bundle': ['', '', '', ''],

  // ─────────────────────────────────────────
  //  7 PRODUK UTAMA
  //  Foto [0] = foto utama di kartu produk
  //  Foto [1-3] = galeri di modal detail
  // ─────────────────────────────────────────

  'topi-immt':       ['', '', '', ''],  // contoh: 'images/topi-1.jpg'
  'kaos-immt':       ['', '', '', ''],  // contoh: 'images/kaos-1.jpg'
  'stiker-immt':     ['', '', '', ''],  // contoh: 'images/stiker-1.jpg'
  'enamel-bidang':   ['', '', '', ''],  // contoh: 'images/enamel-bidang-1.jpg'
  'enamel-immt':     ['', '', '', ''],  // contoh: 'images/enamel-immt-1.jpg'
  'korek-immt':      ['', '', '', ''],  // contoh: 'images/korek-1.jpg'
  'keychain-bordir': ['', '', '', ''],  // contoh: 'images/keychain-bordir-1.jpg'

};


// ─────────────────────────────────────────────
//  JANGAN EDIT DI BAWAH GARIS INI
// ─────────────────────────────────────────────

(function () {
  function valid(p) { return typeof p === 'string' && p.trim() !== ''; }

  window.__imageConfigReady = function (makePlaceholder) {

    window.getImageSrc = function (id, label) {
      if (window.uploads && window.uploads[id]) return window.uploads[id];
      if (id === 'siteLogo')
        return valid(window.IMAGE_SITE_LOGO)
          ? window.IMAGE_SITE_LOGO
          : makePlaceholder('IMMt', '#AE0001', '#EEBA30', '#740001');
      if (id === 'heroBanner')
        return valid(window.IMAGE_HERO_BANNER)
          ? window.IMAGE_HERO_BANNER
          : makePlaceholder('Banner Hero', '#740001', '#AE0001', '#EEBA30');
      if (id === 'qrisImage')
        return valid(window.IMAGE_QRIS)
          ? window.IMAGE_QRIS
          : makePlaceholder('QRIS', '#AE0001', '#D3A625', '#740001');
      const g = window.IMAGE_GALLERY[id];
      if (g && valid(g[0])) return g[0];
      return makePlaceholder(label || id);
    };

    window.getGalleryImages = function (item) {
      const g = window.IMAGE_GALLERY[item.id];
      if (!g) return [window.getImageSrc(item.id, item.name)];
      return g.map((url, i) =>
        valid(url) ? url : makePlaceholder(`${item.name} ${i + 1}`, '#7a2020', '#6b4b2a', '#bfa46f')
      );
    };

  };
})();
