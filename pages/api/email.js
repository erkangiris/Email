import nodemailer from 'nodemailer';



export default function handler(req, res) {
  console.log(req.body.email)
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "erkangiris",
      pass: "eudrmbbdfbxdxssz",
    }
  });
  var text = 'Hello from \n\n' + req.body.user_name;
  var mailOptions = {
    from: 'erkangiris@gmail.com', // sender address
    to: 'erkangiris@gmail.com', // list of receivers
    subject: 'Appointment Email Example', // Subject line
    text: text,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Appointment</title>
        </head>
        <body>
          <div>
            <img src="http://evokebeautysalon1.herokuapp.com/main/img/logo.png" alt="" width="160" />
            <h1>${req.body.email}</h1>
            <p>Thank you for your appointment.</p>
            <p>Here is summery:</p>
            <p>Name: James Falcon</p>
            <p>Date: Feb 2, 2017</p>
            <p>Package: Hair Cut</p>
            <p>Arrival time: 4:30 PM</p>
          </div>
        </body>
      </html>
`
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({ yo: 'error' });
    } else {
      console.log('Message sent: ' + info.response);
      res.json({ yo: info.response });
    };
  })
}