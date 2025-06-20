'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Note } from '../types';

export default function NoteEditModal({
  isOpen,
  onClose,
  note,
  onSave
}: {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
  onSave: (note: Note) => void;
}) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [tags, setTags] = useState(note.tags.join(', '));

  const handleSubmit = () => {
    const updatedNote: Note = {
      ...note,
      title,
      content,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean)
    };
    onSave(updatedNote);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Note</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
          <Input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma-separated)" />
          <Button onClick={handleSubmit} className="w-full">Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
