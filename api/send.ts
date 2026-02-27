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

        const apiKey = process.env.RESEND_API_KEY;
        const fromEmail = process.env.EMAIL_FROM || 'info@tlucas.pt';
        const toEmail = process.env.EMAIL_TO || 'info@tlucas.pt';

        if (!apiKey) {
            console.error('RESEND_API_KEY is not configured');
            return res.status(500).json({ error: 'Email service not configured' });
        }

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: `t.lucas Transfers <${fromEmail}>`,
                to: [toEmail],
                reply_to: email,
                subject: `New Quote Request from ${name}`,
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
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Resend API Error:', data);
            return res.status(response.status).json({ error: data.message || 'Failed to send email' });
        }

        console.log(`Email sent successfully from ${name} (${email})`);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email Error:', error);
        return res.status(500).json({ error: (error as Error).message });
    }
}
