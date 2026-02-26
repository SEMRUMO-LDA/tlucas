import nodemailer from 'nodemailer';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'cpp6.webserver.pt',
            port: parseInt(process.env.SMTP_PORT || '567'),
            secure: false, // false for most ports except 465. Use STARTTLS.
            auth: {
                user: process.env.SMTP_USER || 'mmartinho@aorubro.pt',
                pass: process.env.SMTP_PASS || 'W3WH6aT8]g,&sPkW',
            },
            connectionTimeout: 15000,
            greetingTimeout: 15000,
            socketTimeout: 15000,
            debug: true,
            logger: true
        });

        const mailOptions = {
            from: `"t.lucas Transfers" <${process.env.SMTP_USER || 'mmartinho@aorubro.pt'}>`,
            to: process.env.EMAIL_TO || 'mmartinho@aorubro.pt',
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
                    <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #00D1FF;">
                        <h3 style="margin-top: 0;">Trip Details:</h3>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('SMTP Error:', error);
        return res.status(500).json({ error: (error as Error).message });
    }
}
