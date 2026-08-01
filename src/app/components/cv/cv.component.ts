import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="cv" class="cv-section">
      <div class="container">
        <div class="section-tag">Currículum</div>
        <h2 class="section-title">Mi CV</h2>

        <div class="cv-wrapper reveal">
          <div class="cv-actions">
            <a href="assets/cv.pdf" download="Denny_Rosales_CV.pdf" class="btn btn-primary">
              ⬇ Descargar CV
            </a>
            <a href="assets/cv.pdf" target="_blank" class="btn btn-outline">
              🔗 Abrir en nueva pestaña
            </a>
          </div>
          <div class="cv-frame">
            <iframe
              src="assets/cv.pdf"
              title="CV Denny Rosales"
              width="100%"
              height="850"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./cv.component.css']
})
export class CvComponent {}
