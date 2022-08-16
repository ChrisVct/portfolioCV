import { Component, OnInit } from '@angular/core';
import { VignetteProjet } from '../models/vignette-projet.models';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  vignettesProjet!: VignetteProjet[];

  ngOnInit(): void {
    this.vignettesProjet = [
      {
        routerLinkPath: '/projetBarbemousse',
        imageUrl: '../../assets/Barbemousse-min.png',
        titre: 'MicroBrasserie Barbemousse',
        sousTitre:
          "Site vitrine d'un brasseur indépendant, réalisé avec React et Bootstrap.",
      },
      {
        routerLinkPath: '/projetPortfolio',
        imageUrl: '../../assets/Portfolio-min.png',
        titre: 'Portfolio',
        sousTitre:
          'Site personnel de présentation, réalisé avec Angular et Bulma.',
      },
      {
        routerLinkPath: '/projetEniEncheres',
        imageUrl: '../../assets/encheresEncheresCoComp.png',
        titre: "Application d'enchères",
        sousTitre:
          'Application WEB, réalisée dans le cadre de ma formation D2WM, avec JavaEE et Bootstrap.',
      },
    ];
  }
}
