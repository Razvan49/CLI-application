const argv = require("yargs").argv;
// Importăm modulul yargs pentru a gestiona argumentele de la linia de comandă
const { listContacts, getContactById, removeContact, addContact } = require("./contacts");
// Importăm funcțiile din modulul contacts.js

// Funcția invokeAction primește un obiect cu un anumit format și apelează funcția corespunzătoare în funcție de acțiunea specificată
function invokeAction({ action, id, name, email, phone }) {
  switch (
    action // Verificăm valoarea argumentului 'action'
  ) {
    case "list":
      // Dacă 'action' este "list"
      listContacts();
      // Apelăm funcția listContacts din contacts.js
      break;
    // Ieșim din structura switch

    case "get":
      // Dacă 'action' este "get"
      getContactById(id);
      // Apelăm funcția getContactById din contacts.js și îi transmitem 'id'-ul contactului
      break;
    // Ieșim din structura switch

    case "remove":
      // Dacă 'action' este "remove"
      removeContact(id);
      // Apelăm funcția removeContact din contacts.js și îi transmitem 'id'-ul contactului
      break;
    // Ieșim din structura switch

    case "add":
      // Dacă 'action' este "add"
      addContact(name, email, phone);
      // Apelăm funcția addContact din contacts.js și îi transmitem 'name', 'email' și 'phone' pentru a adăuga un nou contact
      break;
    // Ieșim din structura switch

    default:
      // În cazul în care 'action' nu este niciuna dintre valorile specificate mai sus
      console.warn("\x1B[31m Unknown action type!");
    // Afișăm un mesaj de avertizare în consolă
  }
}

invokeAction(argv);
// Apelăm funcția invokeAction cu argumentele primite de la linia de comandă
