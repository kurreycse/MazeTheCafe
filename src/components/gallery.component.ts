
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <section class="py-20 bg-stone-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <h1 class="text-5xl font-bold serif mb-4">The Gallery</h1>
          <p class="text-stone-500 max-w-2xl mx-auto">Visual glimpses into our daily life at Maze The Cafe. From the steam of the espresso machine to the sunlight hitting our courtyard.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          @for (item of galleryItems; track item.id) {
            <div class="group relative overflow-hidden rounded-2xl aspect-square">
              <img [src]="item.url" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" [alt]="item.title">
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-center p-6">
                <div>
                  <h4 class="font-bold text-xl mb-2">{{item.title}}</h4>
                  <p class="text-sm text-stone-200">{{item.desc}}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class GalleryComponent {
  galleryItems = [
    { id: 1, url: 'https://picsum.photos/id/225/800/800', title: 'Fresh Brew', desc: 'The morning ritual starts here.' },
    { id: 2, url: 'https://picsum.photos/id/431/800/800', title: 'Main Hall', desc: 'A minimalist escape.' },
    { id: 3, url: 'https://picsum.photos/id/312/800/800', title: 'Signature Latte', desc: 'Art in a cup.' },
    { id: 4, url: 'https://picsum.photos/id/493/800/800', title: 'Pastry Selection', desc: 'Baked with love daily.' },
    { id: 5, url: 'https://picsum.photos/id/634/800/800', title: 'Garden View', desc: 'Our quiet courtyard corner.' },
    { id: 6, url: 'https://picsum.photos/id/453/800/800', title: 'Barista Craft', desc: 'Precision in every pour.' },
    { id: 7, url: 'https://picsum.photos/id/517/800/800', title: 'Afternoon Glow', desc: 'Golden hour at Maze.' },
    { id: 8, url: 'https://picsum.photos/id/676/800/800', title: 'Coffee Beans', desc: 'Sourced from local highlands.' },
    { id: 9, url: 'https://picsum.photos/id/835/800/800', title: 'Reading Nook', desc: 'The perfect spot for your favorite book.' },
  ];
}
