import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// API Endpoint for contact form
app.post('/api/send', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            connectionTimeout: 15000,
            greetingTimeout: 15000,
            socketTimeout: 15000,
        });

        const mailOptions = {
            from: `"t.lucas Transfers" <${process.env.SMTP_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `New Quote Request from ${name}`,
            text: `
                Lead Explorer: ${name}
                Contact Email: ${email}
                
                Trip Details:
                ${message}
            `,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #00221B;">New Quote Request</h2>
                    <p><strong>Lead Explorer:</strong> ${name}</p>
                    <p><strong>Contact Email:</strong> ${email}</p>
                    <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #00C692;">
                        <h3 style="margin-top: 0;">Trip Details:</h3>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully from ${name} (${email})`);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('SMTP Error:', error);
        return res.status(500).json({ error: error.message });
    }
});

// Handle SPA routing - serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
