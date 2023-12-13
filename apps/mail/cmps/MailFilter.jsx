const { useState, useEffect } = React


export function MailFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function onSetFilterBy(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    function handleChange(event) {
        const target = event.target
        const field = target.name //txt / minPrice
        let value = target.value // always str

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break

            case 'checkbox':
                value = target.checked
                break

            default:
                break
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }


    const { txt, minPrice } = filterByToEdit

    return (
        <section className="mail-filter">
            <h2>Filter Your mails</h2>
            <form onSubmit={onSetFilterBy} >
                <label htmlFor="txt">search: </label>
                <input value={txt} onChange={handleChange} type="text"  name="txt" />
    
            </form>
        </section>
    )
}