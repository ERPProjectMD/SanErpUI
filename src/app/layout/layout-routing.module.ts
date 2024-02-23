import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SupplierListComponent } from '../pages/supplier/supplier-list/supplier-list.component';

const routes: Routes = [
  {
    path: '', component: SideNavComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path:'Supplier', component : SupplierListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
