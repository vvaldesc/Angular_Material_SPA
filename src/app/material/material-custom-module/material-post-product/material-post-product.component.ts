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
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
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

  public form: FormGroup;
  productListedInterfaceKeys: any[] = [];

  productArray = Object.entries({
    image: '',
    name: '',
    description: '',
    unitAvailable: 0,
    date: new Date(),
    price: 0,
    category: '',
  }).map(([key, value]) => [key, typeof value]);

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.form = new FormGroup({
      image: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      unitAvailable: new FormControl(''),
      date: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl(''),
    });

  }

  getDataType(key: string): string {
    const pair = this.productArray.find(pair => pair[0] === key);
    const type = pair ? typeof pair[1] : 'text';
    const typeMap: { [key: string]: string } = {
      'string': 'text',
      'number': 'number',
      'boolean': 'checkbox',
      'object': 'date',
      'undefined': 'text'
    };
    return pair ? typeMap[pair[1]] : 'text';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log("submitting form...")
  }
}
