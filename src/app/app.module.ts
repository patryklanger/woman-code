import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ScrollDownComponent } from './elements/scroll-down/scroll-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './elements/menu/menu.component';
import { StickyHeaderComponent } from './elements/sticky-header/sticky-header.component';
import { PresentationPageComponent } from './pages/presentation-page/presentation-page.component';
import { ParTitleComponent } from './ui/par-title/par-title.component';
import { RightSwipeComponent } from './ui/right-swipe/right-swipe.component';
import { ParTitleLeftComponent } from './ui/par-title-left/par-title-left.component';

@NgModule({
  declarations: [AppComponent, MainComponent, ScrollDownComponent, MenuComponent, StickyHeaderComponent, PresentationPageComponent, ParTitleComponent, RightSwipeComponent, ParTitleLeftComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
