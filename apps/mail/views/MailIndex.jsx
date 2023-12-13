import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
import { MailFilter } from "../cmps/MailFilter.jsx"

const { Link } = ReactRouterDOM
const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

    useEffect(() => {
        loadMails()
        return () => {
            console.log('Unmounted')
        }
    }, [filterBy])



    function loadMails() {
        mailService.query(filterBy)
            .then((mails) => setMails(mails))
            .catch((err) => console.log('err:', err))
    }
    
    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    if (mails) {
        return (
            <section className="mail-index">
                {console.log(mails)}
                <h1>Welcome to Gruper Mail! (Gmail 2.0)</h1>
                <MailFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                <button><Link to="/mail/compose">Compose</Link></button>
                <MailList mails={mails} loadMails={loadMails} />
            </section>
        )
    } else {
        return (<span className="loader"></span>)
    }
}
