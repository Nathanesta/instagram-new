//card-task
const makanan1 = 10000;
const makanan2 = 25000;
const makanan3 = 15000;
let total = makanan1 + makanan2 + makanan3;
document.getElementById("list1").innerHTML = "Es Kopi Susu : Rp." +makanan1;  
document.getElementById("list2").innerHTML = "Roti Bakar : Rp." +makanan2;       
document.getElementById("list3").innerHTML = "Ice Cream : Rp." +makanan3;              
document.getElementById("total").innerHTML = "Harga semua setelah dijumlah : Rp." + total;
const diskon = 10/100;
let total_pembayaran  = total - (total * diskon);
document.getElementById("total2").innerHTML = "Harga makanan setelah diskon : Rp." + total_pembayaran;

// card-task2
const daftarmakanan = [
{ nama: "Es Kopi Susu", harga: 10000 },
{ nama: "Roti Bakar", harga: 25000 },
{ nama: "Ice Cream", harga: 15000 }
];
document.getElementById("makanan1").innerHTML = daftarmakanan[0].nama + " : " + daftarmakanan[0].harga;
document.getElementById("makanan2").innerHTML = daftarmakanan[1].nama + " : " + daftarmakanan[1].harga;
document.getElementById("makanan3").innerHTML = daftarmakanan[2].nama + " : " + daftarmakanan[2].harga;
let totals = daftarmakanan[0].harga + daftarmakanan[1].harga + daftarmakanan[2].harga;
document.getElementById("totals").innerHTML = "Total Harga : " +totals;
const diskons = 10/100;
let stlhdiskon  = total - (total * diskons);
document.getElementById("totalds").innerHTML = "Total Harga Setelah Diskon : " +stlhdiskon;
daftarmakanan[2].nama = "Tahu Telor";
document.getElementById("makanan3").innerHTML = daftarmakanan[2].nama + " : " + daftarmakanan[2].harga;
daftarmakanan.push({ nama: "Nasi Goreng", harga: 12000 });
document.getElementById("makanan4").innerHTML = daftarmakanan[3].nama + " : " + daftarmakanan[3].harga;
let total_harga = daftarmakanan[3].harga + stlhdiskon;
document.getElementById("totalharga").innerHTML = "Total Harga Akhir : " +total_harga;

// card-task3
const dftrmkn = [
{ nama: "Es Kopi Susu", harga: 10000 },
{ nama: "Roti Bakar", harga: 25000 },
{ nama: "Ice Cream", harga: 15000 },
{ nama: "Nasi Goreng", harga: 12000 }
];
let tot1 = 0;
let mkn = "";
for (let i = 0; i < dftrmkn.length; i++) {
    mkn += `<li>${dftrmkn[i].nama} : ${dftrmkn[i].harga}</li>` 
    tot1 += dftrmkn[i].harga;
}
const disc = tot1 * 10/100;
const totp = tot1 - disc;

document.getElementById("mkn").innerHTML = mkn;
document.getElementById("tot1").innerHTML = "<br>Total Harga : Rp."+tot1;
document.getElementById("totds").innerHTML = "Total Diskon 10% : Rp."+disc;
document.getElementById("totp").innerHTML = "Total Harga Setelah Diskon : Rp."+totp;

// card-task 4
const dtrmk = [
{ nama: "Nasi Pecel", harga: 10000, variant: ["Original", "Pedas", "Pedas Banget"] },
{ nama: "Nasi Jagung", harga: 12000, variant: ["Original", "Pedas", "Pedas Banget"] },
{ nama: "Nasi Ayam", harga: 15000, variant: ["Original", "Pedas", "Pedas Banget"] },
{ nama: "Nasi Krawu", harga: 14000, variant: ["Original", "Pedas", "Pedas Banget"] },
{ nama: "Nasi Rendang", harga: 20000, variant: ["Original", "Pedas", "Pedas Banget"] },
{ nama: "Nasi Lele", harga: 17000, variant: ["Original", "Pedas", "Pedas Banget"] }
];

const level = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const promo = 5000;
let mknan = "";

dtrmk.forEach(menu => {
    if (menu.variant.includes("Pedas Banget")) {
        if (menu.nama === "Nasi Pecel") {
        menu.harga = promo;
        }
    // const variants = menu.variant[2];
    // const variantl = `${variants} (Level ${level.join(', ')})`; 
    // mknan += `<br><li>${menu.nama} : Rp.${menu.harga}<br> Rasa : ${menu.variant}<br>Level variant ${variantl}</li>`; 
        const variants = menu.variant[2];
        const variantl = `${variants} (Level ${level.join(', ')})`; 
        mknan += `<li>${menu.nama} : Rp.${menu.harga}<br> Variant : ${menu.variant}<br>Level variant ${variants} : (10-1)</li>`;
    }
});

const pesananp = [ 
    { nama: dtrmk[0].nama, jumlah: 2, variant: dtrmk[0].variant[0]},
    { nama: dtrmk[1].nama, jumlah: 1, variant: dtrmk[1].variant[1]},
    { nama: dtrmk[5].nama, jumlah: 3, variant: dtrmk[5].variant[2] + ` Level ${level[1]}`}
    ];

let listP = "";
let total1 = 0;
let totalsds = 0;

pesananp.forEach(pesanan => {
    const menu = dtrmk.find(item => item.nama === pesanan.nama);
    if (menu) {
        const subtotal = menu.harga * pesanan.jumlah;
        listP += `<div>${pesanan.nama} ${pesanan.variant} (${pesanan.jumlah} porsi) = Rp.${subtotal}</div>`;
        total1 += subtotal;
    }
});

const member = true;

if (member) {
    const diskonm = 10/100; 
    const pajak = 11/100;
    const diskonmm = total1 * diskonm;
    totalsds = total1 - diskonmm;
    const pajaksd = totalsds * pajak;
    total2 = totalsds + pajaksd;
    document.getElementById("totalpb").innerHTML = `Total pembayaran setelah pajak = Rp.${total2}`;
} else {
    // Jika pemesan bukan member
    const pajak = 0.11; // 11% (tanpa diskon untuk non-member)
    const diskonpj = 0;
    const pajaksd = total1 * pajak;
    totalsds = total1 + pajaksd;
    document.getElementById("totalpb").innerHTML = `Total embayaran setelah pajak = 0`;
}

document.getElementById("mkna").innerHTML = mknan;
document.getElementById("promo").innerHTML = `<br><strong>Promo ${dtrmk[0].nama} harga sebesar Rp.${promo}!</strong>`;
document.getElementById("listP").innerHTML = `List pemesanan : <br>${listP}<br>`;
document.getElementById("total1").innerHTML = `Total Pembayaran = Rp.${total1}<br>`;
document.getElementById("totalsds").innerHTML = `Total setelah diskon = Rp.${totalsds}`;