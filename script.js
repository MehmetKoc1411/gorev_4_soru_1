let sayilar = [];
let siralanmisSayilar = [];

// Sayıları 1'den 99'a kadar diziye ekleme
for (let i = 1; i <= 99; i++) {
  sayilar.push(i);
}

// Sayıları ekrana yazdırma fonksiyonu
function yazdir() {
  let sayiKutusu = document.getElementById('sayi-kutusu');
  sayiKutusu.innerHTML = '';

  for (let i = 0; i < siralanmisSayilar.length; i++) {
    let sayiElementi = document.createElement('div');
    sayiElementi.classList.add('sayi');
    sayiElementi.id = `sayi-${siralanmisSayilar[i]}`;
    sayiElementi.textContent = siralanmisSayilar[i];
    sayiKutusu.appendChild(sayiElementi);
  }
}

// Sayıları sıralayabilme fonksiyonu
function sirala() {
  siralanmisSayilar = [...sayilar];  // Orijinal diziyi bozmamak için kopyalama
  siralanmisSayilar.sort((a, b) => a - b);

  // Sayıları ekrana yazdırma
  yazdir();

  // Butonları kontrol etme
  document.getElementById('siralama-butonu').classList.add('pasif');
  document.getElementById('rastgele-sayi-butonu').classList.remove('pasif');
}

// Rastgele sayı seçme fonksiyonu
function rastgeleSayiSec() {
  let rastgeleIndex = Math.floor(Math.random() * siralanmisSayilar.length);
  let rastgeleSayi = siralanmisSayilar[rastgeleIndex];

  // Rastgele sayıyı kırmızı ve kalın olarak seçme
  let rastgeleSayiElementi = document.getElementById(`sayi-${rastgeleSayi}`);
  rastgeleSayiElementi.classList.add('kirmizi-kalin');

  // Rastgele sayıyı bir sonraki seçime kadar sabitleme
  siralanmisSayilar.splice(rastgeleIndex, 1);

  // Eğer tüm sayılar seçildiyse butonu pasifleştir
  if (siralanmisSayilar.length === 0) {
    document.getElementById('rastgele-sayi-butonu').classList.add('pasif');
  }
}
