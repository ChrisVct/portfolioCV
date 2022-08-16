import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VignetteProjet } from '../models/vignette-projet.models';

@Component({
  selector: 'app-vignette-projet',
  templateUrl: './vignette-projet.component.html',
  styleUrls: ['./vignette-projet.component.scss'],
})
export class VignetteProjetComponent {
  constructor(private router: Router) {}
  @Input() vignetteProjet!: VignetteProjet;

  // id!: number;
  // routerLinkPath!: string;
  // imageUlr!: string;
  // titre!: string;
  // sousTitre!: string;
  // sousTitre2!: string;
  // contenuPrincipal!: string;

  onVoirProjet() {
    this.router.navigateByUrl(`realisations/${this.vignetteProjet.id}`);
  }
}
