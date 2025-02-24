import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  saveContact,
  contactList,
  detailContact,
  deleteContact,
} from "./contacts.js";

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Menambahkan kontak baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHp: {
        describe: "Nomor Telephone/WA",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      saveContact(argv.nama, argv.email, argv.noHp);
    },
  })
  .command({
    command: "list",
    describe: "Menampilkan isi Kontak",
    handler() {
      contactList();
    },
  })
  .command({
    command: "detail",
    describe: "Menampilkan detail kontak",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      detailContact(argv.nama);
    },
  })
  .command({
    command: "delete",
    describe: "Menghapus kontak",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      deleteContact(argv.nama);
    },
  })
  .demandCommand()
  .help()
  .parse();
