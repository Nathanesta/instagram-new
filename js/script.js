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
        {id: 1,name: 'Vega',age: 25,gaji: 1000000},
        {id: 2,name: 'Yardan',age: 50,gaji: 1200000},
        {id: 3,name: 'Taufiq',age: 64,gaji: 3000000},
        {id: 4,name: 'Nathan',age: 14, gaji: 10000000},
        {id: 5,name: 'Andreas',age: 29,gaji: 3000000},
        {id: 6,name: 'Rafi',age: 44,gaji: 1500000},
        {id: 7,name: 'Ilham',age: 53,gaji: 5000000},
        {id: 8,name: 'Bram',age: 32,gaji: 5000000},
        {id: 9,name: 'Fandi',age: 10,gaji: 9000000},
        {id: 10,name: 'Riza',age: 78,gaji: 9000000}
    ]
}


let tbody = '';
let tot20 = 0;
let tot50 = 0;
let totgj = 0;
let totgj40 = 0;
let totgj20 = 0;
let totgj14 = 0;
let pu14 = 0;

for (let i = 0; i < list.data.length; i++) {
    let dt = list.data[i];
    pu14 = list.data[3].gaji;
    tbody += `
        <tr>
            <td>${dt.id}</td>
            <td>${dt.name}</td>
            <td>${dt.age}</td>
            <td>${dt.gaji}</td>
        </tr>`;

        if (dt.age < 20) {
            tot20++;
        } else if (dt.age > 50) {
            tot50++;
        }
        
        if (dt.age >= 40) {
            totgj40 += dt.gaji;
        } else if (dt.age < 20) {
            totgj14 += pu14;    
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
        <td>${tot20}</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>Total diatas 50 tahun</td>
        <td>&nbsp;</td>
        <td>${tot50}</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>Total gaji keseluruhan</td>
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
    <tr>
        <td>Total gaji khusus 14 tahun</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>${pu14}</td>
    </tr>
`;

// card-task 1 part 2
const daftarmk = [
    {nama: "Es Kopi Susu", harga: 10000},
    {nama: "Roti Bakar", harga: 25000},
    {nama: "Ice Cream", harga: 15000}
];
function tpmn(daftarc1) {
    let menuc = "";
    let totc = 0;
    let discc = 10/100;
    for (let i = 0; i < daftarc1.length; i++) {
        menuc += `<li>${daftarc1[i].nama} : Rp.${daftarc1[i].harga}</li>`;
        totc += daftarc1[i].harga;    
    }
    const totdisc = totc - discc1(discc,totc);

    return menuc + `<br>Total harga : Rp.` + totc + `<br>Total diskon : Rp.` + totdisc + `<br>Total Pembayaran : Rp.` + (totc - totdisc);
}
function discc1(diskon, total) {
    let disc10 = diskon * total;
    return total - disc10;
}

const listpc1 = tpmn(daftarmk);
document.getElementById("menuc1").innerHTML = listpc1;

// card-task 2 part 2
const daftarmakanan2 = [
    { nama: "Es Kopi Susu", harga: 10000 },
    { nama: "Roti Bakar", harga: 25000 },
    { nama: "Ice Cream", harga: 15000 }
];
function tpmn2(daftarc2) {
    const disc = 10 / 100;
    let menuc = "";
    let totc = 0;
    let discc = 0;
    let totdisc = 0;

    for (let i = 0; i < daftarc2.length; i++) {
        menuc += `<li>${daftarc2[i].nama} : Rp.${daftarc2[i].harga}</li>`;
        totc += daftarc2[i].harga;
        daftarc2[2].nama = "Tahu Telor";
    }

    const nasgor = { nama: "Nasi Goreng", harga: 12000 };
    daftarc2.push(nasgor);

    totc += daftarc2[3].harga;
    discc = totc * disc;
    totdisc = totc - discc;

    return menuc + `<li>${nasgor.nama} : Rp.${nasgor.harga}</li><br>Total harga : Rp.${totc}<br>Total Diskon : Rp.${discc}<br>Total pembayaran : Rp.${totdisc}`;
}

const listpc2 = tpmn2(daftarmakanan2);
document.getElementById("menuc2").innerHTML = listpc2;

// card-task 3 part 2
const dftrmkn3 = [
    { nama: "Es Kopi Susu", harga: 10000 },
    { nama: "Roti Bakar", harga: 25000 },
    { nama: "Ice Cream", harga: 15000 },
    { nama: "Nasi Goreng", harga: 12000 }
];
function tpmn3(daftarc3) {
    const disc = 10 / 100;
    let menuc = "";
    let totc = 0;
    let discc = 0;
    let totdisc = 0;

    for (let i = 0; i < daftarc3.length; i++) {
        menuc += `<li>${daftarc3[i].nama} : Rp.${daftarc3[i].harga}</li>`;
        totc += daftarc3[i].harga;
    }

    discc = totc * disc;
    totdisc = totc - discc;

    return menuc + `<br>Total harga : Rp.${totc}<br>Total diskon : Rp.${discc}<br>Total pembayaran : Rp.${totdisc}`;
}

const listpc3 = tpmn3(dftrmkn3);
document.getElementById("menuc3").innerHTML = listpc3;

// card-task 4 part 2
const dtrmk4 = [
    { nama: "Nasi Pecel", harga: 10000, variant: ["Original", "Pedas", "Pedas Banget"] },
    { nama: "Nasi Jagung", harga: 12000, variant: ["Original", "Pedas", "Pedas Banget"] },
    { nama: "Nasi Ayam", harga: 15000, variant: ["Original", "Pedas", "Pedas Banget"] },
    { nama: "Nasi Krawu", harga: 14000, variant: ["Original", "Pedas", "Pedas Banget"] },
    { nama: "Nasi Rendang", harga: 20000, variant: ["Original", "Pedas", "Pedas Banget"] },
    { nama: "Nasi Lele", harga: 17000, variant: ["Original", "Pedas", "Pedas Banget"] }
];
const levelz = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const pesananz = [
    { nama: dtrmk4[0].nama, jumlah: 2, variant: dtrmk4[0].variant[0] },
    { nama: dtrmk4[1].nama, jumlah: 1, variant: dtrmk4[1].variant[1] },
    { nama: dtrmk4[5].nama, jumlah: 3, variant: dtrmk4[5].variant[2] + ` Level ${levelz[1]}`}
];

const promoc = 5000;
const memberc = false;
let mnuc4 = "";
let psn = "";
let totc4 = 0;

function tpmn4(menu, pesanan){
    menu.forEach(item => {
        const variants = item.variant[2];
        mnuc4 += `<li>${item.nama} : Rp.${item.harga}<br> Variant : ${item.variant}<br>Level variant ${variants} : (10-1)</li><br>`;
        if (item.nama === "Nasi Pecel") {
            item.harga = promoc;
        }
    });
    pesanan.forEach(pesan => {
        const menu = dtrmk.find(item => item.nama === pesan.nama);
        if (menu) {
            const subtotal = menu.harga * pesan.jumlah;
            psn += `<div>${pesan.nama} ${pesan.variant} (${pesan.jumlah} porsi) = Rp.${subtotal}</div>`;
            totc4 += subtotal;
        }
    });
    document.getElementById('dtrmnc4').innerHTML = mnuc4;
    document.getElementById('psnc4').innerHTML = `List pesanan : ${psn}`;
    document.getElementById('totc4').innerHTML = `<br>Total harga : Rp.${totc4}`;
}
tpmn4(dtrmk, pesananz, memberc);

let disc4 = totc4 * 0.1;
let pjc4 = totc4 * 0.11;
let totdcpj = totc4;

if (memberc) {
    totdcpj = totc4 - disc4 + pjc4;
    document.getElementById('totm4').innerHTML = " Total pembayaran : Rp. " + totdcpj;

} else {
    totdcpj = totc4 + pjc4;
    document.getElementById('totm4').innerHTML = " Total pembayaran : Rp. " + totdcpj;

}

// card-task 5 part 2
const namhs = [
    {nama: "Taufiq", nilai: 75, kf:false},
    {nama: "Andreas", nilai: 90, kf:false},
    {nama: "Rafi", nilai: 85, kf:false},
    {nama: "Nathan", nilai: 45, kf:true},
    {nama: "Yardan", nilai: 55, kf:true}
];

function grad(nama, value, figma) {
    let nilai = value;
    let akf = "";

    if (figma) {
        akf = "Ya";
        nilai += 10;
    } else {
        akf = "Tidak";
    }
    
    let hasil = "";
    if (nilai >= 80 && nilai <= 100) {
        hasil = "A";
    } else if (nilai >= 70 && nilai <= 80) {
        hasil = "B";
    } else if (nilai >= 60 && nilai <= 70) {
        hasil = "C";
    } else if (nilai >= 50 && nilai <= 60) {
        hasil = "D";
    } else {
        hasil = "E";
    }

    if (nilai > 100) {
        hasil = "A+";
        value = 100;
    }
    

    return {nama: nama, nilai: nilai, hasil: hasil};
}

let hasilc = "";

for (let i = 0; i < namhs.length; i++) {
    let mhs = namhs[i];
    let infoNilai = grad(mhs.nama, mhs.nilai, mhs.kf);

    hasilc += `<li>${infoNilai.nama} mendapat nilai ${infoNilai.nilai}, mengambil kursus figma: ${mhs.kf ? 'Ya' : 'Tidak'}, dan mendapatkan grade ${infoNilai.hasil}.<br></li>`;
}

document.getElementById("grad").innerHTML = hasilc;

// card-task 6 part 2
const listc = {
    status: 200,
    message: 'view data collection',
    data: [
      {id: 1,name: 'Vega',age: 25},
      {id: 2,name: 'Yardan',age: 50},
      {id: 3,name: 'Taufiq',age: 64},
      {id: 4,name: 'Nathan',age: 14},
      {id: 5,name: 'Andreas',age: 29},
      {id: 6,name: 'Rafi',age: 44},
      {id: 7,name: 'Ilham',age: 53},
      {id: 8,name: 'Bram',age: 32},
      {id: 9,name: 'Fandi',age: 10},
      {id: 10,name: 'Riza',age: 78},
    ]
  }

  let totc20 = 0;
  let totc50 = 0;
  
  function tabel() {
      let tbody = "";
      for (let i = 0; i < listc.data.length; i++) {
          let dt = listc.data[i];
          tbody += `
              <tr>
                  <td>${dt.id}</td>
                  <td>${dt.name}</td>
                  <td>${dt.age}</td>
              </tr>`;
              
            if (dt.age < 20) {
                totc20++;
            } else if (dt.age > 50) {
                totc50++;
            }
      }
      document.getElementById("tpasien").innerHTML = tbody;

  }
  
  function hitungpasien(list,tot20,tot50) {
      return {
          totalp: list.data.length,
          bwh20: tot20,
          atas50: tot50
      };
  }
    tabel();
  
    const hitungtp = hitungpasien(listc,totc20,totc50);

    document.getElementById("totpas").innerHTML = `<br>Total pasien : ${hitungtp.totalp}`;
    document.getElementById("bwhc20").innerHTML = `Pasien dibawah 20 tahun : ${hitungtp.bwh20}`;
    document.getElementById("atasc50").innerHTML = `Pasien diatas 50 tahun : ${hitungtp.atas50}`;

// card-task 7 part 2
const listcc = {
    status: 200,
    error: null,
    metadata: {
        pagination: true,
        total: 10,
    },
    message: 'view data collection',
    data: [
        {id: 1,name: 'Vega',age: 25,gaji: 1000000},
        {id: 2,name: 'Yardan',age: 50,gaji: 1200000},
        {id: 3,name: 'Taufiq',age: 64,gaji: 3000000},
        {id: 4,name: 'Nathan',age: 14, gaji: 10000000},
        {id: 5,name: 'Andreas',age: 29,gaji: 3000000},
        {id: 6,name: 'Rafi',age: 44,gaji: 1500000},
        {id: 7,name: 'Ilham',age: 53,gaji: 5000000},
        {id: 8,name: 'Bram',age: 32,gaji: 5000000},
        {id: 9,name: 'Fandi',age: 10,gaji: 9000000},
        {id: 10,name: 'Riza',age: 78,gaji: 9000000}
    ]
}

let tot20c = 0;
let tot50c = 0;
let totgajic = 0;
let totgj40c = 0;
let pu14c = 0;
    function tabelc() {
        let tbody = "";
        for (let i = 0; i < listcc.data.length; i++) {
            let dt = listcc.data[i];
            pu14c = listcc.data[3].gaji;
            tbody += `
                <tr>
                    <td>${dt.id}</td>
                    <td>${dt.name}</td>
                    <td>${dt.age}</td>
                    <td>${dt.gaji}</td>
                </tr>`;

            if (dt.age < 20) {
                tot20c++;
            } else if (dt.age > 50) {
                tot50c++;
            }

            if (dt.age >= 40) {
                totgj40c += dt.gaji;
            } else if (dt.age < 20) {
                totgj14 += pu14c;    
            }
            totgajic += dt.gaji;
        }
        document.getElementById("tpasienc").innerHTML = tbody;

    }

    function hitungpasienc() {
        return {
            totalp: listcc.data.length,
            bwh20: tot20c,
            atas50: tot50c
        };
    }
    tabelc();

const hitungtpc = hitungpasienc();

document.getElementById("totpasc").innerHTML = `<br>Total pasien : ${hitungtpc.totalp}`;
document.getElementById("bwhc20c").innerHTML = `Pasien dibawah 20 tahun : ${hitungtpc.bwh20}`;
document.getElementById("atasc50c").innerHTML = `Pasien diatas 50 tahun : ${hitungtpc.atas50}`;
document.getElementById("totgajic").innerHTML = `Total gaji keseluruhan : ${totgajic}`;
document.getElementById("totgaji40").innerHTML = `Total gaji diatas 40 tahun : ${totgj40c}`;
document.getElementById("totgaji14").innerHTML = `Total gaji khusus 14 tahun : ${pu14c}`;

// kalkulator
let display = document.getElementById('display');

  function tambahkanDisplay(value) {
    display.value += value;
  }

  function tambah() {
    tambahkanDisplay('+');
  }

  function kurang() {
    tambahkanDisplay('-');
  }

  function kali() {
    tambahkanDisplay('*');
  }

  function bagi() {
    tambahkanDisplay('/');
  }

  function totalkan() {
    let result = eval(display.value);
    display.value = result;
  }
  function hapusKarakter() {
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1); // Menghapus karakter terakhir
  }
  function reset() {
    display.value = '';
  }

// search-data

const listData = {
    status: 200,
    message: 'view data collection',
    data: [
      {id: 1,name: 'Vega',age: 25},
      {id: 2,name: 'Yardan',age: 50},
      {id: 3,name: 'Taufiq',age: 64},
      {id: 4,name: 'Nathan',age: 14},
      {id: 5,name: 'Andreas',age: 29},
      {id: 6,name: 'Rafi',age: 44},
      {id: 7,name: 'Ilham',age: 53},
      {id: 8,name: 'Bram',age: 32},
      {id: 9,name: 'Fandi',age: 10},
      {id: 10,name: 'Riza',age: 78},
    ]
  }
  
  function searchData() {
    const searchInput = document.querySelector('#searchInput').value;
    const resultDiv = document.querySelector('#result');

    const result = listData.data.find(person => person.name.toLowerCase() === searchInput.toLowerCase());
    if (result) {
      resultDiv.innerHTML = `<p>ID: ${result.id}</p><p>Name: ${result.name}</p><p>Age: ${result.age}</p>`;
      if (result.age > 70) {
        resultDiv.innerHTML += '<p>Manula</p>';
      } else if (result.age <= 70 && result.age > 50) {
        resultDiv.innerHTML += '<p>Masih joss</p>';
      }
    } else {
      resultDiv.innerHTML = '<p>Data tidak ditemukan</p>';
    }
  }