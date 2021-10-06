import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PresentationPageComponent } from './pages/presentation-page/presentation-page.component';
import { AboutAppComponent } from './pages/about-app/about-app.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'our-app/:id', component: PresentationPageComponent },
  { path: 'about-app', component: AboutAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
