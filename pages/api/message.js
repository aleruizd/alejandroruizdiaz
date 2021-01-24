import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const OAuth2 = google.auth.OAuth2;

export default async function handler(req, res) {
    let {name,email,message} = JSON.parse(req.body);

    if(name.trim() == '' || email.trim() == '' || message.trim() == ''){
        return res.status(400).json({
            ok: false,
            error: 'Debe completar todos los campos'
        })
    }

    const oauth2Client = new OAuth2(
        `${process.env.CLIENT_ID}`,
        `${process.env.CLIENT_SECRET}`,
        "https://developers.google.com/oauthplayground"
    )

    oauth2Client.setCredentials({
        refresh_token:`${process.env.REFRESH_TOKE}` 
    });

    const accessToken = await oauth2Client.getAccessToken();

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
            type: 'OAuth2',
            user: `${process.env.EMAIL}`,
            clientId: `${process.env.CLIENT_ID}`,
            clientSecret: `${process.env.CLIENT_SECRET}`,
            refreshToken: `${process.env.REFRESH_TOKEN}`,
            accessToken
        }
    })

    let info = {
        from: `${email}`, 
        to: `${process.env.EMAIL}`,
        subject: `Mensaje de ${name} desde tu portfolio`,
        html: `
            <p><b>Nombre:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Mensaje:</b> ${message}</p>
        `
    }

    transporter.sendMail(info,(error, info) => {
        if(error) {
            res.status(500).json({
                ok: false,
                error: error.message
            });
        } else {
            console.log('Mensaje enviado');
            res.status(200).json({ok: true});
        }
    })
}
