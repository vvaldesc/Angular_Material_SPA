import {Component, Inject} from '@angular/core';

import { MatDialog} from '@angular/material/dialog';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogClose, MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-material-sesion-form',
  templateUrl: './material-sesion-form.component.html',
  styleUrls: ['./material-sesion-form.component.css'],
  standalone: true,
  imports: [MatButtonModule],
})
export class MaterialSesionFormComponent {
  usuario: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
      data: { name: this.usuario },
    });

    dialogRef.afterClosed().subscribe((usuario: string) => {
      this.usuario = usuario;
      console.log('The dialog for: ' + this.usuario + ' was closed');
    });
  }
}

interface DialogData {
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  standalone: true,
  imports: [ MatDialogActions, MatDialogClose, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSelectModule, MatDialogTitle, MatDialogContent],
})
export class DialogDataExampleDialog {
  usuario: string = '';

  constructor(
    @Inject(MatDialogRef) public dialogRef: MatDialogRef<DialogDataExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}