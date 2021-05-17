import dotenv from 'dotenv'
import { crearEnviadorEmails } from './enviadorEmails.js'

dotenv.config()

let service = process.env.SERVICE
let user = process.env.USER
let pass = process.env.PASS

let texto = "Nombre del alumno: Tomás Fernández\n"
         + "Email del alumno: fernandez.abrevaya@gmail.com\n"
         + "Elección de día y horario: Viernes a las 19 h\n"
         + "Frecuencia de escritura: Avanzada\n"
         + "Género de escritura predilecto: Ficción\n"
         + "Celular: 11-1111-1111\n"

const enviador = crearEnviadorEmails()
enviador.enviar(service, user, pass, texto)
