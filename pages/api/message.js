import nodemailer from 'nodemailer'

export default function handler(req, res) {
    let {name,email,message} = JSON.parse(req.body);

    if(name.trim() == '' || email.trim() == '' || message.trim() == ''){
        return res.status(400).json({
            ok: false,
            error: 'Debe completar todos los campos'
        })
    }

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.PASS}`, 
        },
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
