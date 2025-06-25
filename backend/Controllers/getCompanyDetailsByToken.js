import JWT from "jsonwebtoken";
import Company from "../Models/Company.js";

export const getCompanyDetailsByToken = async (req, res) => {
    try {
        const authHeader = req?.headers?.authorization;
        if (!authHeader || !authHeader?.startsWith("Bearer")) {
            next("Authentication== failed");
        }
        const token = authHeader?.split(" ")[1];
        
        if (!token) {
            return res.status(400).json({ success: false, message: "Token is required" });
        }

        // Verify the token
        const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
        if (!decoded) {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }
        // console.log(decoded);
        
        // Fetch company details based on the user ID or company ID in the token
        const company = await Company.findOne({ _id: decoded.userId });

        if (!company) {
            return res.status(404).json({ success: false, message: "Company not found" });
        }

        res.status(200).json({ success: true, company });
    } catch (error) {
        console.error("Error fetching company details:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

