import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { CguModalComponent } from './cgu-modal/cgu-modal.component';
import { PresentationPersoComponent } from './presentation-perso/presentation-perso.component';

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
    ProjectDescriptionComponent,
    ContactModalComponent,
    CguModalComponent,
    PresentationPersoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
