import { MailPreview } from "./MailPreview.jsx";

const { useState } = React
const { useNavigate } = ReactRouterDOM

export function MailPreview({ mail }) {
    const [mailIsRead, setMailIsRead] = useState(mail)
    const navigate = useNavigate()

    function openMail() {
        setMailIsRead(prevMail=>({...prevMail, isRead: true}))
        mailService.save(mailIsRead)
        navigate(`/mail/${mail.id}`)
    }

    const dynclass = mail.isRead === true ? 'read' : 'unread'
    
    return (
        <section className={`mail-preview ${dynclass}`}>
            <span onClick={openMail}>{mail.subject}</span>
        </section>
    )

}

