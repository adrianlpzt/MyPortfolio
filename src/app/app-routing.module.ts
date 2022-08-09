import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { SocialComponentComponent } from './social-component/social-component.component';

const routes: Routes = [
  {path:'', component: HomeComponentComponent},
  {path:'projects', component: ProjectsComponentComponent},
  {path:'social', component: SocialComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
