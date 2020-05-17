import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { TempMenuComponent } from './temp-menu/temp-menu.component';

import { RouterModule } from '@angular/router';
import { DetectedRecyclableCanComponent } from './detected-recyclable-can/detected-recyclable-can.component';
import { DetectedRecyclableYogurtComponent } from './detected-recyclable-yogurt/detected-recyclable-yogurt.component';
import { DetectedNotRecyclableComponent } from './detected-not-recyclable/detected-not-recyclable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TempMenuComponent,
    DetectedRecyclableCanComponent,
    DetectedRecyclableYogurtComponent,
    DetectedNotRecyclableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
