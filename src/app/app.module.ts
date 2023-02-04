import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

//components
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferenceComponent } from './reference/reference.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  declarations: [
    HomeComponent,
    AppComponent,
    HelloComponent,
    AboutComponent,
    ReferenceComponent,
    EducationComponent,
    SkillsComponent,
    NotFoundPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
