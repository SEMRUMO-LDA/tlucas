import nodemailer from 'nodemailer';

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
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
            connectionTimeout: 10000, // 10 seconds
            greetingTimeout: 10000,
            socketTimeout: 10000,
            debug: true, // Show debug info in logs
            logger: true // Log to console
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

        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('SMTP Error:', error);
        return new Response(JSON.stringify({ error: (error as Error).message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
