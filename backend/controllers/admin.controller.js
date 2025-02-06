import { Admin } from "../models/admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Admin Registration controller
export const register = async (req, res) => {
  try {
    const { email, password } = req.body; // Check if all fields are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const admin = await Admin.findOne({ email }); // Check if email is unique
    if (admin) {
      return res
        .status(400)
        .json({ message: "Admin already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    await Admin.create({
      // Create new admin in database

      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Admin created successfully",
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error: ${error.message}`, success: false });
  }
};

// Admin Login controller

// Check if all fields are provided
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // Check if email excists
    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({
        message: "Admin Doesnt Excist",
        success: false,
      });
    }

    // Check if password matches the bcrypted passwords
    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid username or password",
        success: false,
      });
    }

    // Sign the token data and generate the token
    const tokenData = {
      adminId: admin._id,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    // Create the admin object
    admin = {
      _id: admin._id,
      email: admin.email,
    };

    // Send the token in the HTTP-only cookie
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 86400000,
        httpOnly: true,
        sameSite: "Strict",
      })
      .json({
        message: `Welcome back `,
        admin,
        success: true,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error: ${error.message}`, success: false });
  }
};

// Admin Logout controller
export const logout = async (req, res) => {
  try {
    return (
      res
        .status(200)
        // Clear the cookie
        .cookie("token", "", {
          maxAge: 0,
        })
        .json({ message: "Logged out successfully", success: true })
    );
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error: ${error.message}`, success: false });
  }
};
