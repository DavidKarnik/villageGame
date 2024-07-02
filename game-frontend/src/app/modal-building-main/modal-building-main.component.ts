// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-modal-building-main',
//   templateUrl: './modal-building-main.component.html',
//   styleUrls: ['./modal-building-main.component.css']
// })
// export class ModalBuildingMainComponent {
//
// }

// main-building-modal.component.ts
// main-building-modal.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-building-main',
  template: `
    <div class="modal-window">
      <div class="modal-header">
        <h2>Hlavní budova</h2>
        <button mat-icon-button class="close-button" (click)="close()">
          X
        </button>
      </div>
      <div class="modal-content">
        <p>Hlavní budovy slouží hlavně pro vylepšení ostatních budov ve vesnici. Její level udává,
          jaký maximální level mohou mít ostatní budovy. Čím vyšší level hlavní budovy
          tím více obyvatel bude moci vesnice ubytovat.</p>
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
export class MainBuildingModalComponent {
  constructor(public dialogRef: MatDialogRef<MainBuildingModalComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
