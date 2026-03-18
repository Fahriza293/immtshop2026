/**
 * ============================================================
 *  assets.js — Konfigurasi Gambar & Foto IMMt SHOP
 * ============================================================
 *
 *  Ini satu-satunya file yang perlu diedit untuk mengganti
 *  semua gambar di website. Cukup isi path atau URL foto
 *  di bagian masing-masing produk di bawah.
 *
 *  FORMAT PATH:
 *    - File lokal  → 'images/nama-foto.jpg'
 *    - URL online  → 'https://example.com/foto.jpg'
 *    - Kosong ('')  → otomatis tampil placeholder
 *
 *  STRUKTUR FOLDER YANG DISARANKAN:
 *    📁 immt-shop/
 *      ├── index.html
 *      ├── assets.js         ← file ini
 *      └── 📁 images/
 *            ├── logo.png
 *            ├── banner.jpg
 *            ├── qris.png
 *            ├── workshirt-1.jpg
 *            └── ... dst
 *
 * ============================================================
 */


// ─────────────────────────────────────────────
//  LOGO, BANNER HERO, & QRIS
// ─────────────────────────────────────────────

window.IMAGE_SITE_LOGO   = '';   // Logo di header — contoh: 'images/logo.png'
window.IMAGE_HERO_BANNER = '';   // Banner hero utama — contoh: 'images/banner.jpg'
window.IMAGE_QRIS        = '';   // Foto QRIS — contoh: 'images/qris.png'


// ─────────────────────────────────────────────
//  GALERI FOTO PRODUK
//
//  Setiap produk bisa punya sampai 4 foto.
//  Foto [0] = foto utama yang muncul di kartu produk.
//  Foto [1-3] = foto tambahan di galeri modal detail.
//  Biarkan kosong ('') untuk pakai placeholder otomatis.
// ─────────────────────────────────────────────

window.IMAGE_GALLERY = {

  // ── BUNDLE ──────────────────────────────────

  'final-suit-bundle': [
    '',   // Foto utama
    '',   // Foto galeri 2
    '',   // Foto galeri 3
    '',   // Foto galeri 4
  ],
  'face-card-edition': [
    '', '', '', '',
  ],
  'ground-entry-bundle': [
    '', '', '', '',
  ],

  // ── APPAREL ─────────────────────────────────

  'workshirt-resonansi': [
    '',   // contoh: 'images/workshirt-resonansi-1.jpg'
    '',
    '',
    '',
  ],
  'immt-varsity': [
    '', '', '', '',
  ],
  'final-suit-tee': [
    '', '', '', '',
  ],
  'ground-entry-jersey': [
    '', '', '', '',
  ],

  // ── MERCH & ACCESSORIES ─────────────────────

  'supporter-scarf': [
    '', '', '', '',
  ],
  'matchday-cap': [
    '', '', '', '',
  ],
  'fan-pass-card': [
    '', '', '', '',
  ],
  'hydro-tumbler': [
    '', '', '', '',
  ],

  // ── PRODUK BARU ─────────────────────────────────
  'topi-immt':        ['', '', '', ''],
  'kaos-immt':        ['', '', '', ''],
  'stiker-immt':      ['', '', '', ''],
  'enamel-bidang':    ['', '', '', ''],
  'enamel-immt':      ['', '', '', ''],
  'korek-immt':       ['', '', '', ''],
  'keychain-bordir':  ['', '', '', ''],
  'urban-carry-bag': [
    '', '', '', '',
  ],

};


// ─────────────────────────────────────────────
//  ⚙️  JANGAN EDIT DI BAWAH GARIS INI
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
