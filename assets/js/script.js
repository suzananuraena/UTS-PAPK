var dataBarang = [{
  nama_barang: "Nama",
  jumlah: "Hari",
  total: 0
}];

function showBarang() {
  var listBarang = document.getElementById("tabel");

  listBarang.innerHTML = "<tr><th>Nama</th><th>Jumlah</th><th>Total</th><th id='aksiId'>Action</th></tr>";

  for (let i = 0; i < dataBarang.length; i++) {
    if (i !== 0) {
      var btnEdit = "<a href='#' class='btn btn-warning' style='margin-right:5px;' onclick='editBarang(" + i + ")'><i class='bi bi-pencil-square'></i></a>";
      var btnHapus = "<a href='#' class='btn btn-danger' onclick='deleteBarang(" + i + ")'><i class='bi bi-trash3'></i></a>";
      listBarang.innerHTML +=
        "<tr><td>" + dataBarang[i].nama_barang + "</td><td>" + dataBarang[i].jumlah + "</td><td>" + dataBarang[i].total + "</td><td id='aksiContentId'>" + btnEdit + btnHapus + "</td></tr>";
    } else {
      // listBarang.innerHTML +=
      // "<th>Data Belum Di Masukan</th>";
    }
  }

  const sum = dataBarang.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const totalBayar = document.getElementById("total_bayar");
  totalBayar.innerHTML = sum;
}

function cekTotalHarga(jenisBarang, jumlah) {
  if (jenisBarang == "Indomie") {
    const total = jumlah * 5000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Kecap") {
    const total = jumlah * 2000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Saus") {
    const total = jumlah * 1500;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Minyak") {
    const total = jumlah * 10000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Terigu") {
    const total = jumlah * 9000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Gula") {
    const total = jumlah * 7500;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Garam") {
    const total = jumlah * 1000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }
}

function addBarang() {
  var jenisBarang = document.getElementById("jenis_barang").value;
  var jumlah = document.getElementById("jumlah").value;

  const newDataBarang = cekTotalHarga(jenisBarang, jumlah);
  dataBarang.push(newDataBarang);
  showBarang();
}

function editBarang(id) {
  var newjumlah = prompt("Edit jumlah", dataBarang[id].jumlah);
  const detailJenisBarang = dataBarang[id].nama_barang;

  const newDataBarang = cekTotalHarga(
    detailJenisBarang,
    newjumlah || dataBarang[id].jumlah
  );

  dataBarang[id] = newDataBarang;
  showBarang();
}

function deleteBarang(id) {
  swal("Apakah anda yakin ?", {
      buttons: {
        cancel: "Batal!",
        catch: {
          text: "Hapus!",
          value: "Delete",
        },
        // defeat: true,
      },
    })
    .then((value) => {
      switch (value) {

        case "Cancel":
          swal("Data tidak dihapus");
          break;

        case "Delete":
          dataBarang.splice(id, 1);
          showBarang();
          swal("", "Data Berhasil dihapus!", "success");
          break;

        default:
          swal("Data Batal dihapus");
      }
    });
  // dataBarang.splice(id, 1);

}

showBarang();

function kembalian() {
  const sum = dataBarang.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const bayar = parseInt(document.getElementById("pembayaran").value);
  const total = sum;
  const kembalian = bayar - total;

  document.getElementById("kembalian").innerHTML = kembalian;
  document.getElementById("bayar").innerHTML = bayar;

}