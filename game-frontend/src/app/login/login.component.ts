import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "unknownUser";
  password: string = "unknownPass";

  onSubmit(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Zde můžete přidat logiku pro ověření uživatelských údajů a přesměrování
    // na další stránku nebo zpracování přihlášení
  }

}
