import Company from '../Models/Company.js'
export const getAllCompany = async (req, res) => {
  
    try {
      //get data of all companies
      const companies = await Company.find();
      if (!companies) {
        return res.status(404).json({ message: "Companies not found." });
      }
      return res.status(200).json(companies);


    } catch (error) {
      console.error("Error fetching result:", error);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
  
}

