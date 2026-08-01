import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SI = 'https://cdn.simpleicons.org';

interface Tag  { label: string; cls: string; logo: string; invert?: boolean; }
interface Project {
  title: string; desc: string; url: string;
  tags: Tag[]; features: string[];
  featured?: boolean; badge?: string; badgeCls?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <div class="section-tag">Proyectos</div>
        <h2 class="section-title">Lo que he construido</h2>

        <div class="projects-grid">
          <div
            class="project-card reveal"
            *ngFor="let p of projects"
            [class.featured]="p.featured"
          >
            <span class="project-badge" *ngIf="p.badge" [ngClass]="p.badgeCls">{{ p.badge }}</span>

            <div class="project-tags">
              <span class="tech-tag" *ngFor="let t of p.tags" [ngClass]="t.cls">
                <img [src]="t.logo" [alt]="t.label" width="12" height="12" [class.invert]="t.invert" />
                {{ t.label }}
              </span>
            </div>

            <h3 class="project-title">{{ p.title }}</h3>
            <p class="project-desc">{{ p.desc }}</p>

            <ul class="project-features">
              <li *ngFor="let f of p.features">{{ f }}</li>
            </ul>

            <div class="project-footer">
              <a [href]="p.url" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Ver sitio →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Nutricionista David Batallas',
      desc: 'Plataforma completa para nutricionista: pagos en línea, registro/login de usuarios, subida de informes médicos y videos. Dominio personalizado con Cloudflare, correos transaccionales y almacenamiento en R2.',
      url: 'https://www.nutricionistadavidbatallas.com/',
      featured: true,
      badge: '⭐ Destacado',
      badgeCls: 'badge-featured',
      tags: [
        { label: 'NestJS',     cls: 'tag-nestjs', logo: `${DI}/nestjs/nestjs-original.svg` },
        { label: 'Next.js',    cls: 'tag-next',   logo: `${DI}/nextjs/nextjs-original.svg`, invert: true },
        { label: 'Cloudflare', cls: 'tag-cf',     logo: `${SI}/cloudflare/f97316` },
      ],
      features: [
        '💳 Sistema de pagos y ventas online',
        '👤 Registro, login y roles de usuario',
        '📄 Subida de informes y videos (Cloudflare R2)',
        '📧 Correos transaccionales automatizados',
        '🌐 Dominio personalizado con Cloudflare',
      ]
    },
    {
      title: 'Hospedaje Salinas',
      desc: 'Sitio para venta y difusión de departamentos, hoteles y hostales en Salinas. Creado con Astro, incluye animaciones fluidas, redirección a booking y dominio propio con Cloudflare.',
      url: 'https://www.hospedajesalinas.com/',
      tags: [
        { label: 'Astro',      cls: 'tag-astro',  logo: `${SI}/astro/ffffff` },
        { label: 'Cloudflare', cls: 'tag-cf',     logo: `${SI}/cloudflare/f97316` },
      ],
      features: [
        '🏨 Catálogo completo de alojamientos',
        '✨ Animaciones y transiciones fluidas',
        '🔗 Redirección a plataformas de booking',
        '🌐 Dominio personalizado con Cloudflare',
      ]
    },
    {
      title: 'Performance App — React',
      desc: 'Aplicación React desarrollada para mi investigación de titulación comparando rendimiento entre frameworks modernos. Análisis de velocidad, carga y renderizado.',
      url: 'https://front-react-ochre-six.vercel.app/',
      badge: '🔬 Titulación',
      badgeCls: 'badge-research',
      tags: [
        { label: 'React',   cls: 'tag-react',  logo: `${DI}/react/react-original.svg` },
        { label: 'Vercel',  cls: 'tag-vercel', logo: `${SI}/vercel/ffffff` },
      ],
      features: [
        '📊 Análisis de métricas de rendimiento',
        '⚛️ React moderno con hooks y context',
        '🔬 Investigación académica comparativa',
      ]
    },
    {
      title: 'Performance App — Svelte',
      desc: 'Aplicación Svelte equivalente para la misma investigación. Demostró diferencias reales en bundle size, tiempo de compilación y métricas de rendimiento frente a React.',
      url: 'https://front-svelte.vercel.app/',
      badge: '🔬 Titulación',
      badgeCls: 'badge-research',
      tags: [
        { label: 'Svelte', cls: 'tag-svelte', logo: `${DI}/svelte/svelte-original.svg` },
        { label: 'Vercel', cls: 'tag-vercel', logo: `${SI}/vercel/ffffff` },
      ],
      features: [
        '📊 Comparativa real de performance',
        '🔶 Svelte — bundle ultraligero',
        '🔬 Investigación académica de titulación',
      ]
    },
  ];
}
