import { Component, OnInit } from '@angular/core';
import { DescriptionProjet } from '../models/description-projet.models';
import { DescriptionProjetService } from '../service/description-projet-service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  vignettesProjet!: DescriptionProjet[];

  constructor(private descriptionProjetService: DescriptionProjetService) {}

  ngOnInit(): void {
    this.vignettesProjet =
      this.descriptionProjetService.getAllDescriptionsProjet();
  }
}
