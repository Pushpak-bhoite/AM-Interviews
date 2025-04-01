import React from "react";

interface DataTableProps {
  data: Record<string, any>[]; // More generic type to allow dynamic data
  columns: { key: string; header: string }[];
  renderData?: (item: Record<string, any>, column: string) => React.ReactNode;
}

const DataTable: React.FC<DataTableProps> = ({ data, columns, renderData }) => {
  return (
    <div className="p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column) => (
              <th key={column.key} className="border border-gray-300 px-4 py-2">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              {columns.map((column) => (
                <td key={column.key} className="border border-gray-300 px-4 py-2">
                  {renderData ? renderData(item, column.key) : item[column.key]}
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
