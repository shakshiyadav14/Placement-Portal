import Student from "../Models/Student.js";

export const login = async (req, res, next) => {
  const { name,rollNo, personal_email,college_email,phoneNumber,gender,batch,cgpa,backlogs,branch,familyIncome,category,studentImage,isDisabled,password,isPlaced,github,linkedin,leetcode,codechef,codeforces,gfg,codingninja,resume} = req.body;

  //validate fileds

  if (!name) 
    next("Name is required");
  
  if (!rollNo) 
    next("Roll No is required");
  
  if (!personal_email) 
    next("Personal email is required");

  if (!college_email) 
    next("College email is required");

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

  if (!familyIncome) 
    next("Family income is required");

  if (!category) 
    next("Category is required");

  if (!studentImage) 
    next("Student image is required");

  if (!isDisabled) 
    next("Disability status is required");

  if (!password) 
    next("Password is required");

  if (!resume) 
    next("Resume is required");

  try {
    const studentExist = await Student.findOne({ rollNo });

    if (studentExist) {
      next("Roll No. already exists");
      return;
    }

    const newstudent = await Student.create({
        name,
        rollNo,
        personal_email,
        college_email,
        phoneNumber,
        gender,
        batch,
        cgpa,
        backlogs,
        branch,
        familyIncome,
        category,
        studentImage,
        isDisabled,
        password,
        isPlaced,
        github,
        linkedin,
        leetcode,
        codechef,
        codeforces,
        gfg,
        codingninja,
        resume
    });

    // user token
    const token = await newstudent.createJWT();

    res.status(201).send({
      success: true,
      message: "Account created successfully",
      newstudent: {
        _id: newstudent._id,
        name: newstudent.name,
        rollNo: newstudent.rollNo,
        personal_email: newstudent.personal_email,
        college_email: newstudent.college_email,
        phoneNumber: newstudent.phoneNumber,
        gender: newstudent.gender,
        batch: newstudent.batch,
        cgpa: newstudent.cgpa,
        backlogs: newstudent.backlogs,
        branch: newstudent.branch,
        familyIncome: newstudent.familyIncome,
        category: newstudent.category,
        studentImage: newstudent.studentImage,
        isDisabled: newstudent.isDisabled,
        password: newstudent.password,
        isPlaced: newstudent.isPlaced,
        github: newstudent.github,
        linkedin: newstudent.linkedin,
        leetcode: newstudent.leetcode,
        codechef: newstudent.codechef,
        codeforces: newstudent.codeforces,
        gfg: newstudent.gfg,
        codingninja: newstudent.codingninja,
        resume: newstudent.resume
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const signUp = async (req, res, next) => {
  const { rollNo, password } = req.body;

  try {
    //validation
    if (!rollNo || !password) {
      next("Please Provide All Credentials");
      return;
    }

    // find user by rollNo
    const stu = await Student.findOne({ rollNo }).select("+password");

    if (!stu) {
      next("Invalid rollNo or password");
      return;
    }

    // compare password
    const isMatch = await stu.comparePassword(password);

    if (!isMatch) {
      next("Invalid email or password");
      return;
    }

    stu.password = undefined;

    const token = stu.createJWT();

    res.status(201).json({
      success: true,
      message: "Login successfully",
      stu,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
