import { Component, Input } from '@angular/core';
import { VignetteProjet } from '../models/vignette-projet.models';

@Component({
  selector: 'app-vignette-projet',
  templateUrl: './vignette-projet.component.html',
  styleUrls: ['./vignette-projet.component.scss'],
})
export class VignetteProjetComponent {
  @Input() vignetteProjet!: VignetteProjet;

  routerLinkPath!: string;
  imageUlr!: string;
  titre!: string;
  sousTitre!: string;
}
