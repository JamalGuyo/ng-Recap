import { DropdownsComponent } from './clarity/dropdowns/dropdowns.component';
import { CardsComponent } from './clarity/cards/cards.component';
import { ButtonGroupComponent } from './clarity/button-group/button-group.component';
import { ButtonsComponent } from './clarity/buttons/buttons.component';
import { BadgesComponent } from './clarity/badges/badges.component';
import { AlertsComponent } from './clarity/alerts/alerts.component';
import { AccordionComponent } from './clarity/accordion/accordion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CheckboxesComponent } from './clarity/checkboxes/checkboxes.component';
import { DatagridComponent } from './clarity/datagrid/datagrid.component';
import { DatepickerComponent } from './clarity/datepicker/datepicker.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products-list', component: ProductListComponent },
  { path: 'products-list/:id', component: ProductDetailComponent },
  { path: 'clr-accordion', component: AccordionComponent },
  { path: 'clr-alerts', component: AlertsComponent },
  { path: 'clr-badges', component: BadgesComponent },
  { path: 'clr-buttons', component: ButtonsComponent },
  { path: 'clr-button-group', component: ButtonGroupComponent },
  { path: 'clr-cards', component: CardsComponent },
  { path: 'clr-checkboxes', component: CheckboxesComponent },
  { path: 'clr-datagrid', component: DatagridComponent },
  { path: 'clr-datepicker', component: DatepickerComponent },
  { path: 'clr-dropdowns', component: DropdownsComponent },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
