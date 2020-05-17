import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TempMenuComponent } from './temp-menu/temp-menu.component';
import { DetectedRecyclableCanComponent } from './detected-recyclable-can/detected-recyclable-can.component';
import { DetectedRecyclableYogurtComponent } from './detected-recyclable-yogurt/detected-recyclable-yogurt.component';
import { DetectedNotRecyclableComponent } from './detected-not-recyclable/detected-not-recyclable.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'tempmenu', pathMatch: 'full', component: TempMenuComponent},
  { path: 'thisisatest', pathMatch: 'full', component: TempMenuComponent},
  { path: 'popcan', pathMatch: 'full', component: DetectedRecyclableCanComponent},
  { path: 'yogurt', pathMatch: 'full', component: DetectedRecyclableYogurtComponent},
  { path: 'pizzabox', pathMatch: 'full', component: DetectedNotRecyclableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
