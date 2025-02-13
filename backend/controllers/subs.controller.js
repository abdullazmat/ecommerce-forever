import { Subs } from "../models/subs.model.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Subscribe to Email controller
export const addtoSubscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
        success: false,
      });
    }

    const sub = await Subs.findOne({ email });
    if (!sub) {
      const newSub = new Subs({
        email,
      });
      await newSub.save();
    }

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
      subject: "Subscription to Ecommerce ForEver",
      html: `
          <html>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
              <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333333;">Subscription to Ecommerce ForEver</h2>
                <p style="font-size: 16px; color: #555555;">
              You have been subscribed to our newsletter. You will receive the latest updates and offers from us.

                </p>
                <p style="font-size: 16px; color: #555555;">
                  If you did not subscribe to our newsletter, please ignore this email.
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
