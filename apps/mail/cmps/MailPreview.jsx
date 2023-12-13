

export function MailPreview({mail}){
    const dynclass= mail.isRead === true ? 'read' : 'unread'
 
    return(
     <section className={`mail-preview ${dynclass}`}>
           <a href={`#/mail/${mail.id}`}>{mail.subject}</a> 
        </section>
    )
    



}

