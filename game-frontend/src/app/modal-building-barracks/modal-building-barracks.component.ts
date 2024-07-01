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

@Component({
  selector: 'app-modal-building-barracks',
  template: `
    <h2>Barracks</h2>
    <p>Details and actions for Barracks...</p>
    <button mat-button (click)="close()">Close</button>
  `,
  styles: [`
    h2 { margin-top: 0; }
    button { margin-top: 20px; }
  `]
})
export class ModalBuildingBarracksComponent {
  close(): void {
    // Logic to close the modal
  }
}

