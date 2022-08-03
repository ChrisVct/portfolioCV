import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjetBarbemousseComponent } from './projet-barbemousse/projet-barbemousse.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
