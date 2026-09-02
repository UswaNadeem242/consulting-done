// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const handler = async (event) => {
//     if (event.httpMethod !== "POST") {
//         return {
//             statusCode: 405,
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ error: "Method Not Allowed" }),
//         };
//     }

//     try {
//         const body = event.body ? JSON.parse(event.body) : {};
//         const { name, email, message } = body;

//         if (!name || !email || !message) {
//             return {
//                 statusCode: 400,
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     error: "Name, email and message are required.",
//                 }),
//             };
//         }

//         if (!process.env.RESEND_API_KEY) {
//             return {
//                 statusCode: 500,
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     error: "RESEND_API_KEY is not configured on Netlify.",
//                 }),
//             };
//         }

//         const { data, error } = await resend.emails.send({
//             from: " Mibk Consultancy <[EMAIL_ADDRESS]>",
//             to: ["mibkconsultancyltd@gmail.com"],
//             replyTo: email,
//             subject: `New Consultance Contact Request ${name}`,
//             html: `
//         <h2>Consultance Contact Request</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <h3>Message</h3>
//         <p>${message}</p>
//       `,
//         });

//         if (error) {
//             console.error("Resend Error:", error);
//             return {
//                 statusCode: 500,
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ error: error.message }),
//             };
//         }

//         return {
//             statusCode: 200,
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ success: true, data }),
//         };
//     } catch (error) {
//         console.error("Email Function Error:", error);
//         return {
//             statusCode: 500,
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ error: "Failed to send email." }),
//         };
//     }
// };



import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL is missing");
}

if (!supabaseKey) {
    throw new Error(
        "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY is missing"
    );
}

const supabase = createClient(
    supabaseUrl,
    supabaseKey
);

export async function POST(req) {
    try {
        const body = await req.json();

        const name = body?.name?.trim();
        const email = body?.email?.trim();
        const message = body?.message?.trim();

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    error: "Name, email and message are required.",
                },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    error: "Please enter a valid email address.",
                },
                { status: 400 }
            );
        }

        // --------------------------------
        // 1. Save data to Supabase
        // --------------------------------

        const { error: supabaseError } = await supabase
            .from("mibk_contact_form")
            .insert([
                {
                    name,
                    email,
                    message,
                },
            ]);

        if (supabaseError) {
            console.error(
                "Supabase Error:",
                supabaseError
            );

            return NextResponse.json(
                {
                    error:
                        "Failed to save your message. Please try again.",
                },
                { status: 500 }
            );
        }

        // --------------------------------
        // 2. Send email using Resend
        // --------------------------------

        const { error: resendError } = await resend.emails.send({
            from: "MIBK Website <info@mibkconsultancyltd.co.uk>",
            to: ["mibkconsultancyltd@gmail.com"],
            replyTo: email,
            subject: `New Consultation Request from ${name}`,

            html: `
    <!DOCTYPE html>
    <html>
      <body style="
        margin: 0;
        padding: 0;
        background-color: #f5f7fb;
        font-family: Arial, Helvetica, sans-serif;
      ">

        <div style="
          max-width: 600px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        ">

          <!-- Header -->
          <div style="
            background-color: #002866;
            padding: 25px 30px;
          ">
            <h1 style="
              margin: 0;
              color: #ffffff;
              font-size: 24px;
            ">
              New Consultation Request
            </h1>
          </div>

          <!-- Content -->
          <div style="
            padding: 30px;
            color: #333333;
          ">

            <p style="
              margin-top: 0;
              font-size: 16px;
            ">
              You have received a new consultation request
              through the MIBK Consultancy website.
            </p>

            <!-- Name -->
            <div style="
              margin-top: 25px;
              padding: 15px;
              background-color: #f8f9fc;
              border-radius: 6px;
            ">
              <strong>Name</strong>
              <p style="
                margin: 6px 0 0;
                font-size: 15px;
              ">
                ${name}
              </p>
            </div>

            <!-- Email -->
            <div style="
              margin-top: 15px;
              padding: 15px;
              background-color: #f8f9fc;
              border-radius: 6px;
            ">
              <strong>Email</strong>
              <p style="
                margin: 6px 0 0;
                font-size: 15px;
              ">
                ${email}
              </p>
            </div>

            <!-- Message -->
            <div style="
              margin-top: 15px;
              padding: 15px;
              background-color: #f8f9fc;
              border-radius: 6px;
            ">
              <strong>Message</strong>

              <p style="
                margin: 6px 0 0;
                font-size: 15px;
                line-height: 1.6;
                white-space: pre-wrap;
              ">
                ${message}
              </p>
            </div>

          </div>

          <!-- Footer -->
          <div style="
            padding: 20px 30px;
            background-color: #f1f3f7;
            color: #666666;
            font-size: 13px;
          ">
            <p style="margin: 0;">
              This message was submitted through the
              MIBK Consultancy contact form.
            </p>

            <p style="margin: 8px 0 0;">
              Please reply directly to this email to contact the sender.
            </p>
          </div>

        </div>

      </body>
    </html>
  `,
        });

        if (resendError) {
            console.error(
                "Resend Error:",
                resendError
            );

            return NextResponse.json(
                {
                    error:
                        "Your message was saved, but the email could not be sent.",
                },
                { status: 500 }
            );
        }

        // --------------------------------
        // Success
        // --------------------------------

        return NextResponse.json(
            {
                success: true,
                message:
                    "Your message has been sent successfully.",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(
            "Contact API Error:",
            error
        );

        return NextResponse.json(
            {
                error:
                    "Something went wrong. Please try again later.",
            },
            { status: 500 }
        );
    }
}