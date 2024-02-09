//No. 1 -- mencari luas persegi panjang
const panjang1 = 10;
const lebar1 = 21;
const luas = panjang1 * lebar1;
console.log(luas);

/*
No.2 Mencari Keliling Persegi
1. Tentukan Panjang dan Lebarnya
2. Masukkan panjang dan lebar kedalam variable
3. masukkan rumus keliling = 2P + 2L
4. Tampilkan hasilnya
*/
const panjang2 = 10;
const lebar2 = 21;
const keliling2 = 2 * (panjang2+lebar2)
const keliling = (2 * panjang2) + (2 * lebar2);
console.log(keliling);
console.log(keliling2);

/*
No. 3 mencari diameter, keliling dan luas lingkaran
1. masukkan nilai radiusnya ke dalam variabel
2. masukkan nilai phi = 3,14
2. masukkan rumus diameter =  radius * 2
3. masukkan rumus keliling lingkaran = 2*phi*radius
4. masukkan rumus luas lingkaran = phi*r(kuadrat)
5. tampilkan hasilnya
*/
const rad = 5;
const phi = 3.14;

const diameter = rad * 2;
const kelilinglingkaran = 2 * phi * rad;
const kelilinglingkaran2 = 2 * Math.PI * rad;
const luaslingkaran = phi * rad ** 2;
const luaslingkaran2 = Math.PI * rad ** 2;

console.log(diameter);
console.log(kelilinglingkaran);
console.log(kelilinglingkaran2);
console.log(luaslingkaran);
console.log(luaslingkaran2);

/*No.4 mencari sudut segitiga
1. memasukkan sudut a dan b yang telah diketahui kedalam variable
2. menghitung sudutnya = 180 - (a+b)
3. tampilkan hasilnya
*/
const suduta = 80;
const sudutb = 65;
const sudutsegitiga = 180 - (suduta + sudutb);

console.log(sudutsegitiga);

/*N0. 5 menghitung perbedaan hari 
1. masukkan tanggal 1 dan 2 ke dalam variable
2. hitung perbedaan hari dengan cara = tanggal2 - tanggal1 / (24*60*60*1000)
3. tampilkan hasil
*/
const tanggal1 = new Date("2022-01-20");
const tanggal2 = new Date("2022-01-22");

const perbedaanhari = (tanggal2 - tanggal1) / (24 * 60 * 60 * 1000);

console.log(perbedaanhari);

/*no . 6 konfersi hari ke tahun,bulan, hari
1. masukkan jumlah hari kedalam variabel
2. menghitung tahun = hari / 365 (gunakan Math.floor untuk membulatkan angka ke bawah ke bilangan bulat terdekat)
3. menghitung sisa hari setelah mengurangkan tahun = hari % 365
4. menghitung bulan = sisahari setelah setahun / 30
5. menghitung sisa hari setelah mengurangkan bulan = sisa hari setelah tahun % 30
6. tampilkan hasil
*/

const inputHari1 = 400;

// Menghitung tahun
const tahun1 = Math.floor(inputHari1 / 365);
const bulan1 = Math.floor((inputHari1 % 365) / 30);
const sisaHari1 = inputHari1 % 30;

// Menampilkan hasil untuk inputHari1
console.log(tahun1 + " Tahun,", bulan1 + " Bulan,", sisaHari1 + " Hari");
