import sgMail from "@sendgrid/mail";

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, company, number, message } = req.body;

  const content = {
    to: "itsjashn@live.com",
    from: "dev-team@thetrendsight.com",
    subject: "New form submission",
    html: `<div style="background-color:#e8505b; color:"#fff; text-align:center; padding:1rem">
        <img style="height:200px ;width:100%;" src="https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
    
        <h3>New contact Details</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Company; ${company}</p>
        <p>Number: ${number}</p>
        <br/>
        <p>Message: ${message}</p>
        </div>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent Successfully");
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).send("Can't send message. Please try again.");
  }
};
