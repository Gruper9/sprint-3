import { mailService } from "../services/mail.service.js"

const { useState,useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)


    useEffect(() => {
        loadMails()
        return () => {
            console.log('Unmounted')
        }
    }, [])

function loadMails(){
    mailService.query()
    .then((mails) => setMails(mails))
    .catch((err) => console.log('err:', err))
}

if(mails){
    return (
    <section className="mail-index">
        {console.log(mails)}


    </section>
    )
}else {
    return (<p>Loading books...</p>)
}
}
