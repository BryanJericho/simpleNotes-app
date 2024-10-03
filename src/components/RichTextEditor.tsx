"use client"
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className="my-6">
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        className="bg-mono-light text-mono-dark"
      />
    </div>
  );
};

export default RichTextEditor;
