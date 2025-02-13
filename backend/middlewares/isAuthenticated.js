import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Check User Authentication
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req?.cookies?.token; // Get the token from cookies

    if (!token) {
      return res
        .status(401)
        .json({ message: "Sign In Please", success: false });
    }

    // Try verifying the token
    try {
      const decode = jwt.verify(token, process.env.SECRET_KEY);

      req.userId = decode.userId;
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

export default isAuthenticated;
