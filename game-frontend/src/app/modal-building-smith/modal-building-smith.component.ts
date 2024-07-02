// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-modal-building-smith',
//   templateUrl: './modal-building-smith.component.html',
//   styleUrls: ['./modal-building-smith.component.css']
// })
// export class ModalBuildingSmithComponent {
//
// }

// smithy-modal.component.ts
import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-building-smith',
  template: `
    <div class="modal-window">
      <div class="modal-header">
        <h2>Kovárna</h2>
        <button mat-icon-button class="close-button" (click)="close()">
          X
        </button>
      </div>
      <div class="modal-content">
        <p>Kovárna slouží pro vylepšení jednotek a pro výzkum a výrobu dalších zbraní a obléhacích strojů.</p>
      </div>
    </div>
  `,
  styles: [`
    .modal-window{
      padding: 10px;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
    }
    .close-button {
      background: transparent;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
    .modal-content {
      margin-top: 20px;
    }
  `]
})
export class ModalBuildingSmithComponent {
  constructor(public dialogRef: MatDialogRef<ModalBuildingSmithComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}

