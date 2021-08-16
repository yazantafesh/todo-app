import React,{useState,useContext} from 'react';
import { ListContext } from '../../context/listContext';
function TodoForm (props) {
  const listContext = useContext(ListContext);

  const [state,setState] = useState({ item: {} });
  function handleInputChange(e){
    setState({ item: {...state.item, [e.target.name]: e.target.value } });
  };

  function handleSubmit(e){
    e.preventDefault();
    e.target.reset();
    listContext.addItem(state.item)
    // props.handleSubmit(state.item);
    const item = {};
    setState({item});
  };


    return (
      <>
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <button>Add Item</button>
        </form>
      </>
    );
  }


export default TodoForm;
