import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjetBarbemousseComponent } from './project-list/projet-barbemousse/projet-barbemousse.component';
import { ProjetPortfolioComponent } from './project-list/projet-portfolio/projet-portfolio.component';
import { ProjetEniEncheresComponent } from './project-list/projet-eni-encheres/projet-eni-encheres.component';
import { PresentationProjetComponent } from './presentation-projet/presentation-projet.component';

const routes: Routes = [
  {
    path: 'presentation',
    component: PresentationComponent,
  },
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'realisations',
    component: ProjectListComponent,
  },
  {
    path: 'projetBarbemousse',
    component: ProjetBarbemousseComponent,
  },
  {
    path: 'projetPortfolio',
    component: ProjetPortfolioComponent,
  },
  {
    path: 'projetEniEncheres',
    component: ProjetEniEncheresComponent,
  },
  {
    path: 'realisations/:id',
    component: PresentationProjetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
