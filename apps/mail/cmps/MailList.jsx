
import { mailService } from "../services/mail.service.js";
import { MailPreview } from "./MailPreview.jsx";

const { useNavigate } = ReactRouterDOM

export function MailList({ mails, loadMails }) {

   

    const navigate = useNavigate()

    function onRemoveMail(mailId) {
        mailService.remove(mailId)
            .then(loadMails)
            .catch(err => console.log('err: ', err))

    }

    function setReadMail(mail) {
        mail.isRead = true
        mailService.save(mail).then(() => navigate(`/mail/${mail.id}`))
    }
    function mailReadUnread(mail){
        mail.isRead =!mail.isRead 
        mailService.save(mail)
    }

    function setMailStar(mail) {
        mail.isStar =!mail.isStar 
        mailService.save(mail)
    }



    return (
        <section className="mail-list">

            {mails && mails.map((mail) => (
                    <MailPreview key={mail.id} mail={mail} mailReadUnread={mailReadUnread} onRemoveMail={onRemoveMail} setReadMail={setReadMail}  setMailStar={setMailStar}/>
            ))
            }
        </section>
    )
}