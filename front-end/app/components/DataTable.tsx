'use client';

import React, { useState } from 'react';

type Props = {
  data: any[];
};

export default function DataTable({ data }: Props) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortedData = [...data];

  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  if (data.length === 0) return null;

  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto mt-6 border rounded-lg shadow">
      <div className="max-h-[400px] overflow-y-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-green-100 sticky top-0">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-2 py-2 border border-gray-300 font-semibold text-left whitespace-nowrap max-w-[200px]"
                  onClick={() => handleSort(column)}
                >
                  {column}{' '}
                  {sortConfig?.key === column ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-green-50`}
              >
                {columns.map((column) => (
                  <td
                    key={column}
                    className="px-2 py-1 border border-gray-300 whitespace-normal break-words max-w-[200px]"
                  >
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
