import { Injectable } from '@angular/core';
import { VignetteProjet } from '../models/vignette-projet.models';

@Injectable({
  providedIn: 'root',
})
export class VignettesProjetService {
  vignettesProjet: VignetteProjet[] = [
    {
      id: 1,
      routerLinkPath: '/projetBarbemousse',
      imageUrl: '../../assets/Barbemousse-min.png',
      titre: 'MicroBrasserie Barbemousse',
      sousTitre:
        "Site vitrine d'un brasseur indépendant, réalisé avec React et Bootstrap.",
      sousTitre2:
        "Site vitrine d'une microbrasserie normande souhaitant mieux communiquer " +
        'sur ses produits et points de distribution.<br />',
      contenuPrincipal:
        "Premier projet concret, au cours duquel j'ai découvert l'utilisation" +
        " d'un framework frontend et la notion de <i>composants</i>. J'ai réalisé " +
        'ce projet avec, pour données de démarrage : un logo et quelques photo. ' +
        "M'inspirant de ces éléments, j'ai pensé et développé la totalité de " +
        'l\'application.</p><br /><p class="has-text-justified">Mots clés :' +
        ' ReactJS, Bootstrap, animations CSS, responsive design, reccueil du besoin' +
        ' client, hébergement WEB, SEO, formulaire decontact, intégration de plugins.',
    },
    {
      id: 2,
      routerLinkPath: '/projetPortfolio',
      imageUrl: '../../assets/Portfolio-min.png',
      titre: 'Portfolio',
      sousTitre:
        'Site personnel de présentation, réalisé avec Angular et Bulma.',
      sousTitre2:
        "Site vitrine d'une mx communiquer sur ses produits et points de distribution.<br />",
      contenuPrincipal:
        "Premier projet concret, au cours duquel j'ai découvert l'utilisation d'un framework frontend et la notion de <i>composants</i>. J'ai réalisé ce projet avec, pour données de démarrage : un logo et quelques photo. M'inspirant de ces éléments, j'ai pensé et développé la totalité de l'application.</p><br /><p class=\"has-text-justified\">Mots clés : ReactJS, Bootstrap, animations CSS, responsive design, reccueil du besoin client, hébergement WEB, SEO, formulaire decontact, intégration de plugins.",
    },
    {
      id: 3,
      routerLinkPath: '/projetEniEncheres',
      imageUrl: '../../assets/encheresEncheresCoComp.png',
      titre: "Application d'enchères",
      sousTitre:
        'Application WEB, réalisée dans le cadre de ma formation D2WM, avec JavaEE et Bootstrap.',
      sousTitre2:
        "Site vitrine d'une microbrasserie normande souhaitant mieux communiquer sur ses produits et points de distribution.<br />",
      contenuPrincipal:
        "Premier projet concret, au cours duquel j'ai découvert l'utilisation d'un framework frontend et la notion de <i>composants</i>. J'ai réalisé ce projet avec, pour données de démarrage : un logo et quelques photo. M'inspirant de ces éléments, j'ai pensé et développé la totalité de l'application.</p><br /><p class=\"has-text-justified\">Mots clés : ReactJS, Bootstrap, animations CSS, responsive design, reccueil du besoin client, hébergement WEB, SEO, formulaire decontact, intégration de plugins.",
    },
  ];

  getAllVignettesProjet(): VignetteProjet[] {
    return this.vignettesProjet;
  }
  getVignetteProjetById(vignetteID: number): VignetteProjet {
    const vignetteProjet = this.vignettesProjet.find(
      (vignetteProjet) => vignetteProjet.id === vignetteID
    );
    console.log('vignette id = ' + vignetteProjet?.id);

    if (!vignetteProjet) {
      throw new Error('projet non trouvé');
    } else {
      return vignetteProjet;
    }
  }
}
