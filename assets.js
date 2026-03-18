/**
 * ═══════════════════════════════════════════════════════════════
 *  assets.js — Konfigurasi Gambar IMMt SHOP
 *  ────────────────────────────────────────────────────────────
 *  Edit file ini untuk mengganti gambar produk, logo, hero banner,
 *  dan QRIS. Cukup ubah URL di bawah, tidak perlu menyentuh
 *  index.html sama sekali.
 *
 *  FORMAT URL yang didukung:
 *    - URL langsung  : "https://example.com/foto.jpg"
 *    - Path relatif  : "images/produk/kaos.jpg"
 *    - Base64        : "data:image/jpeg;base64,..."
 *    - Kosongkan ("") atau null → tampilkan placeholder otomatis
 * ═══════════════════════════════════════════════════════════════
 */

window.__assets = {

  /* ──────────────────────────────────────────────
     SITE IDENTITY
     ────────────────────────────────────────────── */

  /** Logo bulat di pojok kiri header */
  siteLogo: "",

  /** Banner besar di bagian atas halaman beranda */
  heroBanner: "",

  /** Gambar QRIS untuk metode pembayaran QRIS */
  qrisImage: "Qris.jpg",


  /* ──────────────────────────────────────────────
     BUNDLES
     ────────────────────────────────────────────── */

  /** Bundle: The Final Suit */
  "final-suit-bundle": "",

  /** Bundle: Face Card Edition */
  "face-card-edition": "",

  /** Bundle: Ground Entry Bundle */
  "ground-entry-bundle": "",


  /* ──────────────────────────────────────────────
     PRODUK — single image (tampil di kartu & detail)
     ────────────────────────────────────────────── */

  /** Topi IMMt */
  "topi-immt": "",

  /** Kaos IMMt */
  "kaos-immt": "",

  /** Stiker IMMt */
  "stiker-immt": "",

  /** Enamel Bidang */
  "enamel-bidang": "",

  /** Enamel IMMt */
  "enamel-immt": "",

  /** Korek IMMt */
  "korek-immt": "",

  /** Keychain Bordir IMMt */
  "keychain-bordir": "",


  /* ──────────────────────────────────────────────
     GALERI PRODUK — array gambar per produk
     (ditampilkan sebagai thumbnail carousel di modal)
     Kosongkan array [] → hanya tampil 1 foto utama dari atas
     ────────────────────────────────────────────── */

  gallery: {

    /** Contoh galeri untuk Kaos IMMt (isi dengan URL foto detail) */
    "kaos-immt": [
      // "https://link-foto-depan.jpg",
      // "https://link-foto-belakang.jpg",
      // "https://link-foto-detail.jpg",
    ],

    "topi-immt": [],
    "stiker-immt": [],
    "enamel-bidang": [],
    "enamel-immt": [],
    "korek-immt": [],
    "keychain-bordir": [],
    "final-suit-bundle": [],
    "face-card-edition": [],
    "ground-entry-bundle": [],
  }
};


/* ═══════════════════════════════════════════════════════════════
   ⚠️  JANGAN EDIT DI BAWAH BARIS INI
   Kode di bawah menghubungkan konfigurasi ke index.html secara
   otomatis setelah halaman selesai memuat.
═══════════════════════════════════════════════════════════════ */

window.__imageConfigReady = function(makePlaceholder) {
  const a = window.__assets || {};
  const gallery = a.gallery || {};

  /* Override getImageSrc — digunakan untuk kartu produk & detail */
  window.getImageSrc = function(id, label) {
    if (window.__uploads && window.__uploads[id]) return window.__uploads[id];
    const url = a[id];
    if (url) return url;
    // fallback placeholder
    if (id === 'siteLogo')   return makePlaceholder('IMMt',        '#AE0001','#EEBA30','#740001');
    if (id === 'heroBanner') return makePlaceholder('Banner Hero', '#740001','#AE0001','#EEBA30');
    return makePlaceholder(label || id);
  };

  /* Override getGalleryImages — digunakan di modal carousel */
  window.getGalleryImages = function(item) {
    // Cek galeri kustom dari assets.js
    const customGallery = gallery[item.id];
    if (customGallery && customGallery.length > 0) return customGallery;

    // Fallback: gunakan gambar utama saja
    const main = window.getImageSrc(item.id, item.name);
    return [main];
  };
};
