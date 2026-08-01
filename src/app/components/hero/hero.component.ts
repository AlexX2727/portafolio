import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-bg"></div>
      <canvas class="particles" id="hero-canvas"></canvas>

      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            Disponible para proyectos
          </div>

          <h1 class="hero-title">
            Hola, soy<br/>
            <span class="gradient-text">Denny Rosales</span>
          </h1>

          <p class="hero-role">
            <span class="role-tag">Ing. Tecnología de la Información</span>
          </p>

          <p class="hero-subtitle">Full-Stack Developer</p>

          <p class="hero-desc">
            Desarrollo aplicaciones web modernas y escalables con Angular, React, Svelte,
            Astro y NestJS. Apasionado por el rendimiento, la UX y la calidad del código.
          </p>

          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">Ver Proyectos →</a>
            <a href="assets/cv.pdf" download class="btn btn-outline">Descargar CV</a>
          </div>

          <div class="hero-stats">
            <div class="stat">
              <span class="stat-num">4+</span>
              <span class="stat-label">Proyectos reales</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">6+</span>
              <span class="stat-label">Tecnologías</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">60%</span>
              <span class="stat-label">Cloudflare</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="code-card">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
              <span class="code-filename">developer.ts</span>
            </div>
            <pre class="code-body"><code><span class="kw">const</span> <span class="fn">denny</span> = &#123;
  <span class="prop">name</span>:  <span class="str">"Denny Rosales"</span>,
  <span class="prop">title</span>: <span class="str">"Ing. TI"</span>,
  <span class="prop">role</span>:  <span class="str">"Full-Stack Dev"</span>,
  <span class="prop">stack</span>: [
    <span class="str">"Angular"</span>, <span class="str">"React"</span>,
    <span class="str">"Svelte"</span>, <span class="str">"Astro"</span>,
    <span class="str">"NestJS"</span>, <span class="str">"Node.js"</span>
  ],
  <span class="prop">cloud</span>:     <span class="str">"Cloudflare 60%"</span>,
  <span class="prop">available</span>: <span class="kw">true</span>
&#125;;</code></pre>
          </div>

          <div class="floating-badges">
            <span class="fbadge" style="--d:0s">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" alt="Angular" width="14"> Angular
            </span>
            <span class="fbadge" style="--d:.3s">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="14"> React
            </span>
            <span class="fbadge" style="--d:.6s">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" alt="Svelte" width="14"> Svelte
            </span>
            <span class="fbadge" style="--d:.9s">
              <img src="https://cdn.simpleicons.org/astro/ffffff" alt="Astro" width="14"> Astro
            </span>
            <span class="fbadge" style="--d:1.2s">
              <img src="https://cdn.simpleicons.org/cloudflare/60a5fa" alt="Cloudflare" width="14"> Cloudflare
            </span>
          </div>
        </div>
      </div>

      <div class="scroll-hint">
        <span>Scroll</span>
        <div class="scroll-arrow"></div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => this.initParticles(), 200);
  }

  initParticles() {
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    });

    const pts: any[] = [];
    const cols = ['rgba(96,165,250,', 'rgba(129,140,248,', 'rgba(192,132,252,'];
    for (let i = 0; i < 55; i++) {
      pts.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.6 + 0.4,
        dx: (Math.random() - .5) * .35,
        dy: (Math.random() - .5) * .35,
        col: cols[Math.floor(Math.random() * cols.length)],
        a: Math.random() * .4 + .07
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.col + p.a + ')';
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(129,140,248,${.04 * (1 - d/110)})`;
            ctx.lineWidth = .5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    draw();
  }
}
