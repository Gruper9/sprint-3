const { useNavigate } = ReactRouterDOM

export function MailPreview({mail}){
    const navigate = useNavigate()
    const dynclass= mail.isRead === true ? 'read' : 'unread'
  
    // function openMail() {
    //     setMailIsRead(prevMail=>({...prevMail, isRead: true}))
    //     mailService.save(mailIsRead)
    //     navigate(`/mail/${mail.id}`)
    // }

    return(
     <section className={`mail-preview ${dynclass}`}>
           <span onClick={()=>navigate(`/mail/${mail.id}`)}>{mail.subject}</span> 
        </section>
    )

}

