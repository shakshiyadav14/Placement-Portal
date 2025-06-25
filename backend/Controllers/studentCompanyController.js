import StuCom from "../Models/StuCom.js"; // Import the StuCom model
import Student from "../Models/Student.js";
import Company from "../Models/Company.js";


// Controller to get all companies for a given rollNo
export const getCompaniesByRollNo = async (req, res) => {
  try {
    // Extract rollNo from the request body
    const { rollNo } = req.body;

    // Validate that rollNo is provided
    if (!rollNo) {
      return res.status(400).json({ message: "rollNo is required." });
    }

    // Find all entries in StuCom where rollNo matches
    const companies = await StuCom.find({ rollNo })
      .populate("name", "name") // Populate the company name
      .populate("job_id", "job_id") // Populate the job_id field
      .exec();

    // Check if any entries are found
    if (!companies || companies.length === 0) {
      return res
        .status(404)
        .json({ message: "No entries found for this roll number." });
    }

    // Return the list of company entries
    return res.status(200).json(companies);
  } catch (error) {
    console.error("Error fetching companies by rollNo:", error);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
};


export const saveData = async (req, res) => {
  try {
    const { rollNo, name, job_id } = req.body;

    if (!rollNo)
      return res.status(400).json({ message: "Roll number is required." });

    if (!name)
      return res.status(400).json({ message: "Company name is required." });

    if (!job_id)
      return res.status(400).json({ message: "Job ID is required." });

    // Check if rollNo exists in Student collection
    const studentExists = await Student.findOne({ rollNo });
    if (!studentExists)
      return res.status(404).json({ message: "Student not found." });

    // Check if { name, job_id } exists in Company collection
    const companyExists = await Company.findOne({ name, job_id });
    if (!companyExists)
      return res.status(404).json({ message: "Company or Job ID not found." });

    // Save data
    const newEntry = new StuCom({ rollNo, name, job_id });
    await newEntry.save();

    return res.status(201).json({ message: "Data saved successfully." });
  } catch (error) {
    console.error("Error saving data:", error);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
};
