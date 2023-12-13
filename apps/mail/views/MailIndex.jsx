import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)


    useEffect(() => {
        loadMails()
        return () => {
            console.log('Unmounted')
        }
    }, [])

    function loadMails() {
        mailService.query()
            .then((mails) => setMails(mails))
            .catch((err) => console.log('err:', err))
    }

    if (mails) {
        return (
            <section className="mail-index">
                {console.log(mails)}
                <h1>Welcome to Gruper Mail! (Gmail 2.0)</h1>
                <MailList mails={mails} />
            </section>
        )
    } else {
        return (<p>Loading books...</p>)
    }
}
