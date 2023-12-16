import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailFolders() {
    
  
    const folders  = mailService.getFolders()



       if(!folders.length)return 
    return (
        <div className="mail-folder flex column">
       { folders.map((folder)=><a href={`#/${folder}`} key={folder}>{folder}</a>)}
        </div>
      )

    

}