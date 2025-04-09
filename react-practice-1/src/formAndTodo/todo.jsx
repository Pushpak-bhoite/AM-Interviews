import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [input, setInput] = useState({});
  const [items, setItems] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searches, setSearches] = useState([]);
  function handleInput(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isEdit) {
      setItems((prev) => {
        return prev?.map((item) => {
          if (item.id === input.id) {
            return { ...item, name: input.name, age: input.age };
          } else {
            return item;
          }
        });
      });
      setInput({ name: '', age: '' });
      setEdit(false);
    } else {
      setItems((prev) => [
        ...prev,
        { id: Date.now(), name: input.name, age: input.age },
      ]);
      setInput({ name: '', age: '' });
    }
  }

  function handleDelete(index) {
    setItems((prev) => prev.filter((item) => item.id !== index));
  }
  function update(item) {
    setInput({ name: item.name, age: item.age, id: item.id });
    setEdit(true);
  }

  function handleSearch(e) {
    setSearchInput(e.target.value);
    setSearches(
      items.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.age.includes(e.target.value)
      )
    );
  }

  console.log('input-->', input);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input name="name" onChange={handleInput} value={input.name} />
        <label htmlFor="">Age</label>
        <input name="age" onChange={handleInput} value={input.age} />
        <button type="submit">{isEdit ? 'Update' : 'add'}</button>
      </form>
      <label htmlFor="">Search</label>
      <input type="text" value={searchInput} onChange={handleSearch} />
      <div>
        {!searchInput && (
          <ul>
            {items.map((item, index) => {
              return (
                <li key={item.id}>
                  <span>{parseInt(index) + 1 + ' '}</span>
                  {item.name} <span>{item.age}</span>
                  <button onClick={() => update(item)}>update</button>
                  <button onClick={() => handleDelete(item.id)}>delete</button>
                </li>
              );
            })}
          </ul>
        )}

        {searchInput && (
          <ul>
            {!searches[0] ? (
              <div>No resutlt </div>
            ) : (
              searches.map((item, index) => {
                return (
                  <li key={item.id}>
                    {item.name} <span>{item.age}</span>
                    <button onClick={() => update(item)}>update</button>
                    <button onClick={() => handleDelete(item.id)}>
                      delete
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
