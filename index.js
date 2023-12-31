const Contacts = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await Contacts.listContacts();
      console.table(contacts);
      break;

    case "get":
      const getContacts = await Contacts.getContactById(id);
      console.log(getContacts);
      break;

    case "add":
      const addContacts = await Contacts.addContact(name, email, phone);
      console.log(addContacts);
      break;

    case "remove":
     const contactRemove = await Contacts.removeContact(id)
     console.log(contactRemove);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);


