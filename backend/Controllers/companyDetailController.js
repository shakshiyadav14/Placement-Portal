import Company from "../Models/Company.js";

export const getCompanyByNameAndJobId = async (req, res) => {
    try {
        const { name, job_id } = req.body;

        // Validate request body
        if (!name || !job_id) {
            return res.status(400).json({ message: "Name and Job ID are required" });
        }

        // Fetch the company data
        const company = await Company.findOne({ name, job_id, isDeleted: false, approved: "Yes" }).select('-email -phoneNumber -password -isDeleted -approved -createdAt -updatedAt');

        if (!company) {
            return res.status(404).json({ message: "Company not found or not approved by admin" });
        }

        res.status(200).json(company);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};


