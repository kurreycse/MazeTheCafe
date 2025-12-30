
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1920" alt="Warm Cafe Interior" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 hero-gradient"></div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-5xl md:text-7xl text-white font-bold mb-6 tracking-tight">Bilaspur's Favorite <span class="italic text-amber-200">Brew</span></h1>
        <p class="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
          A hidden sanctuary in the heart of Telipara. Experience premium specialty coffee blended with authentic Chhattisgarhi hospitality.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a routerLink="/menu" class="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-all transform hover:scale-105">Explore Our Menu</a>
          <a routerLink="/contact" class="px-8 py-4 bg-white text-stone-900 rounded-full font-semibold hover:bg-stone-100 transition-all transform hover:scale-105">Find Your Maze</a>
        </div>
      </div>
    </section>

    <!-- Featured Section -->
    <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800" alt="Barista Pouring Coffee" class="rounded-2xl shadow-2xl">
          <div class="absolute -bottom-8 -right-8 bg-amber-900 text-white p-8 rounded-2xl hidden md:block">
            <p class="text-3xl font-bold italic serif">"Desi Dil, Global Beans."</p>
          </div>
        </div>
        <div class="space-y-6">
          <h2 class="text-4xl font-bold serif text-stone-900 leading-tight">Brewing Joy in Bilaspur, <br>One Cup at a Time</h2>
          <p class="text-lg text-stone-600 leading-relaxed">
            At Maze The Cafe, we bring the world's finest coffee beans to the soul of Chhattisgarh. Our baristas are masters of their craft, ensuring that every pour-over and latte is a tribute to the community we love.
          </p>
          <p class="text-lg text-stone-600 leading-relaxed">
            Whether it's a humid afternoon or a breezy winter evening, our Telipara nook is designed to be your favorite retreat from the Bilaspur bustle.
          </p>
          <div class="pt-4 grid grid-cols-2 gap-8">
            <div>
              <p class="text-3xl font-bold text-amber-900 serif">4.8/5</p>
              <p class="text-sm text-stone-500 uppercase tracking-wider">On Google Maps</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-amber-900 serif">100%</p>
              <p class="text-sm text-stone-500 uppercase tracking-wider">Homegrown Passion</p>
            </div>
          </div>
          <div class="pt-6">
            <a routerLink="/about" class="text-amber-900 font-bold border-b-2 border-amber-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors">Learn About Our Journey &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Menu CTA -->
    <section class="bg-stone-100 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 class="text-3xl font-bold serif mb-4">Telipara Specials</h2>
        <p class="text-stone-600">Our signature twists on global classics</p>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        @for (item of featuredItems; track item.name) {
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div class="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">{{item.icon}}</span>
            </div>
            <h3 class="text-xl font-bold mb-2">{{item.name}}</h3>
            <p class="text-stone-500 text-sm mb-4">{{item.desc}}</p>
            <p class="text-amber-900 font-bold">{{item.price}}</p>
          </div>
        }
      </div>
      <div class="text-center mt-12">
        <a routerLink="/menu" class="px-8 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors">Full Menu</a>
      </div>
    </section>
  `,
})
export class HomeComponent {
  featuredItems = [
    { name: 'Telipara Dirty Coffee', desc: 'Chilled milk with a bold double shot of Indian single-origin espresso.', price: '₹185', icon: '☕' },
    { name: 'Kesar Cold Brew', desc: '12-hour steeped coffee infused with premium saffron and a touch of honey.', price: '₹210', icon: '✨' },
    { name: 'Masala Chai Latte', desc: 'Traditional spice blend met with velvety steamed milk and a shot of espresso.', price: '₹165', icon: '🍃' },
  ];
}
