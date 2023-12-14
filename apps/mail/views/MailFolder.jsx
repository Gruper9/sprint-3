import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailFolders() {
    
  
    const folders  = mailService.getFolders()



       if(!folders.length)return 
    return (
        <div className="folders flex column">
       { folders.map((folder)=><p key={folder}>{folder}</p>)}
        </div>
      )

    

}