import readline from "node:readline";

import {
  getData,
  getDataFromServer,
  processData,
  getDataAdd,
  checkPalindrom,
  reverseWords,
  dividedAndSort,
} from "./tasks/index.js";

import {
  saveContact,
  contactList,
  detailContact,
  deleteContact,
} from "./contacts.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showMenu = () => {
  console.log("\n=== MENU UTAMA ===");
  console.log("1. Kelola Kontak");
  console.log("2. Kelola Tasks");
  console.log("3. Keluar");

  rl.question("Pilih menu (1/2/3): ", (choice) => {
    if (choice === "1") {
      menuKontak();
    } else if (choice === "2") {
      menuTasks();
    } else if (choice === "3") {
      console.log("Terima kasih! 👋");
      rl.close();
    } else {
      console.log("Pilihan tidak valid, coba lagi.");
      showMenu();
    }
  });
};

// 🔹 Sub-menu untuk Kontak
const menuKontak = () => {
  console.log("\n=== MENU KONTAK ===");
  console.log("1. Tambah Kontak");
  console.log("2. Tampilkan Daftar Kontak");
  console.log("3. Cari Detail Kontak");
  console.log("4. Hapus Kontak");
  console.log("5. Kembali ke Menu Utama");

  rl.question("Pilih menu kontak (1-5): ", (choice) => {
    if (choice === "1") {
      addContact();
    } else if (choice === "2") {
      contactList();
      showMenu();
    } else if (choice === "3") {
      rl.question("Nama yang dicari: ", (nama) => {
        detailContact(nama);
        showMenu();
      });
    } else if (choice === "4") {
      rl.question("Nama yang ingin dihapus: ", (nama) => {
        deleteContact(nama);
        showMenu();
      });
    } else if (choice === "5") {
      showMenu();
    } else {
      console.log("Pilihan tidak valid, coba lagi.");
      menuKontak();
    }
  });
};

const addContact = () => {
  console.log("\nTambah kontak...\n");
  rl.question("Nama :", (name) => {
    rl.question("Email :", (email) => {
      rl.question("No. Telp :", (no) => {
        saveContact(name, email, no);
        showMenu();
      });
    });
  });
};

// 🔹 Sub-menu untuk Tasks
const menuTasks = async () => {
  console.log("\n=== MENU TASKS ===");
  console.log("1. Jalankan task 1");
  console.log("2. Jalankan task 2");
  console.log("3. Jalankan task 3");
  console.log("4. Jalankan task 4");
  console.log("5. Jalankan task 5");
  console.log("6. Kembali ke Menu Utama");

  rl.question("Pilih menu tasks (1-6): ", async (choice) => {
    if (choice === "1") {
      rl.question("Masukkan status (true/false): ", async (input) => {
        const status = input.toLowerCase() === "true";
        await getData(status);
        showMenu();
      });
    } else if (choice === "2") {
      rl.question("Masukkan status (true/false): ", async (input) => {
        const status = input.toLowerCase() === "true";
        await getDataFromServer(input, processData);
        setTimeout(() => {
          showMenu();
        }, 4000);
      });
    } else if (choice === "3") {
      await getDataAdd();
      showMenu();
    } else if (choice === "4") {
      console.log("1. Check Palindrom");
      console.log("2. Reverse Word");

      rl.question(
        "Pilih fungsi yang ingin di uji (1/2): ",
        async (subChoice) => {
          if (subChoice === "1") {
            rl.question("Masukkan kata yang ingin di uji: ", (word) => {
              checkPalindrom(word);
              setTimeout(() => {
                showMenu();
              }, 3000);
            });
          } else if (subChoice === "2") {
            rl.question(
              "Masukkan kalimat yang ingin di reverse: ",
              (sentence) => {
                console.log(reverseWords(sentence));
                setTimeout(() => {
                  showMenu();
                }, 4000);
              }
            );
          } else {
            console.log("Pilihan tidak valid, coba lagi.");
            menuTasks();
          }
        }
      );
    } else if (choice === "5") {
      rl.question("Masukkan angka yang ingin diuji: ", (nums) => {
        console.log(dividedAndSort(nums));
        setTimeout(() => {
          showMenu();
        }, 3000);
      });
    } else if (choice === "6") {
      showMenu();
    } else {
      console.log("Pilihan tidak valid, coba lagi.");
      menuTasks();
    }
  });
};

// 🔹 Jalankan menu utama saat program dimulai
showMenu();
