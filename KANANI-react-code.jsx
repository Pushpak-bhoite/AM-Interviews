// Write a program where user can perform operations add item, show list, delete, search and filter 


import React, { useState } from 'react';
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
      {!search  && (
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
