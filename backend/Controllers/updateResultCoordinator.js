//update result approved field 
import Result from "../Models/Result.js";

export const updateResultCoordinator = async (req, res) => {
    try {
        const { name,status,approved } = req.body;

        // Validate request body
        if (!name || !status || !approved) {
            return res.status(400).json({ message: "Name and Status and approved status are required" });
        }

        // Fetch the result data
        const result = await Result.findOne({ name,status});

        if (!result) {
            return res.status(404).json({ message: "result not found" });
        }

        result.approved=approved;

        await result.save();

        res.status(200).json({ message: "result approved status updated successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}