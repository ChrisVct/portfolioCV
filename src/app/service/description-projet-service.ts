import { Injectable } from '@angular/core';
import { DescriptionProjet } from '../models/description-projet.models';

@Injectable({
  providedIn: 'root',
})
export class DescriptionProjetService {
  descriptionsProjet: DescriptionProjet[] = [
    {
      id: 1,
      routerLinkPath: '/projetBarbemousse',
      imageUrlVignette: '../../assets/Barbemousse-min.png',
      titre: 'MicroBrasserie Barbemousse',
      sousTitreVignette:
        "Site vitrine d'un brasseur indépendant, réalisé avec React et Bootstrap.",
      sousTitrePresentation:
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
      annotationFinArticle:
        'Site en construction. Projet démarré en Mars 2022. Déploiement révu Q3-2022.',
      imageUrlPresentation1: '../../assets/Barbemousse1-min.png',
      imageUrlPresentation2: '../../assets/scrollFullPagegif.gif',
      imageUrlPresentation3: '../../assets/animationBieres.gif',
      imageUrlPresentation4: '../../assets/Barbemousse2-min.png',
    },
    {
      id: 2,
      routerLinkPath: '/projetPortfolio',
      imageUrlVignette: '../../assets/Portfolio-min.png',
      titre: 'Portfolio',
      sousTitreVignette:
        'Site personnel de présentation, réalisé avec Angular et Bulma.',
      sousTitrePresentation:
        'Portfolio de présentation de mes projets et de mon parcours.<br />',
      contenuPrincipal:
        "Second projet personnel pour lequel j'ai souhaité découvrir deux nouveaux frameworks :" +
        " Angular et Bulma. Plutôt que d'approffondir mes connaissances sur des outils déjà utilisés," +
        ' j\'ai préféré :</p><ul class="ml-3"><li>🎢 - Tester ma capacité à m\'adapter</li>' +
        '<li>🤓 - Avoir des éléments de comparaison entre technologies proches</li></ul><br />' +
        '<p class="has-text-justified">Mots clés : Angular(routing/SPA/Service/Injection de dépendance), Bulma.',
      annotationFinArticle: 'Réalisé en Juillet 2022.',
      imageUrlPresentation1: '../../assets/Portfolio-min.png',
      imageUrlPresentation2: '../../assets/Portfolio4-min.png',
      imageUrlPresentation3: '../../assets/Portfolio2-min.png',
      imageUrlPresentation4: '../../assets/Portfolio3-min.png',
    },
    {
      id: 3,
      routerLinkPath: '/projetEniEncheres',
      imageUrlVignette: '../../assets/encheresEncheresCoComp.png',
      titre: "Application d'enchères",
      sousTitreVignette:
        'Application WEB, réalisée dans le cadre de ma formation D2WM, avec JavaEE et Bootstrap.',
      sousTitrePresentation:
        "Site d'enchères-troc (avec système de points).<br />",
      contenuPrincipal:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premier projet d'école dont l'objectif était de mettre en " +
        'application les notions de POO, de persistance des données et développement en couches. ' +
        "L'accent a été mis sur les fonctionnalités plus que sur le rendu esthétique de l'application." +
        '<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En tant que "Scrum Master", j\'avais pour missions : ' +
        "concevoir l'architecture logicielle ; accompagner mes collègues (en difficulté à ce stade de la formation).</p>" +
        '<br /><p class="has-text-justified">Mots clés : JavaEE9, TomcatV9, SQL Server, modèle MVC, git/github, ' +
        'eclipse, pair programming, code review',
      annotationFinArticle: 'Réalisé en Juillet 2022.',
      imageUrlPresentation1: '../../../assets/enchereDiagClasse.png',
      imageUrlPresentation2: '../../../assets/enchereDiagEtatUC.png',
      imageUrlPresentation3: '../../../assets/encheresEncheresCoComp.png',
      imageUrlPresentation4: '../../../assets/encheresVendreComp.png',
    },
  ];

  getAllDescriptionsProjet(): DescriptionProjet[] {
    return this.descriptionsProjet;
  }
  getDescriptionProjetById(descriptionProjetId: number): DescriptionProjet {
    const descriptionProjet = this.descriptionsProjet.find(
      (descriptionProjet) => descriptionProjet.id === descriptionProjetId
    );
    if (!descriptionProjet) {
      throw new Error('projet non trouvé');
    } else {
      return descriptionProjet;
    }
  }
}
