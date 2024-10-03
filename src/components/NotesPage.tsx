import RichTextEditor from '@/components/RichTextEditor';

const NotesPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Simple Notes App</h1>
      <RichTextEditor />
    </div>
  );
};

export default NotesPage;
