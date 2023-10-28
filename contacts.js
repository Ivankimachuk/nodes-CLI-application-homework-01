const fs = require("node:fs/promises");
const path = require("node: path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
    // We return the data
    const data = await fs.readFile(contactsPath, 'utf-8')
    console.log(listContacts);
}
listContacts();

// /*
//  * Розкоментуй і запиши значення
//  * const contactsPath = ;
//  */

// // TODO: задокументувати кожну функцію
// function listContacts() {
//     // ...твій код. Повертає масив контактів.
//   }

//   function getContactById(contactId) {
//     // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
//   }

//   function removeContact(contactId) {
//     // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
//   }

//   function addContact(name, email, phone) {
//     // ...твій код. Повертає об'єкт доданого контакту.
//   }
