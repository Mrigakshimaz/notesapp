import { Input } from '@/components/ui/input';

export default function SearchBar({ search, setSearch }: { search: string; setSearch: (s: string) => void }) {
  return (
    <Input
      placeholder="Search notes by title..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}