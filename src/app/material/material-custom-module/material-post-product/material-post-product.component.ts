import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';

import {Product} from '../../../models/Product';

export interface DialogData {
  productInterfaceKeys: string[];
  productInterface: Product;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'material-post-product',
  templateUrl: 'material-post-product.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class MaterialPostProductComponent {
  animal: string = '';
  name: string = '';
  product: Product = {
    image: '',
    name: '',
    description: '',
    unitAvailable: 0,
    date: new Date(),
    price: 0,
    category: '',
  };
  keys: string[] = Object.keys(this.product);

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    console.log(this.keys);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {productInterfaceKeys: this.keys},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.product = result;
    });
  }
}

@Component({
  selector: 'material-post-product-dialog',
  templateUrl: 'material-post-product-dialog.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    CommonModule
  ],
})
export class DialogOverviewExampleDialog {



  
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
