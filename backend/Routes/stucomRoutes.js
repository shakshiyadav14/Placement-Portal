import express from "express";
import { getCompaniesByRollNo } from "../Controllers/studentCompanyController.js";
import userAuth from "../Middlewares/authMiddleware.js"
import {getCompanyByNameAndJobId} from "../Controllers/companyDetailController.js"
import {getHighCtcStudents} from "../Controllers/sliderController.js"
import { getStudentApplied } from "../Controllers/studentAppliedinCompany.js";

const router = express.Router();

router.post("/student/companies",userAuth, getCompaniesByRollNo);
router.post("/companydetails",userAuth, getCompanyByNameAndJobId);
router.post("/company/applied-students", getStudentApplied)
router.post("/slider",getHighCtcStudents);

export default router;
