import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Note } from '../types';
import ReactMarkdown from 'react-markdown';

export default function NoteCard({ note, onDelete, onEdit }: {
  note: Note;
  onDelete: (id: string) => void;
  onEdit: (note: Note) => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {note.title}
          <div className="space-x-2">
            <Button size="sm" variant="outline" onClick={() => onEdit(note)}>Edit</Button>
            <Button size="sm" variant="destructive" onClick={() => onDelete(note.id)}>Delete</Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-sm dark:prose-invert">
          <ReactMarkdown>
            {note.content}
          </ReactMarkdown>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {note.tags.map((tag) => (
            <span key={tag} className="text-xs bg-muted px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}