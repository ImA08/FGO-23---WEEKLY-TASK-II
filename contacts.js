import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import validator from "validator";
import consola from "consola";

// Mendapatkan __dirname secara manual untuk ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPath = path.join(__dirname, "data");
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = path.join(dirPath, "contacts.json");
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

export const loadContact = () => {
  const file = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(file);
};

export const saveContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp };
  const contacts = loadContact();

  // cek duplikat
  if (contacts.some((c) => c.nama === nama)) {
    consola.warn("Contact sudah terdaftar!");
    return false;
  }

  // cek validasi email
  if (email && !validator.isEmail(email)) {
    consola.error("Email tidak valid!");
    return false;
  }

  if (!validator.isMobilePhone(noHp, "id-ID")) {
    consola.error("Nomor tidak valid!");
    return false;
  }

  contacts.push(contact);
  fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2));

  consola.success("Kontak berhasil disimpan!");
};

export const contactList = () => {
  const contacts = loadContact();
  consola.box("Daftar Kontak");
  contacts.forEach((contact, i) => {
    consola.info(
      `${i + 1}. ${contact.nama}
    > ${contact.email}
    > ${contact.noHp}`
    );
  });
};

export const detailContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(
    (c) => c.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    consola.warn(`${nama} tidak ditemukan!`);
    return false;
  }

  consola.success(`Nama: ${contact.nama}`);
  consola.info(`Nomor HP: ${contact.noHp}`);
  if (contact.email) {
    consola.info(`Email: ${contact.email}`);
  }
};

export const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (c) => c.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (contacts.length === newContacts.length) {
    consola.warn(`${nama} tidak ditemukan!`);
    return false;
  }

  fs.writeFileSync(dataPath, JSON.stringify(newContacts, null, 2));
  consola.success("Kontak berhasil dihapus!");
};
