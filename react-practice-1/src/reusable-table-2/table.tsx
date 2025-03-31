import React from "react";

// ✅ Define the Column type to specify table structure
type Column<T> = {
  key: keyof T; // Ensures the key exists in the provided data type
  header: string;
};

// ✅ Define the props for the DataTable component
type DataTableProps<T> = {
  data: T[]; // Array of generic data objects
  columns: Column<T>[]; // Array of column configurations
  renderData?: (item: T, columnKey: keyof T) => React.ReactNode; // Optional custom rendering function
};

// ✅ Generic DataTable Component
const DataTable = <T,>({ data, columns, renderData }: DataTableProps<T>) => {
  return (
    <div className="p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column) => (
              <th key={String(column.key)} className="border border-gray-300 px-4 py-2">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {columns.map((column) => (
                <td key={String(column.key)} className="border border-gray-300 px-4 py-2">
                  {renderData ? renderData(item, column.key) : String(item[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
