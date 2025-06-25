import Company from "../Models/Company.js";

export const signUp1 = async (req, res, next) => {
  const { name,ctc, job_id,email,phoneNumber,gender,batch,cgpa,backlogs,branch,location,job_profile,companyImage,last_date,password,group_disscussion,tech_rounds,hr_rounds,onlyPWD,OA,aptitude,description
   } = req.body;

  //validate fileds

  if (!name) 
    next("Name is required");
  
  if (!ctc) 
    next("CTC No is required");
  
  if (!job_id) 
    next("JOB ID is required");

  if (!email) 
    next("email is required");

  if (!phoneNumber) 
    next("Phone number is required");

  if (!gender) 
    next("Gender is required");

  if (!batch) 
    next("Batch is required");

  if (cgpa === undefined || cgpa === null) 
    next("CGPA is required");

  if (!backlogs) 
    next("Backlogs are required");

  if (!branch) 
    next("Branch is required");

  if (!location) 
    next("Location is required");

  if (!job_profile) 
    next("Job Profile is required");

  if (!companyImage) 
    next("Company image is required");

  if (!last_date) 
    next("last_date is required");

  if (!password) 
    next("Password is required");

  if (!group_disscussion) 
    next("group_disscussion is required");

  if (!tech_rounds) 
    next("tech_rounds is required");

  if (!hr_rounds) 
    next("hr_rounds is required");

  if(!onlyPWD)
    next("onlyPWD is required");

  if(!OA)
    next("OA is required");

  if(!aptitude)
    next("aptitude is required");

  if(!description)
    next("description is required");

  try {
    const companyExist = await Company.findOne({ name,job_id });

    if (companyExist) {
      next("Company with JOB ID already exists");
      return;
    }

    const newcompany = await Company.create({
        name,ctc, job_id,email,phoneNumber,gender,batch,cgpa,backlogs,branch,location,job_profile,companyImage,last_date,password,group_disscussion,tech_rounds,hr_rounds,onlyPWD,OA,aptitude,description
    });

    // user token
    const token = await newcompany.createJWT();

    res.status(201).send({
      success: true,
      message: "Account created successfully",
      newcompany: {
        _id: newcompany._id,
        name: newcompany.name,
        ctc: newcompany.ctc,
        job_id: newcompany.job_id,
        email: newcompany.email,
        phoneNumber: newcompany.phoneNumber,
        gender: newcompany.gender,
        batch: newcompany.batch,
        cgpa: newcompany.cgpa,
        backlogs: newcompany.backlogs,
        branch: newcompany.branch,
        location: newcompany.location,
        job_profile: newcompany.job_profile,
        companyImage: newcompany.companyImage,
        last_date: newcompany.last_date,
        password: newcompany.password,
        group_disscussion: newcompany.group_disscussion,
        tech_rounds: newcompany.tech_rounds,
        hr_rounds: newcompany.hr_rounds,
        onlyPWD: newcompany.onlyPWD,
        OA: newcompany.OA,
        aptitude: newcompany.aptitude,
        description: newcompany.description
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const login1 = async (req, res, next) => {
  const { name,job_id, password } = req.body;

  try {
    //validation
    if (!name || !job_id || !password) {
      next("Please Provide All Credentials");
      return;
    }

    // find user by name and jobid
    const com = await Company.findOne({ name,job_id }).select("+password");

    if (!com) {
      next("Invalid name or jobId or password");
      return;
    }

    // compare password
    const isMatch = await com.comparePassword(password);

    if (!isMatch) {
      next("Invalid name or JobId or password");
      return;
    }

    com.password = undefined;

    const token = com.createJWT();

    res.status(201).json({
      success: true,
      message: "Login successfully",
      com,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const updateCompany = async (req, res, next) => { 
  const {CompanyReq} = req.body;
  const job_id = CompanyReq.job_id;
  
  try {
    // Find the company by job_id
    const company = await Company.findOne({ job_id });

    if (!company) {
      return next("Company not found");
    }

    // Update fields dynamically
    Object.assign(company, CompanyReq);

    // Save the updated company
    await company.save();

    res.status(200).json({
      success: true,
      message: "Company details updated successfully",
      updatedCompany: company,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
