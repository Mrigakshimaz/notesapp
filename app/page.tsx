'use client';
import { useState } from 'react';
import notesData from '../data/dummyNotes';
import NoteCard from '@/componentscards/NoteCard';
import NoteEditor from '@/componentscards/NoteEditor';
import SearchBar from '@/componentscards/SearchBar';
import TagSelector from '@/componentscards/TagSelector';
import TrashPanel from '@/componentscards/TrashPanel'; 
import { Note } from '../../types';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  const [notes, setNotes] = useState<Note[]>(notesData);
  const [trash, setTrash] = useState<Note[]>([]);
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');

  const filteredNotes = notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(search.toLowerCase()) &&
      (tag ? note.tags.includes(tag) : true)
    );
  });

  const handleAddNote = (note: Note) => setNotes([note, ...notes]);

  const handleDeleteNote = (id: string) => {
    const noteToDelete = notes.find((n) => n.id === id);
    if (noteToDelete) {
      setTrash([noteToDelete, ...trash]);
      setNotes(notes.filter((n) => n.id !== id));
    }
  };

  const handleRestoreNote = (id: string) => {
    const noteToRestore = trash.find((n) => n.id === id);
    if (noteToRestore) {
      setNotes([noteToRestore, ...notes]);
      setTrash(trash.filter((n) => n.id !== id));
    }
  };

  const handleEditNote = (updated: Note) => {
    setNotes(notes.map((n) => (n.id === updated.id ? updated : n)));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">📝 Notes Dashboard</h1>
      <NoteEditor onAddNote={handleAddNote} />
      <Separator />
      <SearchBar search={search} setSearch={setSearch} />
      <TagSelector notes={notes} selectedTag={tag} setTag={setTag} />
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredNotes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={handleDeleteNote}
            onEdit={handleEditNote}
          />
        ))}
      </div>
      <TrashPanel notes={trash} onRestore={handleRestoreNote} />
    </div>
  );
}
