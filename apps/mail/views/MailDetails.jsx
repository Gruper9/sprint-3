
import { mailService } from "../services/mail.service.js"
import { MailFolders } from "./MailFolder.jsx"

const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

export function MailDetails() {
    const params = useParams()
    const navigate = useNavigate()

    const [mailToShow, setmailToShow] = useState(mailService.getEmptyMail())

    useEffect(() => {
        loadMail()
    }, [params.mailId])


    function loadMail() {
        mailService.get(params.mailId)
            .then(mail => setmailToShow(mail))
            .catch(err => {
                console.log('err:', err)
                navigate('/')
            })
    }
    if (mailToShow.subject){
    return (
        <section className="mail-details flex">
            <MailFolders />
            <div className="">
              {!mailToShow.isRead && <i className="fa-regular fa-envelope"></i>}  
            {mailToShow.isRead && <i className="fa-regular fa-envelope-open"></i>}
            <h2>{mailToShow.subject}</h2>
            <p>{mailToShow.body}</p>
            <h4>from: {mailToShow.from}</h4>
            <button onClick={() => navigate('/mail')}>back</button>
            </div>
        </section>
    )}else {
        return (<span className="loader"></span>)
    }

}