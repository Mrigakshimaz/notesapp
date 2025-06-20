'use client';
import { Button } from '@/components/ui/button';

export default function Toolbar({ onFormat }: { onFormat: (symbol: string, wrap?: boolean) => void }) {
  return (
    <div className="flex gap-2 flex-wrap mb-2">
      <Button size="sm" variant="outline" onClick={() => onFormat('**', true)}>Bold</Button>
      <Button size="sm" variant="outline" onClick={() => onFormat('*', true)}>Italic</Button>
      <Button size="sm" variant="outline" onClick={() => onFormat('`', true)}>Code</Button>
      <Button size="sm" variant="outline" onClick={() => onFormat('- ')}>List</Button>
      <Button size="sm" variant="outline" onClick={() => onFormat('> ')}>Quote</Button>
    </div>
  );
}