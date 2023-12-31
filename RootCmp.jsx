const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { UserMsg } from "./cmps/UserMsg.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"
import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
import { MailDetails } from "./apps/mail/views/MailDetails.jsx"
import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"
import { Compose } from "./apps/mail/cmps/compose.jsx"




export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail/:mailFolder" element={<MailIndex />} />   
                <Route path="/mail/compose" element={<Compose />} />
                <Route path="/mail/:mailId" element={<MailDetails />} />
                <Route path="/note" element={<NoteIndex />} />
            </Routes>
            <UserMsg />
        </section>
    </Router>
}
