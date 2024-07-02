// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-modal-building-barracks',
//   templateUrl: './modal-building-barracks.component.html',
//   styleUrls: ['./modal-building-barracks.component.css']
// })
// export class ModalBuildingBarracksComponent {
//
// }

// barracks-modal.component.ts
import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-building-barracks',
  template: `
    <div class="modal-window">
      <div class="modal-header">
        <h2>Kasárny</h2>
        <button mat-icon-button class="close-button" (click)="close()">
          X
        </button>
      </div>
      <div class="modal-content">
        <p>Kasárny slouží pro verbování jednotek. Každý výcvik jednotky je jinak nákladný na suroviny a obyvatele.
        Při zvýšení levelu kasáren se odemknou nové jednotky, které bude možné naverbovat.</p>
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
export class ModalBuildingBarracksComponent {
  constructor(public dialogRef: MatDialogRef<ModalBuildingBarracksComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}

