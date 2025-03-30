import { Router } from 'express';
import { getAllContacts, getContactById } from '../services/contacts';

const router = Router();

router.get('/contacts', getAllContacts);
router.get('/contacts/:contactId', getContactById);

export default router;
