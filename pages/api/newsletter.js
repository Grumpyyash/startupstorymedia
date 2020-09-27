import sgMail from "@sendgrid/mail";

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email } = req.body;

  const content = {
    to: "iamtechied@gmail.com",
    from: "dev-team@thetrendsight.com",
    subject: "New subscriber",
    html: `<div style="background-color:#e8505b; color:"#fff; text-align:center; padding:1rem">
        <img style="height:200px ;width:100%;" src="https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
    
        <h3>New Subscriber Details</h3>
        <p>Email: ${email}</p>
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
