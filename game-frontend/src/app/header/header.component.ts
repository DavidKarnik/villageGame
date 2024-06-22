import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  // Metoda pro navigaci na různé sekce
  navigateTo(section: string): void {
    this.router.navigate([section]);
  }

  // Metoda pro odhlášení uživatele
  logout(): void {
    console.log('User logged out');
    // Zde můžeme provést jakoukoliv logiku pro odhlášení uživatele
    // Například zde můžete volat API pro odhlášení, smazat lokální údaje, atd.

    // Po odhlášení přesměrujte uživatele na přihlašovací stránku
    // this.router.navigateByUrl('login')
    this.router.navigate(['/login']);
  }
}
