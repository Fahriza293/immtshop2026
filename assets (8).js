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
  siteLogo:  "",
  heroBanner:"",
  qrisImage: "",

  /* ──────────────────────────────────────────────
     BUNDLES
     ────────────────────────────────────────────── */
  "ministry-magic-supply":  "",
  "daily-muggle-kit":       "",
  "wizarding-essentials-kit":"",

  /* ──────────────────────────────────────────────
     PRODUK
     ────────────────────────────────────────────── */
  "topi-immt":      "",
  "kaos-immt":      "",
  "stiker-immt":    "",   // 1 gambar untuk semua opsi stiker
  "enamel-bidang":  "",
  "enamel-immt":    "",
  "korek-immt":     "",
  "keychain-bordir":"",

  /* ──────────────────────────────────────────────
     GALERI — array foto per produk untuk carousel
     Kosongkan [] → hanya tampil 1 foto utama
     ────────────────────────────────────────────── */
  gallery: {
    "kaos-immt":              [],  // contoh: ["foto-depan.jpg","foto-belakang.jpg"]
    "topi-immt":              [],
    "stiker-immt":            [],
    "enamel-bidang":          [],
    "enamel-immt":            [],
    "korek-immt":             [],
    "keychain-bordir":        [],
    "ministry-magic-supply":  [],
    "daily-muggle-kit":       [],
    "wizarding-essentials-kit":[],
  }
};

/* ═══════════════════════════════════════════════════
   ⚠️  JANGAN EDIT DI BAWAH BARIS INI
═══════════════════════════════════════════════════ */
window.__imageConfigReady = function(makePlaceholder) {
  const a = window.__assets || {};
  const g = a.gallery || {};

  window.getImageSrc = function(id, label) {
    if (window.__uploads && window.__uploads[id]) return window.__uploads[id];
    if (a[id]) return a[id];
    if (id === 'siteLogo')   return makePlaceholder('IMMt',        '#AE0001','#EEBA30','#740001');
    if (id === 'heroBanner') return makePlaceholder('Banner Hero', '#740001','#AE0001','#EEBA30');
    return makePlaceholder(label || id);
  };

  window.getGalleryImages = function(item) {
    const cg = g[item.id];
    if (cg && cg.length > 0) return cg;
    return [window.getImageSrc(item.id, item.name)];
  };
};
