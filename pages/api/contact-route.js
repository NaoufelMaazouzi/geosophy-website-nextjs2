import nodemailer from "nodemailer"

const emailPass = "newworld28"

const transporter = nodemailer.createTransport({
    host: "smtp.ionos.fr",
    port: 25,
    auth: {
        user: "contact@naoufelmaazouzi.fr",
        pass: emailPass
    }
})

export default async (req, res) => {
    const { recipientMail, name, email, message, mobile, company } = req.body

    const mailerRes = await mailer({ email, name, text: message, recipientMail, mobile, company })
    res.send(mailerRes)
}

const mailer = ({ email, name, text, recipientMail, mobile, company }) => {
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `New message from ${from}`,
        text,
        mobile,
        company,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}