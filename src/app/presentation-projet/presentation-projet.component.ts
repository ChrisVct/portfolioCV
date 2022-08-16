import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VignetteProjet } from '../models/vignette-projet.models';
import { VignettesProjetService } from '../service/vignettes-projet-service';

@Component({
  selector: 'app-presentation-projet',
  templateUrl: './presentation-projet.component.html',
  styleUrls: ['./presentation-projet.component.scss'],
})
export class PresentationProjetComponent implements OnInit {
  vignetteProjet!: VignetteProjet;

  constructor(
    private vignettesProjetService: VignettesProjetService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const projetId = +this.route.snapshot.params['id'];
    this.vignetteProjet =
      this.vignettesProjetService.getVignetteProjetById(projetId);
  }

  titre!: string;
}
