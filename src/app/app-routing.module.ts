import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
{path:'addproduct',component:AddproductComponent}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
