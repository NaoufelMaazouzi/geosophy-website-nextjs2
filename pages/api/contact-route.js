import nodemailer from "nodemailer"

const emailPass = "newworld28"

const transporter = nodemailer.createTransport({
    host: "gmail",
    auth: {
        user: "naoufel.maazouzi@live.fr",
        pass: emailPass
    }
})

export default async (req, res) => {
    const { recipientMail, name, senderMail, mobile, company, content } = req.body

    if (senderMail === "" || name === "" || content === "" || recipientMail === "" || mobile === "" || company === "") {
        res.status(403).send("")
        return
    }

    const mailerRes = await mailer({ senderMail, name, text: content, recipientMail, mobile, company })
    res.send(mailerRes)
}

const mailer = ({ senderMail, name, text, recipientMail, mobile, company }) => {
    const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
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