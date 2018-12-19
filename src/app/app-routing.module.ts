import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PizzasComponent} from './pizzas/pizzas.component';
import {PizzaDetailComponent} from './pizza-detail/pizza-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PizzasComponent
  },
  {
    path: ':pizzaName',
    component: PizzaDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
