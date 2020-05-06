require('dotenv').config();
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
    const { name, mail, content, mobile, company } = req.body


    const mailerRes = await mailer({ mail, name, text: content, mobile, company })
    res.send(mailerRes)
}


const mailer = ({ mail, name, text, mobile, company }) => {
    const from = name && mail ? `${name} <${mail}>` : `${name || mail}`


    const message = {
        sender: from,
        to: 'naoufel.maazouzi@live.fr, naoufel_du_28@live.fr',
        subject: `Nouveau message de ${name} (provenant du site Geosophy)`,
        html: '<h4>Voici le message qui vous a été écrit: </h4>' + text + '<br>' + '<br><h4>Informations sur la personne: </h4><ul><li>Nom: ' + name + '</li><li>Adresse mail: ' + mail + '</li><li>Numéro de téléphone: ' + mobile + '</li><li>Companie: ' + company + '</li></ul>',
        replyTo: from
    }


    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}