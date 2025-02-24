// Fungsi getDataFromServer mensimulasikan pengambilan data dari server
export function getDataFromServer(status, callback) {
  setTimeout(function () {
    if (status) {
      callback(["product 1", "product 2", "product 3"], null);
    } else {
      const err = new Error("Failed to fetch data");
      err.name = "Error";
      callback(null, err);
    }
  }, 3000);
}

// Callback processData untuk menangani data atau error
export function processData(data, error) {
  try {
    if (error) {
      throw error; // Melempar error jika ada
    }
    console.log("Data retrieved:", data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

// Memanggil fungsi dengan callback processData
// getDataFromServer(true, processData); // Output: Data retrieved: ['product 1', 'product 2', 'product 3']
// getDataFromServer(false, processData); // Output: Error: Failed to fetch data

/*
  Penjelasan:
  1. `getDataFromServer` adalah fungsi yang mensimulasikan pemanggilan server menggunakan `setTimeout`.
  2. Jika `status` true, data akan dikembalikan melalui callback tanpa error.
  3. Jika `status` false, sebuah error akan dikirimkan melalui callback.
  4. `processData` adalah callback yang menangani error menggunakan `try-catch`.
  5. Jika ada error, `catch` akan menangkapnya dan mencetak pesan error.
  6. Jika tidak ada error, data akan ditampilkan di console.
  */
