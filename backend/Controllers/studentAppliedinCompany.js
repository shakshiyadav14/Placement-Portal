import Student from "../Models/Student.js";
import StuCom from "../Models/StuCom.js";

export const getStudentApplied = async (req, res) => {
    try {
        const { name, job_id } = req.body;

        const studentRollNos = await StuCom.find({ job_id, name })
            .select("rollNo")
            .lean();

        const rollNoArray = studentRollNos.map(student => student.rollNo);

        const studentsData = await Student.find({ rollNo: { $in: rollNoArray } })
            .select("name rollNo personal_email college_email github linkedin leetcode codechef codeforces gfg codingninja resume phoneNumber gender batch cgpa backlogs branch category studentImage isDisabled")
            .lean();

        res.status(200).json(studentsData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
