import ContactsCollection from '../db/models/Contact.js';

export async function getAllContacts() {
  const contacts = await ContactsCollection.find();
  return contacts;
}

export async function getContactById(contactId) {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
}

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};
