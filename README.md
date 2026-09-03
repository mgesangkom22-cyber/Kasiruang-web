# KASIRUANG — Web Frontend Prototype

Website frontend prototype & production-ready untuk **Kasiruang Coffee Shop**, dibangun menggunakan **React**, **Vite**, **React Router**, dan **CSS Modules/Custom CSS**.

Website ini memiliki karakter visual **Scrapbook / Handmade / Playful** dengan elemen khas: torn paper, polaroid photos, masking tape, handwritten typography, doodle, kucing (Oyen), dan blue-cream color palette.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: React Router (`react-router-dom`)
- **Styling**: Vanilla CSS (Global variables, Scrapbook utilities, Flexbox/Grid, clamp)
- **Data Source**: JSON (`src/data/menu.json` & `src/data/business.json`)

---

## 🚀 Quick Start & Cara Install

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Server Development
```bash
npm run dev
```
Buka URL lokal yang ditampilkan di terminal (misal `http://localhost:5173`).

---

## 📁 Struktur Project

```text
Kasiruang-web/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── kasiruang/          # Foto suasana, gazebo, oyen, bangunan Kasiruang
│       │   ├── kasiruang-front.webp
│       │   ├── kasiruang-gazebo.webp
│       │   ├── kasiruang-cat.webp
│       │   ├── kasiruang-space.webp
│       │   └── kasiruang-menu.webp
│       └── menu/               # Foto produk-produk menu
│           ├── americano.webp
│           ├── coffee-latte.webp
│           └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css          # Navigation bar (desktop & mobile drawer)
│   │   ├── Hero.jsx / .css            # Banner & Main Hero Kasiruang
│   │   ├── MenuPreview.jsx / .css     # Preview 6 item coffee + Polaroid Collage
│   │   ├── OyenSection.jsx / .css     # Section Kucing Oyen + Grid Paper
│   │   ├── SimplePlaceSection.jsx     # Section Tempatnya Sederhana + Polaroid
│   │   ├── NgopagSection.jsx / .css   # Card Ngopag Minggu Pagi
│   │   ├── LocationSection.jsx / .css # Informasi lokasi & Doodle Map
│   │   ├── Footer.jsx / .css          # Blue full-width footer
│   │   ├── MenuCard.jsx / .css        # Card item menu
│   │   ├── MenuImage.jsx / .css       # Image with error fallback doodle
│   │   └── CategorySidebar.jsx / .css # Sidebar kategori (Desktop) / Chips (Mobile)
│   ├── data/
│   │   ├── menu.json                  # Database sementara item menu Kasiruang
│   │   └── business.json              # Data kontak, alamat, jam buka
│   ├── pages/
│   │   ├── Home.jsx                   # Halaman utama (/)
│   │   └── Menu.jsx                   # Halaman menu lengkap (/menu)
│   ├── styles/
│   │   └── global.css                 # Global CSS variables & scrapbook utilities
│   ├── App.jsx                        # Layout utama & Routing
│   ├── index.css                      # Import global css
│   └── main.jsx                       # Entrypoint React
├── index.html                         # Entry HTML + Google Fonts (Patrick Hand, Kalam, Nunito)
├── package.json
└── README.md
```

---

## 🖼️ Cara Mengganti Foto Kasiruang

Foto suasana Kasiruang disimpan di folder `public/images/kasiruang/`:
- `kasiruang-front.webp`: Foto bangunan utama Kasiruang (Hero banner).
- `kasiruang-gazebo.webp`: Foto area gazebo bambu.
- `kasiruang-cat.webp`: Foto kucing Oyen.
- `kasiruang-space.webp`: Foto area nongkrong / meja outdoor.
- `kasiruang-menu.webp`: Foto papan / kartu menu fisik.

**Langkah Mengganti:**
1. Siapkan file gambar baru (format `.webp`, `.jpg`, atau `.png`).
2. Timpa file lama di folder `public/images/kasiruang/` dengan nama file yang sama (misal `kasiruang-gazebo.webp`).
3. Refresh browser untuk melihat perubahan.

---

## ☕ Cara Mengganti Foto Menu

Foto produk menu disimpan di `public/images/menu/`:
Format penamaan menyesuaikan dengan `slug` item pada `src/data/menu.json`.

Contoh:
- `americano.webp`
- `coffee-latte.webp`
- `aren-latte.webp`
- `matcha.webp`

> **Note:** Jika file gambar tidak ditemukan atau error, component `MenuImage.jsx` akan secara otomatis menampilkan **fallback card** berwarna cream dengan doodle cangkir kopi dan nama produk, tanpa merusak tampilan.

---

## 📝 Cara Edit Menu Data (`menu.json`)

Buka file `src/data/menu.json`. Setiap item menu memiliki format berikut:

```json
{
  "id": 1,
  "name": "Americano",
  "slug": "americano",
  "category": "coffee",
  "categoryLabel": "Coffee",
  "price": 15000,
  "priceLabel": "15K",
  "description": "Kopi hitam dengan rasa tegas dan clean...",
  "image": "/images/menu/americano.webp",
  "isAvailable": true,
  "isPlaceholderImage": true
}
```

Pilihan kategori (`category`):
- `coffee` (Coffee)
- `non-coffee` (Non-Coffee)
- `rakyatku` (Rakyatku)
- `squash` (Squash)
- `limun` (Limun)
- `food` (Snacks & Food)

---

## 📍 Cara Edit Alamat / WhatsApp / Instagram / Jam Buka (`business.json`)

Buka file `src/data/business.json`:

```json
{
  "name": "Kasiruang",
  "tagline": "Ruang Buat Ngopi & Nongkrong",
  "instagram": "https://instagram.com/kasiruang",
  "whatsapp": "https://wa.me/628123456789",
  "maps": "https://maps.google.com/...",
  "address": "Jalan Contoh No. 123, Contoh Desa, Contoh Kecamatan, Yogyakarta",
  "openingHours": {
    "mondaySaturday": "16.00 - 23.00",
    "sunday": "08.00 - 23.00"
  }
}
```

Ubah nilai field di atas. Semua informasi kontak, link tombol Google Maps, dan jam operasional pada seluruh website akan langsung terupdate secara otomatis.

---

## 📦 Build untuk Production

Untuk menghasilkan static production bundle:

```bash
npm run build
```

Hasil build akan berada di folder `dist/` dan siap dideploy ke platform hosting seperti Vercel, Netlify, Github Pages, atau Nginx web server.
