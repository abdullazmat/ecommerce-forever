import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Check User Authentication
const admminAuthenticated = async (req, res, next) => {
  try {
    console.log("Admin Cookies:", req?.cookies); // Log all cookies

    const token = req?.cookies?.adminToken; // Get the token from cookies
    console.log("Admin Token:", token); // Log the token

    if (!token) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    console.log("SECRET_KEY:", process.env.SECRET_KEY); // Log secret key

    // Try verifying the token
    try {
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      console.log("Decoded Token:", decode);

      req.adminId = decode.adminId;
      next();
    } catch (verificationError) {
      console.error("JWT Verification Error:", verificationError);
      return res.status(401).json({ message: "Invalid Token", success: false });
    }
  } catch (error) {
    console.error("Authentication Middleware Error:", error);
    return res.status(500).json({
      message: `Error: ${error.message}`,
      success: false,
    });
  }
};

export default admminAuthenticated;
