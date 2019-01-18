import { EntryComponent } from '../entry/entry.component';
import { SongComponent } from '../song/song.component';

// Represents a visitor book
export class VisitorBook {

  id: number;
  bookName: string;
  entries: EntryComponent[];
  songs: SongComponent[];

}
