import { CUSTOM_ELEMENTS_SCHEMA, Compiler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CompilerConfig } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { HeaderComponent } from './profile/header/header.component';
//  import { FooterComponent } from './profile/footer/footer.component';
// import { IntroComponent } from './profile/intro/intro.component';
// import { ContactComponent } from './profile/contact/contact.component';
// import { SkillsComponent } from './profile/skills/skills.component';
// import { ExperienceComponent } from './profile/experience/experience.component';
// import { AboutComponent } from './profile/about/about.component';
// import { EducationComponent } from './profile/education/education.component';
import { PortfolioComponent } from './profile/portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { ProjectComponent } from './profile/project/project.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    // ProfileComponent,
    // HeaderComponent,
    //  FooterComponent
    // IntroComponent,
    // ContactComponent,
    // SkillsComponent,
    // ExperienceComponent,
    // AboutComponent,
    // EducationComponent,
    // PortfolioComponent,
    // ProjectComponent,
    // ProfileModule,
    // HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnotifyModule,
    // BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // SnotifyService,

    // RouterModule.forRoot(routes, config)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: 'SnotifyToastConfig',
      useValue: ToastDefaults,
    },
    SnotifyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
