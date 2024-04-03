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

//card-task 5
const nmhs = [
    {nama: "Taufiq", nilai: 75, kf:false},
    {nama: "Andreas", nilai: 100, kf:false},
    {nama: "Rafi", nilai: 85, kf:false},
    {nama: "Nathan", nilai: 45, kf:true},
    {nama: "Yardan", nilai: 55, kf:true}
];

let hasil = "";
let akf = "";
for (let i = 0; i < nmhs.length; i++) {
    let mhs = nmhs[i];
    let nilait = mhs.nilai;

    if (mhs.kf) {
        akf = "Ya";
        nilait += 10;
    } else {
        akf = "Tidak";
    }
    
    let stat = "";
    if (nilait >= 100) {
        stat = "A+";
    } else if (nilait >= 80 && nilait <= 100) {
        stat = "A";
    } else if (nilait >= 70 && nilait <= 80) {
        stat = "B";
    } else if (nilait >= 60 && nilait <= 70) {
        stat = "C";
    } else if (nilait >= 50 && nilait <= 60) {
        stat = "D";
    } else {
        stat = "E";
    }

    if (mhs.nama === nmhs[4].nama || mhs.nama === nmhs[3].nama) {
        hasil += `<li>${mhs.nama} mendapat nilai ${nilait}, mengambil kursus figma: ${akf}, dan mendapatkan grade ${stat}.<br></li>`;
    } else {
        hasil += `<li>${mhs.nama} mendapat nilai ${nilait}, mengambil kursus figma: ${akf}, dan mendapatkan grade ${stat}.<br></li>`;
    }
}

document.getElementById("mahasiswa").innerHTML = hasil;

//card-task 6
const datap = [
    {id: 1, nama: "Vega", age: 25 },
    {id: 2, nama: "Yardan", age: 50 },
    {id: 3, nama: "Taufiq", age: 64 },
    {id: 4, nama: "Nathan", age: 14 },
    {id: 5, nama: "Andreas", age: 29 },
    {id: 6, nama: "Rafi", age: 44 },
    {id: 7, nama: "Ilham", age: 53 },
    {id: 8, nama: "Bram", age: 32 },
    {id: 9, nama: "Fandi", age: 10 },
    {id: 10, nama: "Riza", age: 78 }
];

const table = document.getElementById("tabelp");
const jml = datap.length;
let i = 0;
let bwh20 = 0;
let dts50 = 0;

while (i < datap.length) {
    const row = table.insertRow();
    const idc = row.insertCell(0);
    const namac = row.insertCell(1);
    const agec = row.insertCell(2);
    idc.innerHTML = datap[i].id;
    namac.innerHTML = datap[i].nama;
    agec.innerHTML =  datap[i].age;
    
    if (datap[i].age < 20) {
        bwh20++;
    } else if (datap[i].age > 50) {
        dts50++;
    }

    i++;
};

const totrowk = table.insertRow();
const rksg = table.insertRow();
const rksg1 = totrowk.insertCell(0);
const rksg2 = totrowk.insertCell(1);
rksg.innerHTML = "";
rksg1.innerHTML = "";
rksg2.innerHTML = "";

const totrow = table.insertRow();
const ksg = totrow.insertCell(0);
const totlabc = totrow.insertCell(1);
const jmlc = totrow.insertCell(2);
ksg.innerHTML = "";
totlabc.innerHTML = "Jumlah pasien : ";
jmlc.innerHTML = jml;

const totrow1 = table.insertRow();
const ksg1 = totrow1.insertCell(0);
const totlabc1 = totrow1.insertCell(1);
const bwh20c = totrow1.insertCell(2);
ksg1.innerHTML = "";
totlabc1.innerHTML = "Total Pasien dibawah 20 Tahun :";
bwh20c.innerHTML = bwh20;

const totrow2 = table.insertRow();
const ksg2 = totrow2.insertCell(0);
const totlabc2 = totrow2.insertCell(1);
const dts50c = totrow2.insertCell(2);
ksg2.innerHTML = "";
totlabc2.innerHTML = "Total Pasien diatas 50 Tahun :";
dts50c.innerHTML = dts50;

//card-task7

const list = {
    status: 200,
    error: null,
    metadata: {
        pagination: true,
        total: 10,
    },
    message: 'view data collection',
    data: [
        {
        id: 1,
        name: 'Vega',
        age: 25,
        gaji: 1000000
        },
        {
        id: 2,
        name: 'Yardan',
        age: 50,
        gaji: 1200000
        },
        {
        id: 3,
        name: 'Taufiq',
        age: 64,
        gaji: 3000000
        },
        {
        id: 4,
        name: 'Nathan',
        age: 14,
        gaji: 2500000
        },
        {
        id: 5,
        name: 'Andreas',
        age: 29,
        gaji: 3000000
        },
        {
        id: 6,
        name: 'Rafi',
        age: 44,
        gaji: 1500000
        },
        {
        id: 7,
        name: 'Ilham',
        age: 53,
        gaji: 5000000
        },
        {
        id: 8,
        name: 'Bram',
        age: 32,
        gaji: 5000000
        },
        {
        id: 9,
        name: 'Fandi',
        age: 10,
        gaji: 9000000
        },
        {
        id: 10,
        name: 'Riza',
        age: 78,
        gaji: 9000000

        },
    ]
}

document.getElementById('total').innerHTML = list.data.length;

let tbody = '';
let total20 = 0;
let total50 = 0;
let totgj = 0;
let totgj40 = 0;
let totgj20 = 0;

for (let i = 0; i < list.data.length; i++) {
    let dt = list.data[i];
    tbody += `
        <tr>
            <td>${dt.id}</td>
            <td>${dt.name}</td>
            <td>${dt.age}</td>
            <td>${dt.gaji}</td>
        </tr>`;

        if (dt.age < 20) {
            total20++;
        } else if (dt.age > 50) {
            total50++;
        }

        if (dt.age >= 40) {
            totgj40 += dt.gaji;
        } else if (dt.age < 20) {
            totgj20;    
        } else if (dt.age === 14) {
            dt[3].gaji = 10000;
        }
        totgj += dt.gaji;

    };
    
document.getElementById('table_body').innerHTML = tbody;
document.getElementById('table_foot').innerHTML = `
    <tr>
        <td>Total</td>
        <td>&nbsp;</td>
        <td>${list.data.length}</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>Total dibawah 20 tahun</td>
        <td>&nbsp;</td>
        <td>${total20}</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>Total diatas 50 tahun</td>
        <td>&nbsp;</td>
        <td>${total50}</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>Total gaji</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>${totgj}</td>
    </tr>
    <tr>
        <td>Total gaji diatas 40 tahun</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>${totgj40}</td>
    </tr>
    <tr>
        <td>Total gaji dibawah 20 tahun</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>${totgj20}</td>
    </tr>
`;