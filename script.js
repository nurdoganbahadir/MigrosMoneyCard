class script {
  indirimOrani = 20;
  constructor(isim, soyisim, kartVarmi, urunler) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.kartVarmi = kartVarmi;
    this.urunler = urunler;
  }

  hesapla() {
    let odenecekTutar = 0;
    if (this.urunleriKontrolEt(this.urunler)) {
      this.urunler.forEach((urun) => {
        odenecekTutar += (urun.fiyat * (100 - this.indirimOrani)) / 100;
      });
    } else {
      alert("en az bir ürün satın almalısınız.");
    }
    return odenecekTutar;
  }

  urunleriKontrolEt(urunler) {
    if ((urunler = null && urunler.length > 0)) {
      return true;
    } else {
      return false;
    }
  }
}
