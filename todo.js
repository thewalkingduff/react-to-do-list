function Todo({ todo, index, remove }) {
    function handle() {
        remove(index)
    }

    return (
        <div className="todo" >
            <button type='button' onClick={handle}>X</button>
            {todo.text}
        </div>
    )
}