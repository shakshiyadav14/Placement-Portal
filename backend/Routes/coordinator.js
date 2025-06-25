import express from 'express';
const router = express.Router();

import {saveCoordinator, deleteCoordinator} from "../Controllers/coordinatorController.js"
import { updateResultCoordinator } from '../Controllers/updateResultCoordinator.js';
import {updateCompanyCoordinator} from '../Controllers/updateCompanyCoordinator.js';
import {updateStudentCoordinator} from '../Controllers/updateStudentCoordinator.js';

router.post('/register', saveCoordinator);
router.post('/delete',deleteCoordinator);
router.post('/updateCompany',updateCompanyCoordinator);
router.post('/updateStudent',updateStudentCoordinator);
router.post('/updateResult',updateResultCoordinator);

export default router;