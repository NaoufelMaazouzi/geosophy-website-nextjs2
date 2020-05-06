require('dotenv').config();
import nodemailer from "nodemailer"

//const emailPass = "newworld28"

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        refreshToken: process.env.REFRESH_TOKEN,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
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
        from: from,
        to: 'naoufel.maazouzi@live.fr, naoufel_du_28@live.fr',
        subject: `Nouveau message de ${name} (provenant du site Geosophy)`,
        html: `<h4>Voici le message qui vous a été écrit: </h4> ${text} <br><br> 
               <h4>Informations sur la personne: </h4>
                    <ul>
                        <li><b>Nom:</b>  ${name} </li>
                        <li><b>Adresse mail:</b> ${mail}</li>
                        <li><b>Numéro de téléphone:</b> ${mobile}</li>
                        <li><b>Compagnie:</b> ${company} </li>
                    </ul>`,
        replyTo: from
    }


    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}