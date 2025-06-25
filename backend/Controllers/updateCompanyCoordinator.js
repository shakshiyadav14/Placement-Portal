//update company approved field 
import Company from "../Models/Company.js";

export const updateCompanyCoordinator = async (req, res) => {
    try {
        const { name, job_id ,approved } = req.body;

        // Validate request body
        if (!name || !job_id || !approved) {
            return res.status(400).json({ message: "Name and Job ID and approved status are required" });
        }

        // Fetch the company data
        const company = await Company.findOne({ name, job_id, isDeleted: false});

        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }

        company.approved=approved;

        await company.save();

        res.status(200).json({ message: "Company approved status updated successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}