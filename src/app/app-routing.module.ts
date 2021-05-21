import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { CommentsPageComponent } from './components/comments-page/comments-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';


const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"about", component:AboutPageComponent},
  {path:"projects", component:ProjectsPageComponent},
  {path:"comments", component:CommentsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
