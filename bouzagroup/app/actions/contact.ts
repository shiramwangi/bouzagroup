"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const country = formData.get("country") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!firstName || !lastName || !email || !subject || !message) {
    return { error: "Required fields are missing." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Highly customized HTML Corporate Template for the receiving inbox
  const htmlTemplate = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #17306D; padding: 32px; text-align: center; border-bottom: 4px solid #F5B11A;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 2px;">BOUZA GROUP</h1>
        <p style="color: #F5B11A; margin: 8px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 4px;">Secure Portal Inquiry</p>
      </div>
      
      <div style="padding: 32px; color: #334155;">
        <h2 style="margin-top: 0; color: #17306D; font-size: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">${subject}</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 120px;">Name</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Email</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0640CE;"><a href="mailto:${email}" style="color: #0640CE; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Phone</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Company</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Origin</td>
            <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${country}</td>
          </tr>
        </table>

        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #EB2027;">
          <p style="margin: 0; font-size: 13px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Transmitted Message</p>
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
      
      <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
        This communication was generated automatically via the Bouza Group Corporate Portal.
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Bouza Portal" <${process.env.EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_DESTINATION_EMAIL || "mmousaa044@gmail.com",
      replyTo: email,
      subject: `[Bouza Inquiry] ${subject} - ${firstName} ${lastName}`,
      html: htmlTemplate,
    });
    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { error: "Failed to send communication. Please try again." };
  }
}