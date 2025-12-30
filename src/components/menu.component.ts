
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <section class="bg-amber-50 py-20">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold serif text-stone-900 mb-6">The Bilaspur Selection</h1>
        <p class="text-stone-600 text-lg italic">From the hills of Chikmagalur to the heart of Telipara.</p>
      </div>
    </section>

    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        @for (cat of categories; track cat) {
          <button 
            (click)="activeCategory.set(cat)"
            class="px-6 py-2 rounded-full border transition-all"
            [class.bg-amber-900]="activeCategory() === cat"
            [class.text-white]="activeCategory() === cat"
            [class.border-amber-900]="activeCategory() === cat"
            [class.border-stone-300]="activeCategory() !== cat"
            [class.text-stone-600]="activeCategory() !== cat"
          >
            {{cat}}
          </button>
        }
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        @for (item of filteredMenu(); track item.name) {
          <div class="flex justify-between items-start border-b border-stone-100 pb-6">
            <div class="space-y-1">
              <h3 class="text-xl font-bold text-stone-900 flex items-center">
                {{item.name}}
                @if (item.tag) {
                  <span class="ml-3 px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] uppercase font-bold rounded">{{item.tag}}</span>
                }
              </h3>
              <p class="text-stone-500 text-sm italic">{{item.desc}}</p>
            </div>
            <p class="text-lg font-bold text-amber-900 ml-4">{{item.price}}</p>
          </div>
        }
      </div>

      <!-- Local Bites Section -->
      <div class="mt-24 p-12 bg-stone-900 rounded-3xl text-white text-center">
        <h3 class="text-2xl font-bold serif mb-4 italic">Indian Artisanal Bites</h3>
        <p class="text-stone-400 mb-8">Pair your coffee with our freshly made snacks</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div class="flex justify-between border-b border-white/10 pb-4">
            <span>Paneer Tikka Croissant</span>
            <span class="font-bold">₹195</span>
          </div>
          <div class="flex justify-between border-b border-white/10 pb-4">
            <span>Masala Cheese Omelette</span>
            <span class="font-bold">₹165</span>
          </div>
          <div class="flex justify-between border-b border-white/10 pb-4">
            <span>Spiced Corn & Jalapeno Toastie</span>
            <span class="font-bold">₹175</span>
          </div>
          <div class="flex justify-between border-b border-white/10 pb-4">
            <span>Classic Vada Pav (Maze Style)</span>
            <span class="font-bold">₹125</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class MenuComponent {
  categories = ['All', 'Coffee', 'Indian Specialty', 'Bakery', 'Iced'];
  activeCategory = signal('All');

  menuItems = [
    { category: 'Coffee', name: 'Telipara Espresso', desc: 'Bold, nutty, Indian single-origin blend.', price: '₹95' },
    { category: 'Coffee', name: 'Classic Cappuccino', desc: 'Silky micro-foam with a sprinkle of local cocoa.', price: '₹145' },
    { category: 'Coffee', name: 'Cortado', desc: 'Balanced equal parts of milk and espresso.', price: '₹130' },
    { category: 'Indian Specialty', name: 'Masala Chai Latte', desc: 'Home-style ginger & cardamom infusion.', price: '₹165', tag: 'Must Try' },
    { category: 'Indian Specialty', name: 'Rose & Cardamom Latte', desc: 'A floral, fragrant morning delight.', price: '₹185' },
    { category: 'Indian Specialty', name: 'Turmeric Golden Latte', desc: 'Immunity-boosting wellness in a cup.', price: '₹175' },
    { category: 'Bakery', name: 'Ghee Cake Slice', desc: 'Rich, moist, and infused with pure desi ghee.', price: '₹110', tag: 'Local Star' },
    { category: 'Bakery', name: 'Butter Croissant', desc: 'Flaky layers made with artisanal butter.', price: '₹120' },
    { category: 'Bakery', name: 'Walnut Brownie', desc: 'Gooey dark chocolate with roasted walnuts.', price: '₹155' },
    { category: 'Iced', name: 'Maze Shakerato', desc: 'Espresso shaken with ice and local jaggery.', price: '₹195' },
    { category: 'Iced', name: 'Iced Yuzu Americano', desc: 'Refreshing citrus twist for sunny Bilaspur days.', price: '₹175', tag: 'Summer' },
  ];

  filteredMenu = computed(() => {
    const active = this.activeCategory();
    if (active === 'All') return this.menuItems;
    return this.menuItems.filter(item => item.category === active);
  });
}
