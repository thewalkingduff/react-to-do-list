function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'work on website',
            isCompleted: false
        },
        {
            text: 'read AWS Whitepapers',
            isCompleted: false
        },
        {
            text: 'build todo app',
            isCompleted: false
        },
        {
            text: 'lay on inversion table',
            isCompleted: false
        }
    ]);
    const [value, setValue] = React.useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return
        const newTodos = [...todos, { text: value, isCompleted: false }]
        console.log(newTodos)
        setTodos(newTodos)
        setValue('')

    }



    return (<>
        {todos.map((todo, i) =>
            <div className="todo" key={i}>{todo.text}</div>
        )}
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='input'
                value={value}
                placeholder="Add To-do :"
                onChange={e => setValue(e.target.value)}
            />
        </form>

    </>)

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

