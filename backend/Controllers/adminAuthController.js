import Admin from "../Models/Admin.js";

// Login Admin
export const login3 = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required" });
    if (!password)
      return res.status(400).json({ message: "Password is required" });

    const ad = await Admin.findOne({ email }).select("+password");

    if (!ad) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await ad.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    ad.password = undefined;
    const token = ad.createJWT();

    res.status(200).json({
      success: true,
      message: "Login successful",
      admin: ad,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Signup Admin
export const signUp3 = async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all credentials" });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newAdmin = new Admin({ email, password });

    await newAdmin.save(); // Save to DB

    const token = newAdmin.createJWT();

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      admin: newAdmin,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const presignup = (req, res) => {
  try {
    const { superPassword } = req.body;

    if (superPassword !== process.env.SUPER_PASSWORD) {
      return res.status(401).json({ message: "Invalid super password" });
    }

    return res.status(200).json({ message: "Proceed to signup" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
