import { Component, OnInit, EventEmitter, Input, Inject } from '@angular/core';
import { NoteModel } from '../model/note.model';
import { NoteService } from '../service/note.service';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { NoteListComponent } from '../note-list/note-list.component';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.less']
})
export class NoteEditComponent implements OnInit {
  onEdit = new EventEmitter();
  constructor(
    private noteService: NoteService,
    public dialogRef: MatDialogRef<NoteListComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public note: NoteModel
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  updateNote() {
    this.noteService.put(this.note.id, this.note).subscribe(res => {
      console.log(this.note);
      this.onEdit.emit();
      this.openSnackbar();
    });
  }

  openSnackbar() {
    this.snackBar.open(`Updated note!`, 'Ok', {
      duration: 5000
    });
  }
}
