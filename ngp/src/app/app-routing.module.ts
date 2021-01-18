import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';

const routes: Routes = [
  { path: 'phones', component: PhonesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch:'full'},
  { path: 'detail/:id', component: PhoneDetailComponent},
  { path: 'user', component: UserPermissionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
