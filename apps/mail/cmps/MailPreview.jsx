
export function MailPreview({ mail, onRemoveMail, setReadMail }) {

    const dynclass = mail.isRead === true ? 'read' : 'unread'



    return (
        <section className={`mail-preview ${dynclass}`}>
            <span onClick={() => setReadMail(mail)}>{mail.subject}</span>

            {!mail.isRead && <i className="fa-regular fa-envelope"></i>}  
            {mail.isRead && <i className="fa-regular fa-envelope-open"></i>}
             <button onClick={() => onRemoveMail(mail.id)}>x</button>
        </section>
    )

}


