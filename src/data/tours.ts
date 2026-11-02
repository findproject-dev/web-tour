import type { Tour } from "../types";

export const tours: Tour[] = [
  {
    id: "tour-01",
    name: "Borneo Wild Escape",
    slug: "borneo-wild-escape",
    type: "multi-day",
    destination: "Tanjung Puting",
    province: "Kalimantan Tengah",
    duration: "3D2N",
    durationDays: 3,
    price: 3250000,
    priceDisplay: "Rp3.250.000",
    priceUnit: "per orang",
    shortDescription: "Jelajahi habitat asli orangutan dan susuri sungai dengan perahu klotok tradisional.",
    longDescription: "Petualangan tak terlupakan menyusuri Taman Nasional Tanjung Puting. Menginap di perahu klotok, terbangun oleh suara hutan, dan melihat langsung orangutan liar di Camp Leakey dan stasiun pemberian makan lainnya.",
    highlights: ["Orangutan", "Klotok cruise", "Rainforest", "Wildlife"],
    itinerary: [
      {
        day: 1,
        title: "Pangkalan Bun → Kumai → Tanjung Puting",
        description: "Setibanya di bandara, Anda akan dijemput menuju pelabuhan Kumai. Perjalanan menyusuri Sungai Sekonyer menggunakan klotok dimulai. Makan siang di atas kapal sambil menikmati pemandangan."
      },
      {
        day: 2,
        title: "Eksplorasi Hutan → Camp Leakey",
        description: "Setelah sarapan, kita akan menuju Pondok Tanggui untuk melihat orangutan. Siang hari, perjalanan dilanjutkan ke Camp Leakey, pusat rehabilitasi orangutan tertua."
      },
      {
        day: 3,
        title: "Morning Cruise → Kembali",
        description: "Nikmati pagi di atas klotok dengan suara burung dan bekantan. Sarapan sebelum klotok kembali merayap pelan menuju Kumai, lalu transfer ke Pangkalan Bun."
      }
    ],
    included: [
      "Akomodasi di perahu klotok",
      "Makan sesuai itinerary (B, L, D)",
      "Pemandu lokal berbahasa Indonesia/Inggris",
      "Tiket masuk Taman Nasional",
      "Ranger fee",
      "Transportasi darat lokal (Bandara - Pelabuhan PP)"
    ],
    excluded: [
      "Tiket penerbangan",
      "Pengeluaran pribadi",
      "Asuransi perjalanan",
      "Tipping guide & crew"
    ],
    heroImage: "/images/tours/tour-borneo-wild-escape.jpg",
    gallery: [
      "/images/exp_orangutan.jpg",
      "/images/hero_klotok_river.jpg"
    ],
    rating: 4.9,
    reviewCount: 124,
    availabilityStatus: "available",
    featured: true,
    relatedDestinations: ["tanjung-puting", "palangka-raya"],
    relatedTours: ["heart-of-borneo"]
  },
  {
    id: "tour-02",
    name: "Derawan Island Escape",
    slug: "derawan-island-escape",
    type: "multi-day",
    destination: "Derawan Islands",
    province: "Kalimantan Timur",
    duration: "4D3N",
    durationDays: 4,
    price: 4850000,
    priceDisplay: "Rp4.850.000",
    priceUnit: "per orang",
    shortDescription: "Berenang bersama penyu dan ubur-ubur tanpa sengat di perairan sebening kristal.",
    longDescription: "Jelajahi keajaiban bawah laut Kepulauan Derawan. Kunjungi Pulau Maratua, berenang dengan ubur-ubur di Danau Kakaban, dan nikmati pesona Sangalaki.",
    highlights: ["Island hopping", "Snorkeling", "Sunset"],
    itinerary: [
      {
        day: 1,
        title: "Berau → Tanjung Batu → Derawan",
        description: "Penjemputan di Bandara Berau, perjalanan darat ke pelabuhan Tanjung Batu, dilanjutkan speedboat ke Pulau Derawan. Check-in water villa dan free program."
      },
      {
        day: 2,
        title: "Maratua → Kakaban → Sangalaki",
        description: "Full day island hopping. Snorkeling di Maratua, berenang dengan ubur-ubur di Kakaban, dan mencari pari manta di Sangalaki."
      },
      {
        day: 3,
        title: "Gusung Sanggalau → Eksplorasi Derawan",
        description: "Pagi hari mengunjungi pulau pasir putih Gusung Sanggalau. Siang harinya bersantai dan snorkeling di sekitar pulau mencari penyu hijau."
      },
      {
        day: 4,
        title: "Derawan → Tanjung Batu → Berau",
        description: "Persiapan check-out. Perjalanan kembali menggunakan speedboat ke Tanjung Batu lalu mobil menuju Bandara Berau."
      }
    ],
    included: [
      "Akomodasi water villa (3 malam)",
      "Makan sesuai itinerary",
      "Speedboat private untuk island hopping",
      "Alat snorkeling dasar",
      "Tiket masuk pulau",
      "Transportasi darat lokal (Bandara - Pelabuhan PP)"
    ],
    excluded: [
      "Tiket penerbangan",
      "Pengeluaran pribadi",
      "Asuransi perjalanan",
      "Alat diving (jika ingin diving)"
    ],
    heroImage: "/images/tours/tour-derawan-island-escape.jpg",
    gallery: [
      "/images/exp_island.jpg",
      "/images/cta_bg.jpg"
    ],
    rating: 4.8,
    reviewCount: 96,
    availabilityStatus: "available",
    featured: true,
    relatedDestinations: ["derawan-islands", "kakaban-island"],
    relatedTours: []
  },
  {
    id: "tour-03",
    name: "Meratus Highland Adventure",
    slug: "meratus-highland-adventure",
    type: "multi-day",
    destination: "Loksado",
    province: "Kalimantan Selatan",
    duration: "3D2N",
    durationDays: 3,
    price: 2150000,
    priceDisplay: "Rp2.150.000",
    priceUnit: "per orang",
    shortDescription: "Trekking santai dan bamboo rafting di tengah kesejukan Pegunungan Meratus.",
    longDescription: "Petualangan yang memadukan keindahan alam pegunungan, segarnya air terjun, dan sensasi mengarungi sungai menggunakan rakit bambu tradisional bersama Suku Dayak Meratus.",
    highlights: ["Trekking", "Bamboo rafting", "Waterfall"],
    itinerary: [
      {
        day: 1,
        title: "Banjarmasin → Kandangan → Loksado",
        description: "Berangkat dari Banjarmasin menuju Loksado dengan pemandangan pegunungan. Check-in lodge tepi sungai. Sore hari eksplorasi desa sekitar."
      },
      {
        day: 2,
        title: "Trekking → Air Terjun Haratai",
        description: "Trekking melintasi hutan tropis dan jembatan gantung menuju Air Terjun Haratai yang megah. Bermain air dan makan siang ala piknik."
      },
      {
        day: 3,
        title: "Bamboo Rafting → Banjarmasin",
        description: "Puncak petualangan: menyusuri Sungai Amandit menggunakan rakit bambu yang dikemudikan joki lokal. Siang hari perjalanan kembali ke Banjarmasin."
      }
    ],
    included: [
      "Akomodasi lodge 2 malam",
      "Makan sesuai itinerary",
      "Pemandu lokal",
      "Bamboo rafting (maks 3 pax per rakit)",
      "Tiket masuk Air Terjun",
      "Transportasi darat dari Banjarmasin PP"
    ],
    excluded: [
      "Tiket penerbangan ke Banjarmasin",
      "Pengeluaran pribadi",
      "Asuransi perjalanan"
    ],
    heroImage: "/images/tours/tour-meratus-highland-adventure.jpg",
    gallery: [
      "/images/exp_meratus.jpg",
      "/images/dest_kalsel.jpg"
    ],
    rating: 4.7,
    reviewCount: 45,
    availabilityStatus: "available",
    featured: true,
    relatedDestinations: ["loksado", "geopark-meratus"],
    relatedTours: ["loksado-day-adventure", "river-culture-journey"]
  },
  {
    id: "tour-04",
    name: "River & Culture Journey",
    slug: "river-culture-journey",
    type: "multi-day",
    destination: "Banjarmasin",
    province: "Kalimantan Selatan",
    duration: "3D2N",
    durationDays: 3,
    price: 1950000,
    priceDisplay: "Rp1.950.000",
    priceUnit: "per orang",
    shortDescription: "Jelajahi kehidupan otentik seribu sungai dan pesona budaya Banjar.",
    longDescription: "Rasakan denyut nadi kehidupan Banjar yang tak bisa lepas dari sungai. Dari hiruk pikuk pasar terapung subuh hari hingga ketenangan pulau monyet di hilir Barito.",
    highlights: ["Floating market", "River cruise", "Local culture"],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan Banjarmasin",
        description: "Penjemputan di bandara. City tour mengunjungi Masjid Sabilal Muhtadin, Menara Pandang, dan menikmati soto Banjar. Check in hotel."
      },
      {
        day: 2,
        title: "Pasar Terapung Lok Baintan → Pulau Kembang",
        description: "Subuh buta menyusuri sungai menuju Pasar Terapung Lok Baintan. Sarapan di atas perahu. Siang hari mengunjungi Pulau Kembang, habitat monyet ekor panjang."
      },
      {
        day: 3,
        title: "Pusat Intan Martapura → Airport",
        description: "Mengunjungi kota Martapura, pusat pendulangan dan penggosokan intan. Belanja oleh-oleh khas sebelum kembali ke bandara."
      }
    ],
    included: [
      "Akomodasi hotel bintang 3 (2 malam)",
      "Makan sesuai itinerary",
      "Sewa perahu klotok/jukung",
      "Pemandu lokal",
      "Transportasi darat lokal"
    ],
    excluded: [
      "Tiket penerbangan",
      "Pengeluaran pribadi",
      "Asuransi"
    ],
    heroImage: "/images/tours/tour-river-culture-journey.jpg",
    gallery: [
      "/images/hero_klotok_river.jpg",
      "/images/exp_river.jpg"
    ],
    rating: 4.8,
    reviewCount: 78,
    availabilityStatus: "available",
    featured: true,
    relatedDestinations: ["banjarmasin", "lok-baintan-floating-market", "martapura"],
    relatedTours: ["meratus-highland-adventure"]
  },
  {
    id: "tour-05",
    name: "Heart of Borneo",
    slug: "heart-of-borneo",
    type: "multi-day",
    destination: "Kalimantan Tengah",
    province: "Kalimantan Tengah",
    duration: "5D4N",
    durationDays: 5,
    price: 5750000,
    priceDisplay: "Rp5.750.000",
    priceUnit: "per orang",
    shortDescription: "Ekspedisi mendalam menggabungkan susur sungai, hutan hujan, dan satwa liar.",
    longDescription: "Paket ekspedisi komprehensif bagi Anda yang ingin mengenal lebih dalam tentang ekosistem rawa gambut, orangutan, dan kehidupan masyarakat lokal Kalimantan Tengah.",
    highlights: ["Rainforest", "Wildlife", "River expedition"],
    itinerary: [
      { day: 1, title: "Kedatangan Palangka Raya", description: "Tiba di Palangka Raya. Susur Sungai Kahayan sore hari sambil melihat aktivitas warga." },
      { day: 2, title: "Taman Nasional Sebangau", description: "Trekking melintasi rawa gambut di Sebangau, mencari keberadaan orangutan liar dan satwa endemik lainnya." },
      { day: 3, title: "Palangka Raya → Pangkalan Bun → Kumai", description: "Perjalanan darat / penerbangan perintis (kondisional) menuju Pangkalan Bun. Transfer ke Kumai dan naik klotok." },
      { day: 4, title: "Tanjung Puting Eksplorasi", description: "Seharian mengamati orangutan di feeding station Pondok Tanggui dan Camp Leakey." },
      { day: 5, title: "Kumai → Pangkalan Bun Airport", description: "Kembali ke pelabuhan Kumai dan menuju bandara untuk penerbangan pulang." }
    ],
    included: [
      "Akomodasi (Hotel + Klotok)",
      "Makan sesuai itinerary",
      "Tiket masuk kawasan konservasi",
      "Pemandu lokal ekspedisi",
      "Transportasi darat dan sungai"
    ],
    excluded: [
      "Tiket penerbangan",
      "Pengeluaran pribadi",
      "Asuransi"
    ],
    heroImage: "/images/tours/tour-heart-of-borneo.jpg",
    gallery: [
      "/images/brand_story.jpg",
      "/images/exp_orangutan.jpg"
    ],
    rating: 4.9,
    reviewCount: 32,
    availabilityStatus: "limited",
    featured: true,
    relatedDestinations: ["sebangau-national-park", "tanjung-puting", "palangka-raya"],
    relatedTours: ["borneo-wild-escape"]
  },

  // Day Trips
  {
    id: "tour-06",
    name: "Mahakam River Day Cruise",
    slug: "mahakam-river-day-cruise",
    type: "day-trip",
    destination: "Mahakam River",
    province: "Kalimantan Timur",
    duration: "1 Hari",
    durationDays: 1,
    price: 650000,
    priceDisplay: "Rp650.000",
    priceUnit: "per orang",
    shortDescription: "Pengalaman 1 hari menyusuri sungai raksasa Mahakam.",
    longDescription: "Escape sejenak dari kota Samarinda. Nikmati senja di atas perahu kayu menyusuri Sungai Mahakam, melihat aktivitas kapal tongkang dan desa pinggir sungai.",
    highlights: ["River cruise", "Sunset", "Samarinda city scape"],
    itinerary: [
      { day: 1, title: "Samarinda Port → Mahakam Cruise", description: "Berkumpul di pelabuhan sore hari. Susur sungai menikmati sunset, makan malam di atas kapal, dan kembali." }
    ],
    included: ["Sewa perahu wisata", "Makan malam", "Snack", "Pemandu"],
    excluded: ["Transportasi ke pelabuhan", "Pengeluaran pribadi"],
    heroImage: "/images/tours/tour-mahakam-river-day-cruise.jpg",
    gallery: [
      "/images/dest_kaltim.jpg",
      "/images/exp_river.jpg"
    ],
    rating: 4.5,
    reviewCount: 56,
    availabilityStatus: "available",
    featured: false,
    relatedDestinations: ["mahakam-river"],
    relatedTours: []
  },
  {
    id: "tour-07",
    name: "Loksado Day Adventure",
    slug: "loksado-day-adventure",
    type: "day-trip",
    destination: "Loksado",
    province: "Kalimantan Selatan",
    duration: "1 Hari",
    durationDays: 1,
    price: 750000,
    priceDisplay: "Rp750.000",
    priceUnit: "per orang",
    shortDescription: "Rakit bambu dan air terjun dalam satu hari dari Banjarmasin.",
    longDescription: "Perjalanan padat dari Banjarmasin menuju Loksado untuk merasakan bamboo rafting di Sungai Amandit, cocok untuk waktu luang singkat.",
    highlights: ["Bamboo rafting", "Dayak village"],
    itinerary: [
      { day: 1, title: "Banjarmasin → Loksado → Rafting → Kembali", description: "Perjalanan pagi dari Banjarmasin. Tiba di Loksado, rafting 2 jam, makan siang, kembali ke Banjarmasin." }
    ],
    included: ["Transportasi darat PP", "Rakit bambu", "Makan siang", "Pemandu"],
    excluded: ["Pengeluaran pribadi"],
    heroImage: "/images/tours/tour-loksado-day-adventure.jpg",
    gallery: [
      "/images/exp_meratus.jpg",
      "/images/tours/tour-meratus-highland-adventure.jpg"
    ],
    rating: 4.6,
    reviewCount: 22,
    availabilityStatus: "available",
    featured: false,
    relatedDestinations: ["loksado"],
    relatedTours: ["meratus-highland-adventure"]
  },
  {
    id: "tour-08",
    name: "Pontianak Heritage & Equator",
    slug: "pontianak-heritage-equator",
    type: "day-trip",
    destination: "Pontianak",
    province: "Kalimantan Barat",
    duration: "1 Hari",
    durationDays: 1,
    price: 450000,
    priceDisplay: "Rp450.000",
    priceUnit: "per orang",
    shortDescription: "Eksplorasi budaya dan kuliner Kota Khatulistiwa.",
    longDescription: "Keliling kota Pontianak mengunjungi Tugu Khatulistiwa, Keraton Kadriah, dan bersantai menikmati kopi Asiang serta kuliner lokal lainnya.",
    highlights: ["Equator monument", "Culinary", "River Kapuas"],
    itinerary: [
      { day: 1, title: "City Tour", description: "Kunjungan ke Tugu Khatulistiwa, Keraton Kadriah, Museum Kalbar, dan susur Kapuas sore hari." }
    ],
    included: ["Transportasi dalam kota", "Makan siang", "Tiket masuk wisata", "Tiket kapal susur Kapuas"],
    excluded: ["Biaya ngopi & jajan pribadi", "Transportasi dari/ke bandara"],
    heroImage: "/images/tours/tour-pontianak-heritage-equator.jpg",
    gallery: [
      "/images/dest_kalbar.jpg",
      "/images/brand_story.jpg"
    ],
    rating: 4.7,
    reviewCount: 41,
    availabilityStatus: "available",
    featured: false,
    relatedDestinations: ["pontianak"],
    relatedTours: []
  },
  
  // Private
  {
    id: "tour-09",
    name: "Build Your Borneo",
    slug: "build-your-borneo",
    type: "private",
    destination: "Kalimantan",
    province: "Semua",
    duration: "Custom",
    durationDays: 0,
    price: 1250000,
    priceDisplay: "Mulai Rp1.250.000",
    priceUnit: "per orang / hari",
    shortDescription: "Rancang itinerary idealmu sendiri bersama tim ahli kami.",
    longDescription: "Punya bucket list spesifik? Ingin durasi yang lebih lama atau fokus pada fotografi satwa? Tim lokal kami siap mewujudkan perjalanan custom yang dirancang khusus untuk preferensimu.",
    highlights: ["Custom itinerary", "Private guide", "Flexible date"],
    itinerary: [
      { day: 1, title: "Diskusi & Planning", description: "Hubungi kami via WhatsApp untuk mendiskusikan destinasi, preferensi akomodasi, dan budget." }
    ],
    included: ["Custom", "Private Transport", "Dedicated Local Expert"],
    excluded: ["Custom"],
    heroImage: "/images/tours/tour-build-your-borneo.jpg",
    gallery: [
      "/images/why_guide.jpg",
      "/images/hero_klotok_river.jpg"
    ],
    rating: 5.0,
    reviewCount: 12,
    availabilityStatus: "available",
    featured: true,
    relatedDestinations: [],
    relatedTours: []
  }
];
