'use client';

import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import DataTable from './components/DataTable';
import Filter from './components/Filter';
import Papa from 'papaparse';
import './styles/global.css';

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [filterText, setFilterText] = useState('');

  const handleFileUpload = (file: File) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setData(results.data as any[]);
      },
    });
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(filterText.toLowerCase())
    )
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Sustainability Dashboard</h1>

      <FileUpload handleFileUpload={handleFileUpload} />
      <Filter filterText={filterText} setFilterText={setFilterText} />
      <DataTable data={filteredData} />
    </main>
  );
}
