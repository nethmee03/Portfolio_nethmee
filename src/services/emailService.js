// Email service using EmailJS for contact form
// You'll need to set up EmailJS account and get your credentials

export const sendEmail = async (formData) => {
  try {
    // Method 1: Using EmailJS (Recommended)
    // First, you need to:
    // 1. Go to https://www.emailjs.com/
    // 2. Create a free account
    // 3. Create an email service (Gmail, Outlook, etc.)
    // 4. Create an email template
    // 5. Get your Service ID, Template ID, and Public Key
    
    const emailData = {
      service_id: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      template_id: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      user_id: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'nethmeemudannayake@gmail.com'
      }
    };

    // For now, we'll use the mailto method as a fallback
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.open(`mailto:nethmeemudannayake@gmail.com?subject=${subject}&body=${body}`);
    
    return { success: true, message: 'Email client opened successfully' };
    
  } catch (error) {
    console.error('Email service error:', error);
    throw new Error('Failed to send email');
  }
};

// Alternative method using Formspree (easier setup)
export const sendEmailFormspree = async (formData) => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _replyto: formData.email,
        _subject: `Portfolio Contact: ${formData.subject}`
      })
    });

    if (response.ok) {
      return { success: true, message: 'Message sent successfully!' };
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Formspree error:', error);
    throw new Error('Failed to send email');
  }
};



