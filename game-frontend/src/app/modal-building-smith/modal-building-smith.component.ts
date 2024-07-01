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

@Component({
  selector: 'app-modal-building-smith',
  template: `
    <h2>Smithy</h2>
    <p>Details and actions for Smithy...</p>
    <button mat-button (click)="close()">Close</button>
  `,
  styles: [`
    h2 { margin-top: 0; }
    button { margin-top: 20px; }
  `]
})
export class ModalBuildingSmithComponent {
  close(): void {
    // Logic to close the modal
  }
}

