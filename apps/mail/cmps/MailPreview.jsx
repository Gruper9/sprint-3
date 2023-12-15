const {useState}=React
export function MailPreview({ mail, onRemoveMail, setReadMail, setMailStar,mailReadUnread }) {
    const [star, setStar] = useState(mail.isStar)
    const [mailRead, setMailRead] = useState(mail.isRead)
    const dynclass = mail.isRead === true ? 'read' : 'unread'

    function updateMailStar(mail) {
        setStar(!mail.isStar)
        setMailStar(mail)
    }
    function updateMailRead(mail) {
        setMailRead(!mail.isRead)
        mailReadUnread(mail)
    }

    return (
        <section className={`mail-preview ${dynclass}`}>

            {star ?<i className="fa-solid fa-star" onClick={() => updateMailStar(mail)} ></i> : <i className="fa-regular fa-star" onClick={() => updateMailStar(mail)}></i>}
        <div className="mail-info" onClick={() => setReadMail(mail)}>
            <span className="" >{mail.from}</span>
            <span className="mail-subject" >{mail.subject}</span>
            <span className="mail-body" >{mail.body}</span>
            </div>
            {mailRead ?<i className="fa-regular fa-envelope-open " onClick={() => updateMailRead(mail)} ></i> : <i className="fa-regular fa-envelope " onClick={() => updateMailRead(mail)}></i>}
           
    
             <button onClick={() => onRemoveMail(mail.id)}>x</button>
        </section>
    )

}
