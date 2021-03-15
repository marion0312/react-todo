import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if ( !title ) {
            alert('Please add a text!')
            return
        }

        onAdd({title, day, reminder})
        setTitle('')
        setDay('')
        setReminder(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Day &amp; Time: </label>
                <input type="text" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>Reminder: </label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Add Task" className="btn btn-block"/>{
        }
        </form>
    )
}

export default AddTask
