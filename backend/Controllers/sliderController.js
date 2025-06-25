import Student from "../Models/Student.js";
import Company from "../Models/Company.js";
import FinalResult from "../Models/FinalResult.js";

export const getHighCtcStudents = async (req, res) => {
    try {
        const threshold = 25;

        const filteredResults = await FinalResult.find();
        
        const results = filteredResults.filter(result => {
            const match = result.ctc.match(/\d+(\.\d+)?/);
            const numericCTC = match ? parseFloat(match[0]) : null;
            return numericCTC !== null && numericCTC > threshold;
        });

        const studentRollNos = results.map(result => result.rollNo);
        const job_ids = results.map(result => result.job_id);

        const studentsData = await Student.find({ rollNo: { $in: studentRollNos } })
            .select("name batch studentImage rollNo")
            .lean();

        const companyData = await Company.find({ job_id: { $in: job_ids } })
            .select("job_id companyImage")
            .lean();

        const studentMap = studentsData.reduce((acc, student) => {
            acc[student.rollNo] = student;
            return acc;
        }, {});
        

        const companyMap = companyData.reduce((acc, comp) => {
            acc[comp.job_id] = comp;
            return acc;
        }, {});

        const students = results.map(result => ({
            rollNo: result.rollNo,
            name: studentMap[result.rollNo]?.name || "N/A",
            studentImage: studentMap[result.rollNo]?.studentImage || "N/A",
            batch: studentMap[result.rollNo]?.batch || "N/A",
            company: result.name,
            job_profile: result.job_profile,
            job_id: result.job_id,
            ctc: result.ctc,
            companyImage: companyMap[result.job_id]?.companyImage || "N/A",
        }));

        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
