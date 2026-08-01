import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p class="footer-logo">DR<span>.</span></p>
          <p class="footer-name">Denny Alexander Rosales Flores</p>
          <p class="footer-copy">© {{ year }} · Full-Stack Developer · Hecho con ❤️ en Angular</p>
          <div class="footer-links">
            <a href="https://www.nutricionistadavidbatallas.com/" target="_blank">Nutricionista</a>
            <a href="https://www.hospedajesalinas.com/" target="_blank">Hospedaje Salinas</a>
            <a href="https://front-react-ochre-six.vercel.app/" target="_blank">React App</a>
            <a href="https://front-svelte.vercel.app/" target="_blank">Svelte App</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year = new Date().getFullYear();
}
