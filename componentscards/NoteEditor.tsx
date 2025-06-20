import { useState } from 'react';
import { Note } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Toolbar from './Toolbar';

export default function NoteEditor({ onAddNote }: { onAddNote: (note: Note) => void }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;
    const newNote: Note = {
      id: uuidv4(),
      title,
      content,
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
    };
    onAddNote(newNote);
    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Note</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
  <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
  <Toolbar onFormat={(symbol, wrap = false) => {
    if (!content) return;
    const selection = window.getSelection()?.toString();
    const newText = wrap && selection
      ? content.replace(selection, `${symbol}${selection}${symbol}`)
      : content + `\n${symbol}`;
    setContent(newText);
  }} />
  <Textarea placeholder="Markdown content" value={content} onChange={(e) => setContent(e.target.value)} />
  <Input placeholder="Tags (comma-separated)" value={tags} onChange={(e) => setTags(e.target.value)} />
  <Button onClick={handleSubmit}>Add Note</Button>
</CardContent>
    </Card>
  );
}