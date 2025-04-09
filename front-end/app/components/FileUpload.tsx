'use client';

import React from 'react';

type Props = {
  handleFileUpload: (file: File) => void;
};

export default function FileUpload({ handleFileUpload }: Props) {
  return (
    <div className="flex flex-col items-start space-y-2">
      <label className="font-semibold">Upload CSV File</label>
      <input
        type="file"
        accept=".csv"
        className="file-input file-input-bordered file-input-sm bg-gray-300 rounded-md"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            handleFileUpload(e.target.files[0]);
          }
        }}
      />
    </div>
  );
}
