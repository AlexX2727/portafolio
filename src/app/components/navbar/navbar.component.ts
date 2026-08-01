import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="scrolled()">
      <div class="nav-container">
        <!-- Dev-themed logo -->
        <a href="#home" class="nav-logo">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-name">dev</span>
          <span class="logo-slash">/</span>
          <span class="logo-bracket">&gt;</span>
        </a>

        <ul class="nav-links" [class.open]="menuOpen()">
          <li><a href="#about"    (click)="closeMenu()">Sobre mí</a></li>
          <li><a href="#skills"   (click)="closeMenu()">Skills</a></li>
          <li><a href="#projects" (click)="closeMenu()">Proyectos</a></li>
          <li><a href="#cv"       (click)="closeMenu()">CV</a></li>
          <li><a href="#contact"  (click)="closeMenu()">Contacto</a></li>
        </ul>

        <button class="hamburger" (click)="toggleMenu()" [class.active]="menuOpen()" aria-label="Menú">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrolled  = signal(false);
  menuOpen  = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 50); }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu()  { this.menuOpen.set(false); }
}
