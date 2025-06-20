import { Note } from '../../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TrashPanel({ notes, onRestore }: {
  notes: Note[];
  onRestore: (id: string) => void;
}) {
  if (notes.length === 0) return null;
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">🗑️ Trash</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {notes.map((note) => (
          <Card key={note.id} className="border border-red-400">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {note.title}
                <Button size="sm" onClick={() => onRestore(note.id)}>Restore</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">{note.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}