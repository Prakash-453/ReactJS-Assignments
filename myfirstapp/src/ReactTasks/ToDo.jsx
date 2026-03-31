import { useState } from "react";

function Todo() {
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

  const handleDragStart = (event, index) => {
    console.log("Dragging item index:", index); // Logs the index being dragged
    event.dataTransfer.setData("draggedItemIndex", index);
  };

  const handleDrop = (event, dropIndex) => {
    const draggedIndex = event.dataTransfer.getData("draggedItemIndex");
    if (draggedIndex === null) return;

    console.log("Dragged index:", draggedIndex); // Logs the index of the dragged item
    console.log("Drop index:", dropIndex);       // Logs the index where the item is dropped

    const updatedList = [...List];
    const [draggedItem] = updatedList.splice(draggedIndex, 1);
    updatedList.splice(dropIndex, 0, draggedItem);
    
    console.log("Updated list:", updatedList);   // Logs the reordered list
    setList(updatedList);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Todo"
          id="Todo"
          value={Todo}
          onChange={handleChange}
        />
        <input type="submit" value="Add Task" />
      </form>
      <ul>
        {List.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, index)}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "5px",
              cursor: "move",
              backgroundColor: "#f9f9f9",
              borderRadius: "5px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
