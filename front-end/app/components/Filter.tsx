'use client';

import React from 'react';

type Props = {
  filterText: string;
  setFilterText: (value: string) => void;
};

export default function Filter({ filterText, setFilterText }: Props) {
  return (
    <div className="mt-4 w-full flex items-center space-x-2">
      <input
        type="text"
        placeholder="Filter by keyword..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-1 w-full max-w-sm"
      />
    </div>
  );
}
