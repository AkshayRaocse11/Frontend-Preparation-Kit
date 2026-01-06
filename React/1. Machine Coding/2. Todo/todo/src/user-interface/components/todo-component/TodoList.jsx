import React , {useState} from 'react';
import "./TodoList.css";

export default function TodoList(){
	const [input,setInput]=useState('');
	const [todosList, setTodosList] = useState([]);
	
	const addTodo = () => {
		if(input.trim() === "") return;
		
		const item = {
			id: crypto.randomUUID(), //todosList.length + 1
			text: input.trim(),
			completed: false
		}
		setTodosList(prevTodos => [...prevTodos, item]);
		setInput("");
	}

	const markTodo = (id) => {
		setTodosList(prev =>
			prev.map(item =>
				item.id === id
					? { ...item, completed: !item.completed }
					: item
			)
		);
	};
	
	const removeTodo = (id) => {
		setTodosList(prev => prev.filter((item) => item.id !== id));
	}
	
	return <div className="TodoList">
			<div>
				<label>
					Todo :
					<input 
						type={"text"} 
						value={input} 
						onChange={(e) => setInput(e.target.value)} 
						placeholder="Enter a Todo "
					/>
					<button type="button" onClick={addTodo}>Add</button>
				</label>
			</div>
			{todosList.length === 0 && <p>No todos yet 🎉</p>}
			<ul>
				{todosList.map((item) => {
					return <li key={item.id}> <input type="checkbox" onChange={() => markTodo(item.id)} checked={item.completed} />
						<span className={`${item.completed ? "completed" : ""}`}> {item.text}  </span>
						<button type="button" onClick={() => removeTodo(item.id)}>Delete</button>
					</li>
				})}
			</ul>
	</div>
}