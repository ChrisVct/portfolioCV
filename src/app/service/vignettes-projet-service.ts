import { Injectable } from '@angular/core';
import { VignetteProjet } from '../models/vignette-projet.models';

@Injectable({
  providedIn: 'root',
})
export class VignettesProjetService {
  vignettesProjet: VignetteProjet[] = [
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

  getAllVignettesProjet(): VignetteProjet[] {
    return this.vignettesProjet;
  }
}
