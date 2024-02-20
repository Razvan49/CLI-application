const fs = require("fs");
// Importăm modulul fs pentru a putea lucra cu sistemul de fișiere
const path = require("path");
// Importăm modulul path pentru a manipula căile către fișiere și directoare
const contactsPath = path.resolve(__dirname, "db", "contacts.json");
// Definim calea absolută către fișierul contacts.json

// Funcția listContacts afișează în consolă lista de contacte
function listContacts() {
  const contacts = JSON.parse(fs.readFileSync(contactsPath, "utf-8"));
  // Citim fișierul contacts.json și parsăm conținutul JSON într-un obiect JavaScript
  console.table(contacts);
  // Afișăm lista de contacte sub formă de tabel în consolă
}

// Funcția getContactById caută și afișează în consolă contactul cu id-ul specificat
function getContactById(contactId) {
  const contacts = JSON.parse(fs.readFileSync(contactsPath, "utf-8"));
  // Citim fișierul contacts.json și parsăm conținutul JSON într-un obiect JavaScript
  const contact = contacts.find((c) => c.id === contactId);
  // Căutăm contactul cu id-ul specificat în lista de contacte
  console.log(contact);
  // Afișăm contactul găsit în consolă
}

// Funcția removeContact elimină contactul cu id-ul specificat din lista de contacte
function removeContact(contactId) {
  let contacts = JSON.parse(fs.readFileSync(contactsPath, "utf-8"));
  // Citim fișierul contacts.json și parsăm conținutul JSON într-un obiect JavaScript
  contacts = contacts.filter((c) => c.id !== contactId);
  // Filtrăm lista de contacte pentru a elimina contactul cu id-ul specificat
  fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
  // Suprascriem fișierul contacts.json cu noua listă de contacte
  console.log(`Contact with ID ${contactId} has been removed.`);
  // Afișăm un mesaj de confirmare în consolă
}

// Funcția addContact adaugă un nou contact în lista de contacte
function addContact(name, email, phone) {
  let contacts = JSON.parse(fs.readFileSync(contactsPath, "utf-8"));
  // Citim fișierul contacts.json și parsăm conținutul JSON într-un obiect JavaScript
  const newContact = {
    // Creăm un obiect pentru noul contact
    id: contacts.length + 1,
    // Id-ul noului contact este determinat de lungimea listei de contacte plus 1
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  // Adăugăm noul contact în lista de contacte
  fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
  // Suprascriem fișierul contacts.json cu noua listă de contacte
  console.log("Contact has been added.");
  // Afișăm un mesaj de confirmare în consolă
}

module.exports = {
  // Exportăm funcțiile pentru a le putea folosi în alt modul
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
