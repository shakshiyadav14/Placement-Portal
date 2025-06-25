import express from "express";
const router = express.Router();

// Import controllers
import { login, signUp } from "../Controllers/studentAuthController.js";

import { login1, signUp1, updateCompany } from "../Controllers/companyAuthController.js";

import { login2 } from "../Controllers/coordinatorAuthController.js";

import { login3, signUp3,presignup } from "../Controllers/adminAuthController.js";

/* Routes */
router.post("/student/signUp", signUp);
router.post("/student/login", login);

router.post("/company/signUp", signUp1);
router.post("/company/login", login1);
router.post("/company/updateReq", updateCompany);

router.post("/coordinator/login", login2);

router.post("/admin/signUp", signUp3);
router.post("/admin/login", login3);
router.post("/admin/presignup", presignup);

export default router;
