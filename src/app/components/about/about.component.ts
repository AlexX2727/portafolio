import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="section-tag">Sobre mí</div>
        <h2 class="section-title">¿Quién soy?</h2>

        <div class="about-grid">
          <div class="about-text reveal-left">
            <p>
              Soy <strong>Denny Alexander Rosales Flores</strong>, desarrollador Full-Stack con
              experiencia construyendo aplicaciones web modernas de alto rendimiento. Me especializo
              en el ecosistema JavaScript/TypeScript, desde el frontend con <strong>Angular, React, Svelte y Astro</strong>
              hasta el backend con <strong>NestJS y Node.js</strong>.
            </p>
            <p>
              He trabajado en proyectos reales en producción: plataformas con pasarelas de pago,
              registro y autenticación de usuarios, almacenamiento en <strong>Cloudflare R2</strong>,
              envío de correos transaccionales y dominios personalizados con Cloudflare.
            </p>
            <p>
              Mi investigación de titulación comparó el rendimiento de frameworks modernos
              (React vs Svelte), demostrando mi capacidad analítica y enfoque en métricas reales.
            </p>
            <div class="about-chips">
              <span class="chip">🎓 Egresado en Sistemas</span>
              <span class="chip">⚡ Performance First</span>
              <span class="chip">☁️ Cloudflare 60%</span>
              <span class="chip">🌐 Producción</span>
              <span class="chip">💳 Pagos en línea</span>
              <span class="chip">🔐 Auth & Roles</span>
            </div>
          </div>

          <div class="about-cards reveal-right">
            <div class="info-card">
              <div class="info-icon">🎨</div>
              <h3>Frontend</h3>
              <p>Angular, React, Svelte, Astro, Next.js. Animaciones, rendimiento optimizado y diseño responsivo.</p>
            </div>
            <div class="info-card">
              <div class="info-icon">⚙️</div>
              <h3>Backend</h3>
              <p>NestJS, Node.js, APIs REST, autenticación JWT, pasarelas de pago y base de datos SQL.</p>
            </div>
            <div class="info-card">
              <div class="info-icon">☁️</div>
              <h3>Cloud & DevOps</h3>
              <p>Cloudflare (dominio, R2, Workers, email), Vercel, despliegues en producción con CI/CD.</p>
            </div>
            <div class="info-card">
              <div class="info-icon">🔒</div>
              <h3>Auth & Pagos</h3>
              <p>Registro de usuarios, roles, sesiones seguras, e integración de pasarelas de pago online.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => observer.observe(el));
  }
}
