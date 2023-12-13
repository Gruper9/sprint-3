import { MailPreview } from "./MailPreview.jsx";


export function MailList({mails}) {
    return (
        <section className="mail-list">
            
            {mails && mails.map((mail) => (
                <div key={mail.id} className="mail-item">
                    <MailPreview mail={mail} />
                </div>
            ))
            }
        
        </section>
    )
}
