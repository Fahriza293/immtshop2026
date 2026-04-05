// ═══════════════════════════════════════════════════════════════
// assets.js — KONFIGURASI GAMBAR IMMt SHOP
// ═══════════════════════════════════════════════════════════════
//
// Cara pakai:
//   1. Taruh file gambar di folder  images/
//   2. Ganti isi array di bawah sesuai nama file yang kamu upload
//   3. Setiap produk bisa punya 1–4 gambar
//   4. Commit & push ke GitHub — selesai!
//
// Format penamaan yang dianjurkan:
//   images/imagekeychain1.jpg  (foto 1 keychain)
//   images/imagekeychain2.jpg  (foto 2 keychain)
//   ...dst sampai foto ke-4
//
// File khusus:
//   images/logo.jpg       → logo di header
//   images/herobanner.jpg → background hero section
//   images/qris.jpg       → kode QRIS pembayaran
//
// ═══════════════════════════════════════════════════════════════
// DAFTAR GAMBAR PER PRODUK (edit di sini)
// ═══════════════════════════════════════════════════════════════

const ASSETS_CONFIG = {

  // ── PRODUK SATUAN ──────────────────────────────────────────

  'topi-immt': [
    'images/imagetopi1.jpg',
    'images/imagetopi2.jpg',
    'images/imagetopi3.jpg',
    'images/imagetopi4.jpg',
  ],

  'kaos-immt': [
    'images/imagekaos1.jpg',
    'images/imagekaos2.jpg',
    'images/imagekaos3.jpg',
    'images/imagekaos4.jpg',
  ],

  'stiker-immt': [
    'images/imagestiker1.jpg',
    'images/imagestiker2.jpg',
    'images/imagestiker3.jpg',
    'images/imagestiker4.jpg',
  ],

  'enamel-bidang': [
    'images/imageenamelb1.jpg',
    'images/imageenamelb2.jpg',
    'images/imageenamelb3.jpg',
    'images/imageenamelb4.jpg',
  ],

  'enamel-immt': [
    'images/imageenami1.jpg',
    'images/imageenami2.jpg',
    'images/imageenami3.jpg',
    'images/imageenami4.jpg',
  ],

  'korek-immt': [
    'images/imagekorek1.jpg',
    'images/imagekorek2.jpg',
    'images/imagekorek3.jpg',
    'images/imagekorek4.jpg',
  ],

  'keychain-bordir': [
    'images/imagekeychain1.jpg',
    'images/imagekeychain2.jpg',
    'images/imagekeychain3.jpg',
    'images/imagekeychain4.jpg',
  ],

  // ── BUNDLE ────────────────────────────────────────────────

  'wizarding-essentials-kit': [
    'images/imagebundle11.jpg',
    'images/imagebundle12.jpg',
    'images/imagebundle13.jpg',
    'images/imagebundle14.jpg',
  ],

  'ministry-magic-supply': [
    'images/imagebundle21.jpg',
    'images/imagebundle22.jpg',
    'images/imagebundle23.jpg',
    'images/imagebundle24.jpg',
  ],

  'daily-muggle-kit': [
    'images/imagebundle31.jpg',
    'images/imagebundle32.jpg',
    'images/imagebundle33.jpg',
    'images/imagebundle34.jpg',
  ],

  // ── SPECIAL ───────────────────────────────────────────────

  'siteLogo':  ['images/logo.jpg'],
  'heroBanner':['images/herobanner.jpg'],
  'qrisImage': ['images/qris.jpg'],

};

// ═══════════════════════════════════════════════════════════════
// Jangan edit di bawah ini kecuali kamu tahu yang kamu lakukan
// ═══════════════════════════════════════════════════════════════
// File ini TIDAK digunakan saat ini karena konfigurasi sudah
// inline di index.html. Gunakan ini sebagai referensi saja,
// atau jika kamu ingin memindahkan konfigurasi ke sini lagi.
