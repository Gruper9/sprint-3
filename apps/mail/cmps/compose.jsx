
import { mailService } from "../services/mail.service.js"
const { useNavigate } = ReactRouterDOM
const { useState} = React

export function Compose(){
    const navigate = useNavigate()
    const [mailToEdit, setmailToEdit] = useState(mailService.getEmptyMail())

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
                case 'email':
                    value=value.toString()
                    break
            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }

        setmailToEdit(prevMail => ({ ...prevMail, [field]: value ,from: mailService.getCurrUserLogged()}))
    }
    function onSaveMail(ev) {
        ev.preventDefault()
        mailService.save(mailToEdit)
        .then(() => {
            
            navigate('/mail')
        })
        .catch((err)=> {
            console.log(err);
            
        })
    }
    return (
        <form onSubmit={onSaveMail}>
        <label htmlFor="to">to: </label>
        <input onChange={handleChange} value={mailToEdit.to} type="email" name="to" id="to" />

        <label htmlFor="subject">subject: </label>
        <input onChange={handleChange} value={mailToEdit.subject} type="text" name="subject" id="subject" />

        <textarea
  onChange={handleChange}
  value={mailToEdit.body}
  name="body"
  id="body"
  rows="5" // You can adjust the number of rows as needed
></textarea>

       
        <button disabled={!mailToEdit.subject}>Save</button>
    </form>
    )
}