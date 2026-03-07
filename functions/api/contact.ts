interface Env {
  RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  
  if (!env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "Configuration Error: Missing API Key" }), { status: 500 });
  }

  try {
    const data = await request.json() as any;
    const { name, email, phone, message, serviceType } = data;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: "Please fill out all required fields." }), { status: 400 });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), { status: 400 });
    }

    // Validate phone (at least 10 digits)
    const phoneDigits = phone.replace(/[^\d]/g, '');
    if (phoneDigits.length < 10) {
      return new Response(JSON.stringify({ error: "Invalid phone number. Please provide a 10-digit phone number." }), { status: 400 });
    }

    // 1. Email to the Business (Lead Notification)
    const bizResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "CSRS Leads <leads@roofovers.com>",
        to: ["info@roofovers.com"],
        subject: `New Lead: ${name} - ${serviceType}`,
        html: `
          <h2>New Roofing Estimate Request</h2>
          <p><strong>Customer Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service Interest:</strong> ${serviceType}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr />
          <p><small>This lead was generated from the contact form on roofovers.com</small></p>
        `,
      }),
    });

    // 2. Auto-reply to the Customer
    // We send this separately to ensure both go out even if one fails
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "CSRS Roofovers <info@roofovers.com>",
        to: [email],
        reply_to: "info@roofovers.com",
        subject: "We've received your request - CSRS Roofovers",
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to <strong>CSRS Roofovers</strong>. We have successfully received your request for a ${serviceType} estimate.</p>
            <p>A member of our team will review your information shortly. <strong>You will receive a call within 24 hours</strong> to discuss your project and schedule your free estimate.</p>
            <p>If you have any immediate questions, feel free to call us at (352) 242-5055.</p>
            <br />
            <p>Best Regards,</p>
            <p><strong>The CSRS Roofovers Team</strong><br />
            Clermont, FL 34711<br />
            (352) 242-5055<br />
            <a href="https://roofovers.com" style="color: #ff5722;">www.roofovers.com</a></p>
          </div>
        `,
      }),
    });

    if (bizResponse.ok) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      const errorData = await bizResponse.json() as any;
      return new Response(JSON.stringify({ error: errorData.message || "Email delivery failed" }), { status: bizResponse.status });
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
