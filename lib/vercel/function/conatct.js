import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "Method Not Allowed" }),
        };
    }

    try {
        const body = event.body ? JSON.parse(event.body) : {};
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return {
                statusCode: 400,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    error: "Name, email and message are required.",
                }),
            };
        }

        if (!process.env.RESEND_API_KEY) {
            return {
                statusCode: 500,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    error: "RESEND_API_KEY is not configured on Netlify.",
                }),
            };
        }

        const { data, error } = await resend.emails.send({
            from: " Mibk Consultancy <[EMAIL_ADDRESS]>",
            to: ["mibkconsultancyltd@gmail.com"],
            replyTo: email,
            subject: `New Consultance Contact Request ${name}`,
            html: `
        <h2>Consultance Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message</h3>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return {
                statusCode: 500,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ error: error.message }),
            };
        }

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ success: true, data }),
        };
    } catch (error) {
        console.error("Email Function Error:", error);
        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "Failed to send email." }),
        };
    }
};
