import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccordionComponent } from './clarity/accordion/accordion.component';
import { AlertsComponent } from './clarity/alerts/alerts.component';
import { BadgesComponent } from './clarity/badges/badges.component';
import { ButtonsComponent } from './clarity/buttons/buttons.component';
import { ButtonGroupComponent } from './clarity/button-group/button-group.component';
import { CardsComponent } from './clarity/cards/cards.component';
import { CheckboxesComponent } from './clarity/checkboxes/checkboxes.component';
import { DatagridComponent } from './clarity/datagrid/datagrid.component';
import { DatepickerComponent } from './clarity/datepicker/datepicker.component';
import { DropdownsComponent } from './clarity/dropdowns/dropdowns.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent, WelcomeComponent, AccordionComponent, AlertsComponent, BadgesComponent, ButtonsComponent, ButtonGroupComponent, CardsComponent, CheckboxesComponent, DatagridComponent, DatepickerComponent, DropdownsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
