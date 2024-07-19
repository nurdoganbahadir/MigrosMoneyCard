let mesaj = ` 
Migros'a hoşgeldiniz.
Monet kartınız var mı?
1-Evet
2-Hayır
`;

const urunler = [
  {
    urunIsmi: "Süt",
    fiyat: 15,
  },
  {
    urunIsmi: "bebek bezi",
    fiyat: 100,
  },
  {
    urunIsmi: "kuşbaşı",
    fiyat: 220,
  },
];

let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc) {
  let isim = prompt("adınızı giriniz");
  let soyisim = prompt("soyisminizi giriniz");
  const musteri = new Musteri(isim, soyisim, sonuc, urunler);
  odenecekTutar = musteri.hesapla();

  alert(`Müşteri Bilgileri : ${isim} ${soyisim}
    Ödenecek Tutar ${odenecekTutar}
    `);
} else {
  const musteri = new Musteri(null, null, sonuc, urunler);
  odenecekTutar = musteri.hesapla();
  alert(`Ödenecek tutar: ${odenecekTutar}`);
}
