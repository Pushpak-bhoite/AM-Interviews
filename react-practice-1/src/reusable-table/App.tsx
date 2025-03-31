const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "age", header: "Age" },
    { key: "email", header: "Email" }
]

const data = [
    { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
    { id: 3, name: "Mike Johnson", age: 40, email: "mike@example.com" },
];

import React from 'react'
import DataTable from './table'
const App = () => {
    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default App
