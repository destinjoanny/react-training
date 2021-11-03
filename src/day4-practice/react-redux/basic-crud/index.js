import React, { useState } from "react";

export default function TodoList(){
    const [todos, setTodos] = useState([])
    
    const addTask = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,{
                id: todos.length + 1,
                task: taskValue
        }])
        setTaskValue('')
    }

    return(
        <div>
            <form onSubmit={addTask}>
                <input type="text" placeholder="add your todos"
                    value={taskValue} onChange={e => setTaskValue(e.target.value)}>
                </input>
                <button type="submit">
                    Add
                </button>
            </form>

            <hr></hr>

            <div>
                {todos.map(item => (
                    <ul></ul>
                ))}
            </div>
        </div>
    )
}