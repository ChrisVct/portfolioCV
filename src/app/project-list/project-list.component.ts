import { Component, OnInit } from '@angular/core';
import { VignetteProjet } from '../models/vignette-projet.models';
import { VignettesProjetService } from '../service/vignettes-projet-service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  vignettesProjet!: VignetteProjet[];

  constructor(private vignettesProjetService: VignettesProjetService) {}

  ngOnInit(): void {
    this.vignettesProjet = this.vignettesProjetService.getAllVignettesProjet();
  }
}
