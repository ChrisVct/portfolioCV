import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DescriptionProjet } from '../models/description-projet.models';

@Component({
  selector: 'app-vignette-projet',
  templateUrl: './vignette-projet.component.html',
  styleUrls: ['./vignette-projet.component.scss'],
})
export class VignetteProjetComponent {
  constructor(private router: Router) {}
  @Input() descriptionProjet!: DescriptionProjet;

  onVoirProjet() {
    this.router.navigateByUrl(`realisations/${this.descriptionProjet.id}`);
  }
}
