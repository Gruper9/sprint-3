
import { mailService } from "../services/mail.service.js";
import { MailPreview } from "./MailPreview.jsx";

export function MailList({ mails, loadMails }) {

    function onRemoveMail(mailId) {
        mailService.remove(mailId)
            .then(loadMails)
            .catch(err => console.log('err: ', err))

    }
    
    function setReadMail(mail) {
        mail.isRead = true
        mailService.save(mail)
    }

    return (
        <section className="mail-list">
            <ul>
                {mails && mails.map((mail) => (
                    <li key={mail.id} className="mail-item" >
                        <MailPreview mail={mail} onRemoveMail={onRemoveMail} setReadMail={setReadMail} />
                    </li>
                ))
                }
            </ul>
        </section>
    )
}
