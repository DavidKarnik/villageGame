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
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-building-main',
  template: `
    <h2>Main Building</h2>
    <p>Details and actions for Main Building...</p>
    <button mat-button (click)="close()">Close</button>
  `,
  styles: [`
    h2 { margin-top: 0; }
    button { margin-top: 20px; }
  `]
})
export class MainBuildingModalComponent {
  close(): void {
    // Logic to close the modal
  }
}
