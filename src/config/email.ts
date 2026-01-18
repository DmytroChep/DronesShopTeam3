import {createTransport} from "nodemailer"
import { ENV } from "./env"

const transporter = createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: ENV.EMAILADRESS,
        pass: ENV.EMAILPASSWORD
    }
})
console.log([ENV.EMAILADRESS, ENV.EMAILPASSWORD])

export async function sendEmail(subject: string, emailHtml: string, to: string) {
    try{
        await transporter.sendMail({
            from: ENV.EMAILADRESS,
            to: to,
            subject: subject,
            html: emailHtml
        })
        return "email sent!"
    } catch(error){
        console.log(error)
        return error
    }
}

// sendEmail("hi! Here is your auth code:", `
                // <div style="display: block; text-align: center; font-family: sans-serif;">
                //     <p>your code is:</p>
                //     <h1 style="font-size: 32px; color: #333;">123321</h1>
                //     <hr style="width: 50%; margin: 20px auto;">
                //     <h4 style="color: #666;">have a good day!</h4>
                // </div>`, "shahblet1234@gmail.com")