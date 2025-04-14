// 1st round:
// Write a program where user can perform operations add item, show list, delete, search and filter 
// What i couldn't make is Exceptional Handling, JSX full form, what is event driven architecture.
// what asked - controlled uncontrolled, how can you add style, redux, 
// Exceptional handling.
// What are controlled uncontrolled inputs.
// What is jsx.
// what is virtual DOM.
// Explain event driven nature of react.
// What are the ways you can add css in react.
// What is redux. Whu you use it.
// How can you make http request from frontend to backend.
// In backend what do you use for authentication.
// WAP where user can perform operations add item, show list, update, delete, search and filter.
// does jsx helps to avoids cyber attack.

//  2nd round:
// diff betn flex model and box model.
// can you use flex and change position of and element. (up,down,left,right). - in normal HTML & css
// const obj = [{type:'number', value:1}, {type:'string', value:'ram'}, {type:'number', value:3}]
// filter elements which has property 'type' value 'number' .
// const obj1 = [{key:1, value:1}, {key:2, value:'ram'}, {key:1, value:3}, {key:'boolean', value: true}]
// unique objects having key's value unique. o/p => [{key:1, value:1}, {key:1, value:3}]
// They gave me api to call it in react and render data in table format. api:- https://jsonplaceholder.typicode.com/users





import React, { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import React from 'react';
import { useState } from 'react';

export default function App() {
  const [items, setItem] = useState([]);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  const [searchItems, setSearchItems] = useState([]);

  function addItem(e) {
    console.log(value);
    e.preventDefault();
    setItem((prev) => [...prev, value]);
    setValue('');
  }

  function changeInput(e) {
    setValue(e.target.value);
  }
 
  async function handleGetData() {
    try {
      const result = await fetch('http://localhost:8080', {
        method: 'patch'
      })
      const data = result.json()
      setSearchItems(data)
    } catch (error) {
      console.error(error?.message || 'Failed to fetch data ')
    }
  }

  useEffect(() => {
    handleGetData()
  }, [])



  function deleteFunc(index) {
    setItem((prev) => prev.filter((_, idx) => idx !== index));
  }

  function searchingFunc(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
    setSearchItems(items.filter((item) => item.includes(e.target.value)));
  }
  console.log(search)
  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" onChange={(e) => changeInput(e)} value={value} />
        <button type="submit">add</button>
      </form>
      <div>
        <label htmlFor="">Searching</label>
        <input value={search} onChange={searchingFunc} type="text" />
      </div>
      {!search && (
        <ul>
          {items?.map((item, index) => {
            return (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => deleteFunc(index)}>deltete</button>
              </li>
            );
          })}
        </ul>
      )}
      {search && (
        <ul>
          {searchItems?.map((item, index) => {
            return (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => deleteFunc(index)}>deltete</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
