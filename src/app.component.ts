
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20 items-center">
          <div class="flex-shrink-0 flex items-center">
            <a routerLink="/" class="text-2xl font-bold text-amber-900 tracking-tighter">MAZE <span class="text-stone-400 font-light">THE CAFE</span></a>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8">
            <a routerLink="/" class="text-stone-600 hover:text-amber-900 transition-colors">Home</a>
            <a routerLink="/about" class="text-stone-600 hover:text-amber-900 transition-colors">About</a>
            <a routerLink="/menu" class="text-stone-600 hover:text-amber-900 transition-colors">Menu</a>
            <a routerLink="/reviews" class="text-stone-600 hover:text-amber-900 transition-colors">Reviews</a>
            <a routerLink="/contact" class="px-4 py-2 bg-amber-900 text-white rounded-full hover:bg-amber-800 transition-colors">Contact</a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button (click)="toggleMenu()" class="text-stone-600 p-2">
              @if (!isMenuOpen()) {
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              } @else {
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              }
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isMenuOpen()) {
        <div class="md:hidden bg-white border-b border-stone-200 py-4 px-6 flex flex-col space-y-4">
          <a routerLink="/" (click)="toggleMenu()" class="text-stone-600 font-medium">Home</a>
          <a routerLink="/about" (click)="toggleMenu()" class="text-stone-600 font-medium">About</a>
          <a routerLink="/menu" (click)="toggleMenu()" class="text-stone-600 font-medium">Menu</a>
          <a routerLink="/reviews" (click)="toggleMenu()" class="text-stone-600 font-medium">Reviews</a>
          <a routerLink="/contact" (click)="toggleMenu()" class="text-amber-900 font-bold">Contact</a>
        </div>
      }
    </nav>

    <main class="min-h-screen">
      <router-outlet></router-outlet>
    </main>

    <footer class="bg-stone-900 text-stone-300 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Info -->
          <div class="space-y-4">
            <h3 class="text-white text-xl font-bold serif">Maze The Cafe</h3>
            <p class="text-sm leading-relaxed">
              Your neighborhood escape for specialty coffee, homemade pastries, and tranquil vibes in Telipara.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-amber-500 transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" class="hover:text-amber-500 transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            </div>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-white font-semibold mb-4">Contact Us</h4>
            <ul class="space-y-2 text-sm">
              <li>Ground Floor, Maze The Cafe</li>
              <li>Telephone Exchange Rd, Telipara</li>
              <li>Chhattisgarh 495001, India</li>
              <li class="pt-2 text-amber-500 font-medium">+91 7752 459 646</li>
              <li>hello&#64;mazethecafe.com</li>
            </ul>
          </div>

          <!-- Hours -->
          <div>
            <h4 class="text-white font-semibold mb-4">Opening Hours</h4>
            <ul class="space-y-2 text-sm">
              <li class="flex justify-between"><span>Mon - Fri</span> <span>08:00 - 17:00</span></li>
              <li class="flex justify-between"><span>Sat - Sun</span> <span>09:00 - 18:00</span></li>
            </ul>
          </div>

          <!-- Location Embed -->
          <div class="rounded-lg overflow-hidden h-48 border border-stone-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.025381665406!2d82.15256387532817!3d22.07669805128038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b167f433a51%3A0x37cfc7d3fd71af40!2zTWF6ZSBUaGUgQ2FmZQ!5e0!3m2!1sen!2sin!4v1715456000000!5m2!1sen!2sin" 
              width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
          <p>&copy; 2024 Maze The Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
})
export class AppComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
