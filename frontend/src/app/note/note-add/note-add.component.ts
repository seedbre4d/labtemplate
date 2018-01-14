import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import { NoteService } from "../service/note.service";
import { NoteModel } from "../model/note.model";
import { NoteListComponent } from "../note-list/note-list.component";
import { MatDialogRef, MatSnackBar } from "@angular/material";

@Component({
  selector: "app-note-add",
  templateUrl: "./note-add.component.html",
  styleUrls: ["./note-add.component.less"]
})
export class NoteAddComponent implements OnInit {
  @Input() note: NoteModel = new NoteModel();
  onAdd = new EventEmitter();
  constructor(
    private noteService: NoteService,
    public dialogRef: MatDialogRef<NoteListComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  addNote() {
    this.noteService.post(this.note).subscribe(res => {
      console.log("success!!!");
      const date = new Date(this.note.created);
      this.note.created = date;
      console.log(this.note);
      this.onAdd.emit();
      this.openSnackbar();
      this.note = new NoteModel();
    });
  }

  openSnackbar() {
    this.snackBar.open(`Added note "${this.note.title}"`, 'Ok', {
      duration: 5000
    });
  }
}
