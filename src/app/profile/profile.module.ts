import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    PortfolioComponent,
    SkillsComponent,
    AboutComponent,
    IntroComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    ProjectComponent,

  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    FormsModule,
    SnotifyModule,
    // SnotifyService,
    // ToastDefaults
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]
})
export class ProfileModule { }
