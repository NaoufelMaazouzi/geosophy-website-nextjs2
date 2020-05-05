import nodemailer from "nodemailer"

//const emailPass = "newworld28"

const transporter = nodemailer.createTransport({
    host: "SMTP.office365.com", // hostname
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

const message = {
    from: 'naou@live.fr', // Sender address
    to: 'naoufel.maazouzi@live.fr',         // List of recipients
    subject: 'Nouveau message du site Geosophy', // Subject line
    text: 'Voici le text du mail' // Plain text body
};

transporter.sendMail(message, function (err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }
});