import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "ea643b6a8180b1",
        pass: "5d7043f2600810"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Paulo Sérgio <036paulo@gmail.com>',
            subject,
            html: body,

        });
    };
}