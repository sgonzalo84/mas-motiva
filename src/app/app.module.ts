import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CoverComponent} from './cover/cover.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {OfferComponent} from './offer/offer.component';
import {TargetComponent} from './target/target.component';
import {ValuesComponent} from './values/values.component';
import {GalleryComponent} from './gallery/gallery.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'oferta', component: OfferComponent},
  {path: 'publico', component: TargetComponent},
  {path: 'valores', component: ValuesComponent},
  {path: 'galeria', component: GalleryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    HomeComponent,
    FooterComponent,
    OfferComponent,
    TargetComponent,
    ValuesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {scrollPositionRestoration: 'top'} // <-- debugging purposes only
    ),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
