import React from "react";
import DataTable from "./table";

// DataTable.tsx
export type Column<T> = {
    key: keyof T; //"id" | "name" | "age" | "email"; 
    header: string;
  };
  
// ✅ Define a specific type for user data
type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

// ✅ Define table columns
const columns: Column<User>[] = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  { key: "age", header: "Age" },
  { key: "email", header: "Email" },
];

// ✅ Define user data
const data: User[] = [
  { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
  { id: 3, name: "Mike Johnson", age: 40, email: "mike@example.com" },
];

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold p-4">Customizable Data Table</h1>

      {/* ✅ Using generics for type safety */}
      <DataTable<User>
        columns={columns}
        data={data}
        renderData={(item, columnKey) => {
          if (columnKey === "age") {
            return <span className="text-blue-600 font-bold">{item.age} years</span>;
          }
          if (columnKey === "email") {
            return <a href={`mailto:${item.email}`} className="text-blue-500 underline">{item.email}</a>;
          }
          return item[columnKey];
        }}
      />
    </div>
  );
};

export default App;


// https://chatgpt.com/c/67e90011-2300-800d-ae3c-a2dc770f9c9d