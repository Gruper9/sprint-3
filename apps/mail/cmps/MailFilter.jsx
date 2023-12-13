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
        const field = target.name 
        let value = target.value 

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

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value}))
    }


    const { txt, minPrice } = filterByToEdit

    return (
        <section className="mail-filter">
           
            <form onSubmit={onSetFilterBy} >
                <input value={txt} onChange={handleChange} type="text"  name="txt" placeholder="search in your inbox"/>
    
            </form>
        </section>
    )
}