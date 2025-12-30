
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './src/app.component';
import { HomeComponent } from './src/components/home.component';
import { AboutComponent } from './src/components/about.component';
import { MenuComponent } from './src/components/menu.component';
import { ReviewsComponent } from './src/components/reviews.component';
import { ContactComponent } from './src/components/contact.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '' }
    ], withHashLocation())
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
