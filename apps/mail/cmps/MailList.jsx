
import { MailPreview } from "./MailPreview.jsx";

export function MailList({mails}) {
 

    return (
        <section className="mail-list">
            <ul>
            {mails && mails.map((mail) => (
                <li key={mail.id} className="mail-item" >
                    <MailPreview mail={mail} />
                </li>
            ))
            }
        </ul>
        </section>
    )
}
