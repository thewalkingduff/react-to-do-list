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
            text: 'build a to-do app',
            isCompleted: false
        },
        {
            text: 'lay on inversion table',
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text: text, isCompleted: false }]
        setTodos(newTodos)
    }

    const removeTodo = index => {
        let tempTodos = [...todos]
        tempTodos.splice(index, 1)
        setTodos(tempTodos)
    }

    return (
        <div className='app'>
            {todos.map((todo, i) =>
                <Todo todo={todo} index={i} key={i} remove={removeTodo} />
            )}
            <ToDoForm addTodo={addTodo} />
        </div>

    )

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

