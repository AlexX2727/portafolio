import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill { logo: string; name: string; level: number; invert?: boolean; }
interface SkillCategory { title: string; skills: Skill[]; }

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SI = 'https://cdn.simpleicons.org';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills">
      <div class="container">
        <div class="section-tag">Stack</div>
        <h2 class="section-title">Mis Tecnologías</h2>

        <div class="skills-grid">
          <div class="skill-category reveal" *ngFor="let cat of categories; let i = index" [style.--delay]="i * 0.12 + 's'">
            <h3 class="cat-title">{{ cat.title }}</h3>
            <div class="skill-items">
              <div class="skill-item" *ngFor="let s of cat.skills">
                <div class="skill-top">
                  <img [src]="s.logo" [alt]="s.name" class="skill-logo" [class.invert]="s.invert" width="18" height="18" />
                  <span class="skill-name">{{ s.name }}</span>
                  <span class="skill-pct">{{ s.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-fill" [style.--w]="s.level + '%'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  categories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { logo: `${DI}/angularjs/angularjs-original.svg`,       name: 'Angular',       level: 82 },
        { logo: `${DI}/react/react-original.svg`,               name: 'React',         level: 88 },
        { logo: `${DI}/svelte/svelte-original.svg`,             name: 'Svelte',        level: 82 },
        { logo: `${SI}/astro/ffffff`,                           name: 'Astro',         level: 78, invert: false },
        { logo: `${DI}/nextjs/nextjs-original.svg`,             name: 'Next.js',       level: 80, invert: true },
        { logo: `${DI}/html5/html5-original.svg`,               name: 'HTML / CSS / JS', level: 95 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { logo: `${DI}/nestjs/nestjs-original.svg`,             name: 'NestJS',        level: 80 },
        { logo: `${DI}/nodejs/nodejs-original.svg`,             name: 'Node.js',       level: 85 },
        { logo: `${DI}/typescript/typescript-original.svg`,     name: 'TypeScript',    level: 83 },
        { logo: `${DI}/postgresql/postgresql-original.svg`,     name: 'PostgreSQL',    level: 74 },
      ]
    },
    {
      title: 'Cloud & Herramientas',
      skills: [
        { logo: `${SI}/cloudflare/60a5fa`,                      name: 'Cloudflare',    level: 60 },
        { logo: `${SI}/vercel/ffffff`,                          name: 'Vercel',        level: 86 },
        { logo: `${DI}/git/git-original.svg`,                   name: 'Git',           level: 88 },
        { logo: `${DI}/github/github-original.svg`,             name: 'GitHub',        level: 88, invert: true },
        { logo: `${SI}/stripe/818cf8`,                          name: 'Pasarelas de Pago', level: 75 },
      ]
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          e.target.querySelectorAll('.skill-fill').forEach((bar: Element) => {
            (bar as HTMLElement).classList.add('animated');
          });
        }
      });
    }, { threshold: 0.18 });
    document.querySelectorAll('.skill-category.reveal').forEach(el => observer.observe(el));
  }
}
