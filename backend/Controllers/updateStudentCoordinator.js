//update company approved field 
import Student from "../Models/Student.js";

export const updateStudentCoordinator = async (req, res) => {
    try {
        const { rollNo,approved } = req.body;

        // Validate request body
        if (!rollNo || !approved) {
            return res.status(400).json({ message: "Roll No. and approved status are required" });
        }

        // Fetch the student data
        const student = await Student.findOne({rollNo});

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        student.approved=approved;

        await student.save();

        res.status(200).json({ message: "Student approved status updated successfully" });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}