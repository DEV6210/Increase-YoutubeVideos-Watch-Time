import React, { useState } from 'react'
import './App.css'

function App() {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <div className="">
        <div className='nav header'>
          <input
            type="text"
            style={{borderRadius:'5px',width:'300px'}}
            value={newItem}
            placeholder='Enter Youtube Video Key'
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
          style={{marginLeft:'5px',background:'white',border:'none',borderRadius:'5px'}}
           onClick={addItem}>Add Video Key</button>
        </div>
        <div className="card-container m-3">
          {items.map((movie, index) => (
            <div className="card" key={movie.id}>
              <iframe
                width=""
                height=""
                src={`https://www.youtube.com/embed/${items[index]}?autoplay=1&mute=1`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
