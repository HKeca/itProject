import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nab-bar.component';
import { PortfolioComponent } from './Portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [  { path: '', component: appComponent },
{ path: 'portfolio', component: PortfolioComponent },
{ path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
