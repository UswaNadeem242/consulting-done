// // import { Resend } from "resend";

// // const resend = new Resend(process.env.RESEND_API_KEY);

// // export const handler = async (event) => {
// //     if (event.httpMethod !== "POST") {
// //         return {
// //             statusCode: 405,
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({ error: "Method Not Allowed" }),
// //         };
// //     }

// //     try {
// //         const body = event.body ? JSON.parse(event.body) : {};
// //         const { name, email, message } = body;

// //         if (!name || !email || !message) {
// //             return {
// //                 statusCode: 400,
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify({
// //                     error: "Name, email and message are required.",
// //                 }),
// //             };
// //         }

// //         if (!process.env.RESEND_API_KEY) {
// //             return {
// //                 statusCode: 500,
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify({
// //                     error: "RESEND_API_KEY is not configured on Netlify.",
// //                 }),
// //             };
// //         }

// //         const { data, error } = await resend.emails.send({
// //             from: " Mibk Consultancy <>",
// //             to: ["mibkconsultancyltd@gmail.com"],
// //             replyTo: email,
// //             subject: `New Contact Form Message from ${name}`,
// //             html: `
// //         <h2>New Contact Form Submission</h2>
// //         <p><strong>Name:</strong> ${name}</p>
// //         <p><strong>Email:</strong> ${email}</p>
// //         <h3>Message</h3>
// //         <p>${message}</p>
// //       `,
// //         });

// //         if (error) {
// //             console.error("Resend Error:", error);
// //             return {
// //                 statusCode: 500,
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify({ error: error.message }),
// //             };
// //         }

// //         return {
// //             statusCode: 200,
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({ success: true, data }),
// //         };
// //     } catch (error) {
// //         console.error("Email Function Error:", error);
// //         return {
// //             statusCode: 500,
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({ error: "Failed to send email." }),
// //         };
// //     }
// // };



// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//     try {
//         // Check API key
//         if (!process.env.RESEND_API_KEY) {
//             console.error("RESEND_API_KEY is missing");

//             return Response.json(
//                 {
//                     error: "RESEND_API_KEY is not configured.",
//                 },
//                 {
//                     status: 500,
//                 }
//             );
//         }

//         // Read request body
//         const body = await req.json();

//         const name = body?.name?.trim();
//         const email = body?.email?.trim();
//         const message = body?.message?.trim();

//         // Validate fields
//         if (!name || !email || !message) {
//             return Response.json(
//                 {
//                     error:
//                         "Name, email and message are required.",
//                 },
//                 {
//                     status: 400,
//                 }
//             );
//         }

//         // Send email through Resend
//         const { data, error } = await resend.emails.send({
//             from: "Mibk Consultancy <info@mibkconsultancyltd.co.uk>",

//             to: [
//                 "mibkconsultancyltd@gmail.com",
//             ],

//             replyTo: email,

//             subject:
//                 `New Contact Form Message from ${name} `,

//             html: `
//     < div style = "font-family: Arial, sans-serif; line-height: 1.6;" >

//                     <h2>
//                         New Contact Form Submission
//                     </h2>

//                     <p>
//                         <strong>Name:</strong>
//                         ${name}
//                     </p>

//                     <p>
//                         <strong>Email:</strong>
//                         ${email}
//                     </p>

//                     <p>
//                         <strong>Message:</strong>
//                     </p>

//                     <p>
//                         ${message}
//                     </p>

//                 </div >
//     `,
//         });

//         // Resend error
//         if (error) {
//             console.error(
//                 "Resend Error:",
//                 error
//             );

//             return Response.json(
//                 {
//                     error:
//                         error.message ||
//                         "Failed to send email.",
//                 },
//                 {
//                     status: 500,
//                 }
//             );
//         }

//         // Success
//         return Response.json(
//             {
//                 success: true,
//                 data,
//             },
//             {
//                 status: 200,
//             }
//         );

//     } catch (error) {
//         console.error(
//             "Contact API Error:",
//             error
//         );

//         return Response.json(
//             {
//                 error:
//                     "Failed to send email.",
//             },
//             {
//                 status: 500,
//             }
//         );
//     }
// }







import { Resend } from "resend";

export async function POST(request) {
    try {
        console.log("=================================");
        console.log("CONTACT API CALLED");
        console.log("=================================");

        // Check Resend API key
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error("RESEND_API_KEY is missing");

            return Response.json(
                {
                    success: false,
                    error: "RESEND_API_KEY is not configured.",
                },
                { status: 500 }
            );
        }

        // Create Resend instance
        const resend = new Resend(apiKey);

        // Get request body
        const body = await request.json();

        const name = body?.name?.trim();
        const email = body?.email?.trim();
        const message = body?.message?.trim();

        console.log("Form data received:", {
            name,
            email,
            message,
        });

        // Validate
        if (!name || !email || !message) {
            return Response.json(
                {
                    success: false,
                    error:
                        "Name, email and message are required.",
                },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: "Mibk Consultancy <info@mibkconsultancyltd.co.uk>",

            to: [
                "mibkconsultancyltd@gmail.com",
            ],

            replyTo: email,

            subject:
                `New Contact Form Message from ${name}`,

            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>New Contact Form Message</title>
                </head>

                <body
                    style="
                        margin: 0;
                        padding: 20px;
                        font-family: Arial, sans-serif;
                        background: #f5f5f5;
                    "
                >

                    <div
                        style="
                            max-width: 600px;
                            margin: 0 auto;
                            background: white;
                            padding: 30px;
                            border-radius: 8px;
                        "
                    >

                        <h2
                            style="
                                margin-top: 0;
                            "
                        >
                            New Contact Form Submission
                        </h2>

                        <p>
                            <strong>Name:</strong>
                            ${name}
                        </p>

                        <p>
                            <strong>Email:</strong>
                            ${email}
                        </p>

                        <hr />

                        <h3>
                            Message
                        </h3>

                        <p
                            style="
                                white-space: pre-wrap;
                            "
                        >
                            ${message}
                        </p>

                    </div>

                </body>
                </html>
            `,
        });

        // Resend returned an error
        if (error) {
            console.error(
                "================================="
            );

            console.error(
                "RESEND ERROR:",
                error
            );

            console.error(
                "================================="
            );

            return Response.json(
                {
                    success: false,
                    error:
                        error.message ||
                        "Resend failed to send the email.",
                },
                { status: 500 }
            );
        }

        // Email sent successfully
        console.log(
            "EMAIL SENT SUCCESSFULLY:",
            data
        );

        return Response.json(
            {
                success: true,
                message:
                    "Your message has been sent successfully.",
                data,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error(
            "================================="
        );

        console.error(
            "CONTACT API ERROR:",
            error
        );

        console.error(
            "================================="
        );

        return Response.json(
            {
                success: false,
                error:
                    error instanceof Error
                        ? error.message
                        : "Failed to send email.",
            },
            { status: 500 }
        );
    }
}

