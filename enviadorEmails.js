import nodemailer from 'nodemailer'

function crearEnviadorEmails(service, user, pass) {

    return {
        enviar: async (texto) => {
            let transporter = nodemailer.createTransport({
                service: service,
                auth: {
                    user: user,
                    pass: pass
                }
            })

            try {
                await transporter.sendMail({
                    from: 'escritura.poiesis@gmail.com',
                    to: 'escritura.poiesis@gmail.com',
                    subject: '¡Enhorabuena! Nuevx alumnx',
                    // 'Contenido del formulario enviado por el/la nuevx alumnx:'
                    text: texto
                })
                console.log("Email enviado")
            }
            catch (error) {
                console.log(error)
            }
        }
    }
}

export { crearEnviadorEmails }

