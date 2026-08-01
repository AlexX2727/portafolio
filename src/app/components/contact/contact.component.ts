import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-tag">Contacto</div>
        <h2 class="section-title">Trabajemos juntos</h2>
        <p class="contact-sub">¿Tienes un proyecto en mente? Estoy disponible para freelance y oportunidades.</p>

        <div class="contact-grid">
          <div class="contact-info reveal-left">
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <span class="contact-label">Ubicación</span>
                <span class="contact-value">Ecuador 🇪🇨</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">💼</div>
              <div>
                <span class="contact-label">Disponibilidad</span>
                <span class="contact-value available">✅ Disponible ahora</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🌐</div>
              <div>
                <span class="contact-label">Proyectos en producción</span>
                <div class="prod-links">
                  <a href="https://www.nutricionistadavidbatallas.com/" target="_blank">nutricionistadavidbatallas.com</a>
                  <a href="https://www.hospedajesalinas.com/" target="_blank">hospedajesalinas.com</a>
                </div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">☁️</div>
              <div>
                <span class="contact-label">Cloudflare</span>
                <span class="contact-value">DNS, R2, Workers, Email, Dominio</span>
              </div>
            </div>
          </div>

          <form class="contact-form reveal-right" (ngSubmit)="onSubmit()" #f="ngForm">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input id="name" type="text" name="name" [(ngModel)]="form.name" placeholder="Tu nombre" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" name="email" [(ngModel)]="form.email" placeholder="tu@email.com" required />
            </div>
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" name="message" [(ngModel)]="form.message" rows="4" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full" [disabled]="sent()">
              {{ sent() ? '✅ Mensaje enviado' : 'Enviar mensaje →' }}
            </button>
            <p class="form-note" *ngIf="sent()">¡Gracias! Me pondré en contacto contigo pronto.</p>
          </form>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  sent = signal(false);
  form = { name: '', email: '', message: '' };

  onSubmit() {
    // Simulate send
    this.sent.set(true);
    setTimeout(() => {
      this.sent.set(false);
      this.form = { name: '', email: '', message: '' };
    }, 4000);
  }
}
