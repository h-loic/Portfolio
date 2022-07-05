const express = require("express")
const app = express()
require("dotenv").config()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/send_mail", cors(), async (req, res) => {
    let mail = req.body;
	const transport = nodemailer.createTransport({
        service: 'gmail',
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS
		}
	})

	await transport.sendMail({
		from: "hugloic68480@gmail.com",
		to: "h-loic@orange.fr",
		subject: "mail",
		html: `<div>
            <h3>`+ mail.name +` t'as envoyé un message bg</h3><br/>
            <p>`+ mail.mailContent+`</p><br/>
            <p>son mail : `+ mail.mail+`</p>
            </div>`
	}).then(()=> res.send({status: "ok"}))
})

app.listen(4000, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server running on 4000`);
  });