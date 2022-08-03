import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { ProjectListComponent } from './project-list/project-list.component';

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
    path: 'presentationProjet',
    component: ProjectDescriptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
