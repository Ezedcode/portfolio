function handler(req, res) {
    let nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'dinog165@mail.com',
            pass: 'password',
        },
        secure: true,
    });

    const mailData = {
        form: 'dinog165@gmail.com',
        to: 'ezedeliogarcia@gmail.com',
        subject: `Message from ${req.body.name}`,
        text: req.body.message + "| Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent form: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    })

    res.status(200)

    console.log(req.body);
}

export default handler;