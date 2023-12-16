// mail service
import { storageService } from "../../../services/storage.service.js"
import { asyncStorageService } from "../../../services/async-storage.service.js"
import { utilService } from "../../../services/util.service.js"

const MAIL_KEY = 'mailDB'
const folders=['Inbox','Sent','Trash','Starred','Drafts']

const logedInUser={
    email: 'gruper@test.lol',
    fullName: 'Hadar Gruper'
}

export const mailService = {
    save,
    remove,
    get,
    query,
    getEmptyMail,
    getDefaultFilter,
    getFolders,
    getCurrUserLogged
}
_createMails()

function getCurrUserLogged(){
    return logedInUser.email
}
function getFolders(){
    return folders
}

function getDefaultFilter() {
    return { txt: '' }
}

function get(mailId) {
    return asyncStorageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return asyncStorageService.remove(MAIL_KEY, mailId)
}
function save(mail) {
    if (mail.id) {
        return asyncStorageService.put(MAIL_KEY, mail)
    } else {
        return asyncStorageService.post(MAIL_KEY, mail)
    }
}


  function query(filterBy) {
    return asyncStorageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regExp.test(mail.subject))
            }    
            return mails
        })
}


function getEmptyMail() {
    return {
        subject: '',
        body: '',
        isRead: false,
        isStar: false,
        sentAt: Date.now(),
        removedAt: null,
        from: logedInUser.email,
        to: ''
    }
}

function _createMails() {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id:utilService.makeId(),
              subject: 'Welcome to Gmail',
              body: 'Hello! Welcome to Gmail. This is a sample email body text.',
              isRead: false,
              isStar: false,
              sentAt: Date.now(),
              removedAt: null,
              from: 'noreply@gmail.com',
              to: logedInUser.email
            },
            {
                id:utilService.makeId(),
              subject: 'Meeting Tomorrow',
              body: 'Hi there! Let\'s meet tomorrow at 2:00 PM in the conference room.',
              isRead: false,
              isStar: false,
              sentAt: Date.now() - 86400000, // 24 hours ago
              removedAt: null,
              from: 'colleague@example.com',
              to: logedInUser.email
            },
            {
                id:utilService.makeId(),
              subject: 'Your Shopping Cart',
              body: 'Your shopping cart items are waiting for you. Complete your purchase now!',
              isRead: false,
              isStar: false,
              sentAt: Date.now() - 172800000, // 48 hours ago
              removedAt: null,
              from: 'shopping@example.com',
              to: logedInUser.email
            },
            {
                id:utilService.makeId(),
              subject: 'Important Update',
              body: 'Please review the attached document for an important update.',
              isRead: false,
              isStar: false,
              sentAt: Date.now() - 259200000, // 72 hours ago
              removedAt: null,
              from: 'boss@example.com',
              to: logedInUser.email
            },
            {
                id:utilService.makeId(),
              subject: 'Feedback Request',
              body: 'We value your feedback. Please take a moment to share your thoughts with us.',
              isRead: false,
              isStar: false,
              sentAt: Date.now() - 345600000, // 96 hours ago
              removedAt: null,
              from: 'feedback@example.com',
              to: logedInUser.email
            }
          ]
          
          storageService.saveToStorage(MAIL_KEY, mails)
        }
    }


