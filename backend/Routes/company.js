import {getAllCompany} from '../Controllers/getAllCompany.js';
import { getCompanyDetailsByToken } from '../Controllers/getCompanyDetailsByToken.js';

import express from "express";
const router = express.Router();

router.post('/getCompanyData', getCompanyDetailsByToken);
router.post('/getAllCompany', getAllCompany);

export default router;