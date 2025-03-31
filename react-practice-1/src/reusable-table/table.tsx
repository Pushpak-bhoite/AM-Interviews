import React from 'react'
interface DataTableProps {
    id: number;
    name: string;
    age: number;
    email: string;
}

interface Columns {
    key: string;
    header: string;
}

const DataTable: React.FC<{ data: DataTableProps[], columns: Columns[] }> = ({ data, columns }) => {
    return (
        <div className="p-4">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        {columns.map((column) =>
                            <th className="border border-gray-300 px-4 py-2">{column?.header}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-100">
                            {columns.map((column) => <td className="border border-gray-300 px-4 py-2">{item[column.key]}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
