import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useReveal from '../components/useReveal';

const prestasiData = [
  { tahun: '2024', judul: 'Juara 1 Lomba Mewarnai', tingkat: 'Tingkat Kecamatan Ciampea', delay: 1 },
  { tahun: '2024', judul: 'Juara 3 Lomba Gerak & Lagu', tingkat: 'Tingkat Kecamatan Ciampea', delay: 2 },
  { tahun: '2023', judul: 'Juara 2 Lomba Hafalan Surat Pendek', tingkat: 'Tingkat Kecamatan Ciampea', delay: 3 },
  { tahun: '2023', judul: 'Penampil Terbaik Pentas Seni', tingkat: 'Tingkat Kabupaten Bogor', delay: 4 },
  { tahun: '2022', judul: 'Juara 1 Lomba Menyanyi', tingkat: 'Tingkat Kecamatan Ciampea', delay: 5 },
  { tahun: '2022', judul: 'Juara 2 Lomba Fashion Show Budaya', tingkat: 'Tingkat Kabupaten Bogor', delay: 6 },
];

const rapor2025 = [
  { label: 'Proses Belajar Sesuai Anak Usia Dini', status: 'Baik', naik: true, nilai: '+3.48 dari 2024' },
  { label: 'Pembelajaran Membangun Kemampuan Fondasi', status: 'Baik', naik: true, nilai: '+0.9 dari 2024' },
  { label: 'Kemitraan dengan Orang Tua/Wali', status: 'Baik', naik: false, nilai: '-6.8 dari 2024' },
];

const rencanaPeningkatan = [
  'Peningkatan profesionalisme pendidik melalui pelatihan berkelanjutan',
  'Pengembangan asesmen yang lebih responsif terhadap karakteristik anak',
  'Penguatan nilai kebangsaan melalui kegiatan Pra Siaga dan Polisi Sahabat',
  'Peningkatan kemitraan dengan orang tua melalui program parenting rutin',
];

function Prestasi() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        {/* PAGE HEADER */}
        <section className="relative overflow-hidden text-white text-center px-6 pt-[70px] pb-[50px] bg-gradient-to-br from-green-dark to-green-mid">
          <h1 className="font-fredoka text-[42px] mb-2">Prestasi &amp; Capaian</h1>
          <p className="text-[17px] opacity-[0.88] font-semibold">Kebanggaan TK Manbaul Ulum Ciampea</p>
          <div
            className="absolute -bottom-0.5 left-0 right-0 h-10 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,40 Q300,0 600,30 Q900,60 1200,20 L1200,40Z' fill='%23f5f0e8'/%3E%3C/svg%3E\")",
            }}
          />
        </section>

        {/* PRESTASI LOMBA */}
        <section className="py-16 bg-white">
          <div className="max-w-[1100px] mx-auto px-7">
            <h2 className="font-fredoka text-[32px] text-green-dark text-center mb-2.5" data-reveal="up">
              🏆 Prestasi Lomba
            </h2>
            <p className="text-center text-[#555] text-base font-semibold max-w-[680px] mx-auto mb-9" data-reveal="up">
              Kami bangga dengan pencapaian murid-murid TK Manbaul Ulum yang telah mengharumkan nama sekolah di berbagai ajang.
            </p>
            <div className="grid gap-[22px] mt-8" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {prestasiData.map(item => (
                <div
                  key={`${item.tahun}-${item.judul}`}
                  className="relative bg-white rounded px-6 py-[26px] shadow-card border-t-[5px] border-green-mid transition-all hover:-translate-y-1.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
                  data-reveal="scale"
                  data-delay={item.delay}
                >
                  <span className="inline-block bg-yellow text-brown-text font-extrabold text-xs px-3 py-[3px] rounded-full mb-2.5">
                    {item.tahun}
                  </span>
                  <h3 className="font-fredoka text-lg text-green-dark mb-1.5">{item.judul}</h3>
                  <p className="text-[13px] text-gray-soft font-semibold">{item.tingkat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RAPOR PENDIDIKAN 2025 */}
        <section className="bg-[#e8f5e9] py-[60px]">
          <div className="max-w-[1100px] mx-auto px-7">
            <h2 className="font-fredoka text-[32px] text-green-dark text-center mb-2.5" data-reveal="up">
              📊 Rapor Pendidikan 2025
            </h2>
            <p className="text-center text-[#555] text-base font-semibold max-w-[680px] mx-auto mb-9" data-reveal="up">
              Berdasarkan hasil Rapor Pendidikan Kemdikbud Ristek tahun 2025, TK Manbaul Ulum menunjukkan capaian positif:
            </p>
            <div className="grid gap-5 mt-7" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {rapor2025.map((r, i) => (
                <div
                  key={r.label}
                  data-reveal="scale"
                  data-delay={i + 1}
                  className={`bg-white rounded-2xl p-6 shadow-[0_3px_12px_rgba(0,0,0,0.08)] border-t-4 ${r.naik ? 'border-green-mid' : 'border-red-accent'}`}
                >
                  <div className="text-[28px] mb-2">{r.naik ? '📈' : '📉'}</div>
                  <span
                    className={`font-extrabold text-xs px-2.5 py-[3px] rounded-full ${r.naik ? 'bg-green-light text-[#2d6a4f]' : 'bg-[#fde8e8] text-[#b03d2e]'}`}
                  >
                    {r.status}
                  </span>
                  <p className="font-bold text-brown-text text-sm my-2.5 leading-snug">{r.label}</p>
                  <span className="text-xs text-gray-soft font-bold">{r.nilai}</span>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-6 mt-6 shadow-[0_3px_12px_rgba(0,0,0,0.08)]" data-reveal="up">
              <h3 className="font-fredoka text-green-dark mb-3">Rencana Peningkatan</h3>
              <ul className="flex flex-col gap-2">
                {rencanaPeningkatan.map(item => (
                  <li key={item} className="relative text-sm text-[#555] font-semibold pl-5">
                    <span className="absolute left-0 text-green-mid">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EKSTRAKURIKULER */}
        <section className="py-16 bg-white">
          <div className="max-w-[1100px] mx-auto px-7">
            <h2 className="font-fredoka text-[32px] text-green-dark text-center mb-2.5" data-reveal="up">
              🌟 Ekstrakurikuler
            </h2>
            <div className="grid gap-[22px] mt-7" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              {ekskul.map((e, i) => (
                <div
                  key={e.nama}
                  data-reveal="up"
                  data-delay={i + 1}
                  className="bg-cream rounded-2xl px-6 py-7 text-center border-2 border-cream-dark transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="text-[52px] mb-3">{e.icon}</div>
                  <h3 className="font-fredoka text-green-dark text-xl mb-2">{e.nama}</h3>
                  <p className="text-[13px] text-[#666] font-semibold leading-[1.7]">{e.tujuan}</p>
                  <span className="inline-block mt-3 bg-green-dark text-white text-[11px] font-extrabold px-3 py-1 rounded-full">
                    Setiap Hari Sabtu
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Prestasi;
