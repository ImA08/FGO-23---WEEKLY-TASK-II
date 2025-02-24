// Fungsi fetchData mengembalikan sebuah Promise yang akan resolve setelah 3 detik
// jika status bernilai true, atau reject jika status bernilai false.
function fetchData(status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("Data berhasil diambil");
      } else {
        reject("Gagal mengambil data");
      }
    }, 3000);
  });
}

// // Implementasi menggunakan then-catch
// fetchData(true)
//   .then((result) => {
//     console.log("Sukses:", result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// Implementasi menggunakan async/await dengan try-catch
export async function getData(status) {
  try {
    const result = await fetchData(status);
    console.log("Sukses:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Memanggil fungsi async
// getData(true); // Output setelah 3 detik: "Sukses: Data berhasil diambil"
// getData(false); // Output setelah 3 detik: "Error: Gagal mengambil data"

/*
Penjelasan:
1. `Promise` adalah objek yang merepresentasikan operasi asynchronous. `resolve` digunakan untuk memberikan hasil jika sukses, sedangkan `reject` digunakan jika terjadi kesalahan.
2. `then-catch` digunakan untuk menangani Promise setelah dipanggil. `then` akan menangani hasil sukses, sedangkan `catch` akan menangani error jika Promise ditolak.
3. `async/await` digunakan untuk menuliskan kode asynchronous agar lebih mudah dibaca. `await` menunggu Promise selesai sebelum lanjut ke kode berikutnya.
4. `try-catch` digunakan untuk menangani error yang mungkin terjadi dalam blok kode `await`, sehingga jika Promise gagal, error dapat ditangkap dan ditampilkan.
*/
