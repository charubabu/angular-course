import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogcontentComponent } from 'src/app/papers/dialogcontent/dialogcontent.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogcontentComponent)
}

}
