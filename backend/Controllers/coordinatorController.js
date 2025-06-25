import PostHolder from "../Models/PostHolder.js";

// Save Coordinator
export const saveCoordinator = async (req, res) => {
  try {
    const { rollNo, email, post, password } = req.body;

    if (!rollNo)
      return res.status(400).json({ message: "Roll No is required" });
    if (!email) return res.status(400).json({ message: "Email is required" });
    if (!post) return res.status(400).json({ message: "Post is required" });
    if (!password)
      return res.status(400).json({ message: "Password is required" });

    // Check if coordinator with same rollNo or email already exists
    const existingCoordinator = await PostHolder.findOne({
      $or: [{ rollNo }, { email }],
    });
    if (existingCoordinator) {
      return res
        .status(400)
        .json({
          message: "Coordinator with this Roll No or Email already exists",
        });
    }

    const coordinator = new PostHolder({
      rollNo ,
      email,
      post,
      password, 
    });

    await coordinator.save();
    return res.status(201).json({ message: "Coordinator saved successfully" });
  } catch (error) {
    console.error("Error saving coordinator:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Coordinator
export const deleteCoordinator = async (req, res) => {
  try {
    const { rollNo } = req.body;
    if (!rollNo)
      return res.status(400).json({ message: "Roll No is required" });

    // Find and delete the coordinator
    const deletedCoordinator = await PostHolder.findOneAndDelete({ rollNo });
    if (!deletedCoordinator) {
      return res.status(404).json({ message: "Coordinator not found" });
    }

    return res
      .status(200)
      .json({ message: "Coordinator deleted successfully" });
  } catch (error) {
    console.error("Error deleting coordinator:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
