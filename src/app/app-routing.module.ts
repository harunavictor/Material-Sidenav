import { CreateActivityComponent } from './create-activity/create-activity/create-activity.component';
import { CreateAccountComponent } from './create-account/create-account/create-account.component';
import { AccountsComponent } from './accounts/accounts/accounts.component';
import { CreateContactComponent } from './create-contact/create-contact/create-contact.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:  '', redirectTo:  'contacts', pathMatch:  'full' },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'create-contact',
    component: CreateContactComponent
  },
  {
    path: 'activities',
    component: CreateActivityComponent
  },
  {
    path: 'create-activity',
    component: CreateActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
