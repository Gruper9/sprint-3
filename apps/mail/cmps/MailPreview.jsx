const { useNavigate } = ReactRouterDOM

export function MailPreview({ mail, onRemoveMail, setReadMail }) {
    const navigate = useNavigate()
    const dynclass = mail.isRead === true ? 'read' : 'unread'


    function onMailClicked(mail) {
        setReadMail(mail)
        navigate(`/mail/${mail.id}`)
    }

    return (
        <section className={`mail-preview ${dynclass}`}>
            <span onClick={() => onMailClicked(mail)}>{mail.subject}</span>
            {!mail.isRead && <i class="fa-regular fa-envelope"></i>}  
            {mail.isRead && <i class="fa-regular fa-envelope-open"></i>}
             <button onClick={() => onRemoveMail(mail.id)}>x</button>
        </section>
    )

}

