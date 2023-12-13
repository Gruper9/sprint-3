// mail service
import { storageService } from "../../../services/storage.service.js"
import { asyncStorageService } from "../../../services/async-storage.service.js"
import { utilService } from "../../../services/util.service.js"

const MAIL_KEY = 'mailDB'


export const mailService = {
    save,
    remove,
    get,
    query,
    getEmptyMail
}

_createMails()

function get(mailId) {
    return asyncStorageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return asyncStorageService.remove(MAIL_KEY, mailId)
}
function save(mail) {
    if (mail.id) {
        return asyncStorageService.put(MAIL_KEY, book)
    } else {
        return asyncStorageService.post(MAIL_KEY, book)
    }
}

function query() {
    return asyncStorageService.query(MAIL_KEY)
    }


function getEmptyMail() {
    return {

        subject: '',
        body: '',
        isRead: false,
        sentAt: null,
        removedAt: null,
        from: '',
        to: ''
    }
}

function _createMails() {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = [_createMail(), _createMail(), _createMail(), _createMail()]
        storageService.saveToStorage(MAIL_KEY, mails)

    }
}


function _createMail() {
    const mail = getEmptyMail()
    mail.id=utilService.makeId()
    return mail
}