let sayilar = [];
let siralanmisSayilar = [];

for (let i = 1; i <= 99; i++) 
{
  sayilar.push(i);
}

function yazdir() 
{
  let sayiKutusu = document.getElementById('sayi-kutusu');
  sayiKutusu.innerHTML = '';

  for (let i = 0; i < siralanmisSayilar.length; i++) 
  {
    let sayiElementi = document.createElement('div');
    sayiElementi.classList.add('sayi');
    sayiElementi.id = `sayi-${siralanmisSayilar[i]}`;
    sayiElementi.textContent = siralanmisSayilar[i];
    sayiKutusu.appendChild(sayiElementi);
  }
}

function sirala() 
{
  siralanmisSayilar = [...sayilar]; 
  siralanmisSayilar.sort((a, b) => a - b);
  
  yazdir();

  document.getElementById('siralama-butonu').classList.add('pasif');
  document.getElementById('rastgele-sayi-butonu').classList.remove('pasif');
}

function rastgeleSayiSec() 
{
  let rastgeleIndex = Math.floor(Math.random() * siralanmisSayilar.length);
  let rastgeleSayi = siralanmisSayilar[rastgeleIndex];
  
  let rastgeleSayiElementi = document.getElementById(`sayi-${rastgeleSayi}`);
  rastgeleSayiElementi.classList.add('kirmizi-kalin');

  siralanmisSayilar.splice(rastgeleIndex, 1);

  
  if (siralanmisSayilar.length === 0) 
  {
    document.getElementById('rastgele-sayi-butonu').classList.add('pasif');
  }
}
