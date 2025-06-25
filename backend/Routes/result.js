import express from 'express';
const router = express.Router();

import {saveResult,getResult} from "../Controllers/resultController.js"

router.post('/save', saveResult);
router.post('/fetch',getResult);

export default router;