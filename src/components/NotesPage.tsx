"use client";
import { useState, useEffect } from 'react';
import RichTextEditor from '@/components/RichTextEditor';

const NotesPage = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleNoteSubmit = (newNote: string) => {
    setNotes([newNote, ...notes]);
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply/remove dark class to body
  useEffect(() => {
    const htmlElement = document.documentElement; // Dapatkan elemen HTML
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Hapus catatan berdasarkan index
  const handleDeleteNote = (index: number) => {
    const updatedNotes = notes.filter((_, noteIndex) => noteIndex !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold dark:text-lightBlue">Simple Notes App</h1>
        <button
          onClick={toggleDarkMode}
          className="bg-mono-dark text-white px-4 py-2 rounded transition-colors"
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      <RichTextEditor onSubmit={handleNoteSubmit} darkMode={darkMode} /> {/* Teruskan darkMode */}

      {/* Display Saved Notes */}
      <div className="mt-8">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div
              key={index}
              className="bg-mono-light dark:bg-navy text-mono-dark dark:text-white p-4 my-2 rounded shadow transition-colors flex justify-between items-center"
            >
              <div dangerouslySetInnerHTML={{ __html: note }} />
              <button
                onClick={() => handleDeleteNote(index)} // Panggil handleDeleteNote saat tombol di klik
                className={`ml-4 px-2 py-1 rounded transition-colors ${
                  darkMode ? 'bg-lightBlue text-white hover:bg-blue-600' : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-mono-dark dark:text-white">No notes yet!</p>
        )}
      </div>
    </div>
  );
};
  
export default NotesPage;
