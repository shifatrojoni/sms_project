import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'courses', component:CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
