const {useState}=React
export function MailPreview({ mail, onRemoveMail, setReadMail, setMailStar }) {
    const [star, setStar] = useState(mail.isStar)
    const dynclass = mail.isRead === true ? 'read' : 'unread'

    function updateMailStar(mail) {
        setStar(!mail.isStar)
        setMailStar(mail)
    }

    return (
        <section className={`mail-preview ${dynclass}`}>

            {star ?<i className="fa-solid fa-star" onClick={() => updateMailStar(mail)} ></i> : <i className="fa-regular fa-star" onClick={() => updateMailStar(mail)}></i>}
        <div onClick={() => setReadMail(mail)}>
            <span >{mail.subject}</span>
            </div>
            {!mail.isRead && <i className="fa-regular fa-envelope"></i>}  
            {mail.isRead && <i className="fa-regular fa-envelope-open"></i>}
             <button onClick={() => onRemoveMail(mail.id)}>x</button>
        </section>
    )

}
