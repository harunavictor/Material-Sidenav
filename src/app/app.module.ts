import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material-module';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { AccountsComponent } from './accounts/accounts/accounts.component';
import { CreateAccountComponent } from './create-account/create-account/create-account.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { CreateContactComponent } from './create-contact/create-contact/create-contact.component';
import { ActivitiesComponent } from './activities/activities/activities.component';
import { CreateActivityComponent } from './create-activity/create-activity/create-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    AccountsComponent,
    CreateAccountComponent,
    ContactsComponent,
    CreateContactComponent,
    ActivitiesComponent,
    CreateActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
