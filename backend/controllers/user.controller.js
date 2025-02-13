import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";
import nodemailer from "nodemailer";
dotenv.config();

// User Registration controller
export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body; // Check if all fields are provided
    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email }); // Check if email is unique
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    await User.create({
      // Create new user in database
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error: ${error.message}`, success: false });
  }
};

// User Login controller

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
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Username Doesnt Excist",
        success: false,
      });
    }

    // Check if password matches the bcrypted passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid username or password",
        success: false,
      });
    }

    // Sign the token data and generate the token
    const tokenData = {
      userId: user._id,
    };

    console.log(process.env.SECRET_KEY);
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    console.log(token);

    // Create the user object
    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
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
        message: `Welcome back ${user.fullName}`,
        user,
        success: true,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error: ${error.message}`, success: false });
  }
};

// User Logout controller
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

// Get User by ID controller
export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    return res.status(200).json({ user, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error: ${error.message}`, success: false });
  }
};

// Forget Password controller
export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Password Reset For ForEver Commerce",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333333;">Password Reset Request For Ecommerce ForEver</h2>
              <p style="font-size: 16px; color: #555555;">
                We received a request to reset your password for your Ecommerce Portal account.
                Please click the link below to reset your password.
              </p>
              <p style="font-size: 16px; color: #555555;">
                <a href="${process.env.CLIENT_ENDPOINT}/reset-password/${token}" 
                   style="background-color: #007BFF; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px;">
                   Reset Password
                </a>
              </p>
              <p style="font-size: 14px; color: #777777;">
                If you did not request a password reset, please ignore this email.
              </p>
              <p style="font-size: 12px; color: #888888;">
                If you have any questions, feel free to contact our support team.
              </p>
            </div>
          </body>
        </html>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({
          message: `Error: ${error.message}`,
          success: false,
        });
      }
      return res.status(200).json({
        message: "Email sent",
        success: true,
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error: ${error.message}`,
      success: false,
    });
  }
};

// Reset Password controller
export const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({
        message: "Password is required",
        success: false,
      });
    }

    const token = req.params.token;

    if (!token) {
      return res.status(400).json({
        message: "Invalid token",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({
      message: "Password updated successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error: ${error.message}`,
      success: false,
    });
  }
};
