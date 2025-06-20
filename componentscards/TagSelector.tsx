import { Note } from '../../types';
import { Button } from '@/components/ui/button';

export default function TagSelector({ notes, selectedTag, setTag }: { notes: Note[]; selectedTag: string; setTag: (tag: string) => void }) {
  const tags = Array.from(new Set(notes.flatMap((n) => n.tags)));
  return (
    <div className="flex gap-2 flex-wrap">
      <Button variant={selectedTag === '' ? 'default' : 'outline'} onClick={() => setTag('')}>All</Button>
      {tags.map((t) => (
        <Button key={t} variant={selectedTag === t ? 'default' : 'outline'} onClick={() => setTag(t)}>
          {t}
        </Button>
      ))}
    </div>
  );
}