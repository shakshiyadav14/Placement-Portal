import PostHolder from '../Models/PostHolder.js';

//login2
export const login2 = async (req, res, next) => {

    try {
        const {rollNo,password} = req.body;

        if (!rollNo) 
            next("Roll No is required");

        if (!password)  
            next("Password is required");

        const ph = await PostHolder.findOne({ rollNo }).select("+password");

        if (!ph) {
            next("Invalid rollNo or password");
            return;
          }
      
          // compare password
          const isMatch = await ph.comparePassword(password);
      
          if (!isMatch) {
            next("Invalid rollNo or password");
            return;
          }
      
          ph.password = undefined;
      
          const token = ph.createJWT();
      
          res.status(201).json({
            success: true,
            message: "Login successfully",
            ph,
            token,
          });
        } catch (error) {
          console.log(error);
          res.status(404).json({ message: error.message });
        }
      };
      
