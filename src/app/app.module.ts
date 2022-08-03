import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimelineComponent } from './presentation/timeline/timeline.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './presentation/skills/skills.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { CguModalComponent } from './cgu-modal/cgu-modal.component';
import { PresentationPersoComponent } from './presentation/presentation-perso/presentation-perso.component';
import { ProjetBarbemousseComponent } from './projet-barbemousse/projet-barbemousse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimelineComponent,
    PresentationComponent,
    LandingPageComponent,
    FooterComponent,
    SkillsComponent,
    ProjectListComponent,
    ContactModalComponent,
    CguModalComponent,
    PresentationPersoComponent,
    ProjetBarbemousseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
