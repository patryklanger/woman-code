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
import { YellowBtnComponent } from './ui/elements/buttons/yellow-btn/yellow-btn.component';
import { StoresComponent } from './ui/elements/stores/stores.component';
import { DoctorComponent } from './elements/doctor/doctor.component';
import { DividerComponent } from './ui/elements/divider/divider.component';
import { YelBorderBtnComponent } from './ui/elements/buttons/yel-border-btn/yel-border-btn.component';
import { VerticalDividerComponent } from './ui/elements/vertical-divider/vertical-divider.component';
import { PhotoBgComponent } from './ui/elements/photo-bg/photo-bg.component';
import { ScreenGalleryComponent } from './ui/elements/screen-gallery/screen-gallery.component';
import { BusinessPartnersComponent } from './elements/business-partners/business-partners.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScrollDownComponent,
    MenuComponent,
    StickyHeaderComponent,
    PresentationPageComponent,
    ParTitleComponent,
    RightSwipeComponent,
    ParTitleLeftComponent,
    YellowBtnComponent,
    StoresComponent,
    DoctorComponent,
    DividerComponent,
    YelBorderBtnComponent,
    VerticalDividerComponent,
    PhotoBgComponent,
    ScreenGalleryComponent,
    BusinessPartnersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
