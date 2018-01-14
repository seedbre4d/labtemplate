import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/note.service';
import { NoteModel } from '../model/note.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NoteAddComponent } from '../note-add/note-add.component';
import { NoteEditComponent } from '../note-edit/note-edit.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']
})
export class NoteListComponent implements OnInit {
  notes: NoteModel[];

  constructor(
    private noteService: NoteService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.fetchAll();
  }

  fetchAll() {
    this.noteService.get().subscribe(res => {
      this.notes = res;
    });
  }

  openEditDialog(note: NoteModel): void {
    const dialogRef = this.dialog.open(NoteEditComponent, {
      width: '250px',
      data: note
    });
    dialogRef.componentInstance.onEdit.subscribe(res => {
      this.fetchAll();
    });
    dialogRef.afterClosed().subscribe(res => {
      dialogRef.componentInstance.onEdit.unsubscribe();
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(NoteAddComponent, {
      width: '250px'
    });
    dialogRef.componentInstance.onAdd.subscribe(res => {
      this.fetchAll();
    });
    dialogRef.afterClosed().subscribe(res => {
      dialogRef.componentInstance.onAdd.unsubscribe();
    });
  }

  delete(note: NoteModel) {
    this.notes = this.notes.filter(c => c.id !== note.id);
    this.noteService.delete(note.id).subscribe(res => {
      console.log('success!');
      this.openSnackbar();
    });
  }
  openSnackbar() {
    this.snackBar.open(`Note deleted!`, 'Ok', {
      duration: 5000
    });
  }
}
