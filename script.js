const dataBarang = [
    { kode: "001", barang: "Barang A", harga: 10000 },
    { kode: "002", barang: "Barang B", harga: 20000 },
    { kode: "003", barang: "Barang C", harga: 30000 },
];

function tulisTable() {
    const tableBody = document.querySelector("#tableTransaksi tbody");

    dataBarang.forEach((item) => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = item.kode;
        cell2.textContent = item.barang;
        cell3.textContent = item.harga;
    });
}

function hitungTotal() {
    const kodeInput = document.getElementById("kode").value;
    const banyakBarangInput = parseInt(
        document.getElementById("banyakBarang").value
    );

    const selectedItem = dataBarang.find((item) => item.kode === kodeInput);

    if (selectedItem) {
        const totalPembayaran = selectedItem.harga * banyakBarangInput;
        window.alert(`Total pembayaran adalah: ${totalPembayaran}`);

        const uangDibayarkan = prompt("Masukkan uang user:");
        const kembalian = uangDibayarkan - totalPembayaran;

        if (kembalian >= 0) {
            window.alert(`Total kembalian anda adalah: ${kembalian}`);
        } else {
            window.alert(`Uang yang dibayarkan kurang dari total pembayaran!`);
        }
    } else {
        window.alert("Kode barang tidak valid!");
    }
}

window.onload = function () {
    tulisTable();
};
