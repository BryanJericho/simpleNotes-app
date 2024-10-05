import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface RichTextEditorProps {
  onSubmit: (content: string) => void;
  darkMode: boolean; // Tambahkan prop darkMode
}

const RichTextEditor = ({ onSubmit, darkMode }: RichTextEditorProps) => {
  const [content, setContent] = useState('');

  const handleChange = (value: string) => {
    setContent(value);
  };

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent(''); // Reset the editor after submit
    }
  };

  return (
    <div className="my-6">
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        className={`bg-mono-light dark:bg-navy ${darkMode ? 'text-white' : 'text-mono-dark'} transition-colors`} // Ganti warna teks sesuai mode
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-mono-dark dark:bg-lightBlue text-white dark:text-white px-4 py-2 rounded transition-colors"
      >
        Submit Note
      </button>
    </div>
  );
};

export default RichTextEditor;
