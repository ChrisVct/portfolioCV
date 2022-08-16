import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DescriptionProjet } from '../models/description-projet.models';
import { DescriptionProjetService } from '../service/description-projet-service';

@Component({
  selector: 'app-presentation-projet',
  templateUrl: './presentation-projet.component.html',
  styleUrls: ['./presentation-projet.component.scss'],
})
export class PresentationProjetComponent implements OnInit {
  descriptionProjet!: DescriptionProjet;

  constructor(
    private descriptionProjetService: DescriptionProjetService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const projetId = +this.route.snapshot.params['id'];
    this.descriptionProjet =
      this.descriptionProjetService.getDescriptionProjetById(projetId);
  }

  titre!: string;
}
