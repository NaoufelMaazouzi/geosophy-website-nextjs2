import nodemailer from "nodemailer"

//const emailPass = "newworld28"

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: 'naoufel.maazouzi@live.fr',
        pass: 'newworld28'
    }
})

export default async (req, res) => {
    const { recipientMail, name, mail, formContent } = req.body
    console.log(name)

    const mailerRes = await mailer({ mail, name, text: formContent, recipientMail })
    res.send(mailerRes)
}

const mailer = ({ mail, name, text, recipientMail }) => {
    const from = name && mail ? `${name} <${mail}>` : `${name || mail}`
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `New message from ${from}`,
        text,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}