import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./Todoo.css";

const ItemType = "TODO_ITEM";

function TodoItem({ item, index, moveItem }) {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <li ref={(node) => drop(ref(node))} className="todo-item">
      {item}
    </li>
  );
}

function Todoo() {
  const [Todo, setTodo] = useState("");
  const [List, setList] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...List, Todo]);
    setTodo("");
  };

  const moveItem = (fromIndex, toIndex) => {
    const updatedList = [...List];
    const [movedItem] = updatedList.splice(fromIndex, 1);
    updatedList.splice(toIndex, 0, movedItem);
    setList(updatedList);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="todo-container">
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            name="Todo"
            id="Todo"
            value={Todo}
            onChange={handleChange}
            placeholder="Enter a task"
            className="todo-input"
          />
          <button type="submit" className="todo-button">Add Task</button>
        </form>
        <ul className="todo-list">
          {List.map((item, index) => (
            <TodoItem key={index} item={item} index={index} moveItem={moveItem} />
          ))}
        </ul>
      </div>
    </DndProvider>
  );
}

export default Todoo;
