require('dotenv').config();
import nodemailer from "nodemailer"

//const emailPass = "newworld28"

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'maazouzi.naoufel@gmail.com',
        refreshToken: '1//04NX-VSysOvHsCgYIARAAGAQSNwF-L9IrnuuAivWVE5ktRUSXRvctt5Ec7yLupoZPdknF8XQDgDtso8Yx22jcTDv0qzNzt1LN3JY',
        clientId: '377420568569-r1iehgs5n76af1m71ps3m55gf17lqvk3.apps.googleusercontent.com',
        clientSecret: '8dPxc3qp3qmvowBS2DsVuprR'
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