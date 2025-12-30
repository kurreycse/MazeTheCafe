
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <section class="bg-stone-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold serif text-stone-900 mb-4">The Daily Grind</h1>
          <p class="text-stone-500">Insights, news, and brewing tips from our team.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          @for (post of blogPosts; track post.title) {
            <article class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 flex flex-col h-full">
              <div class="h-64 overflow-hidden">
                <img [src]="post.image" class="w-full h-full object-cover" [alt]="post.title">
              </div>
              <div class="p-8 flex flex-col flex-grow">
                <div class="flex items-center text-xs text-stone-400 mb-4 uppercase tracking-widest font-bold">
                  <span>{{post.date}}</span>
                  <span class="mx-2">&bull;</span>
                  <span>{{post.category}}</span>
                </div>
                <h2 class="text-2xl font-bold serif mb-4 hover:text-amber-900 transition-colors cursor-pointer">{{post.title}}</h2>
                <p class="text-stone-600 mb-6 text-sm leading-relaxed flex-grow">{{post.excerpt}}</p>
                <button class="text-amber-900 font-bold text-sm uppercase tracking-wider hover:translate-x-2 transition-transform inline-flex items-center">
                  Read More <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-24 bg-amber-50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold serif mb-4">Join our Coffee Club</h2>
        <p class="text-stone-600 mb-8">Get notified about special offers, brewing workshops, and new seasonal launches.</p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" class="flex-grow px-6 py-4 rounded-full border border-stone-200 outline-none focus:ring-2 focus:ring-amber-900 transition-all">
          <button class="px-8 py-4 bg-amber-900 text-white rounded-full font-bold hover:bg-amber-800 transition-colors shadow-lg">Subscribe</button>
        </div>
      </div>
    </section>
  `,
})
export class BlogComponent {
  blogPosts = [
    { 
      title: 'Our Most Loved Coffee Drinks', 
      date: 'May 10, 2024', 
      category: 'Guides', 
      excerpt: 'Discover why our Dirty Coffee and Signature Yuzu Cold Brew have become local legends in Bilaspur.', 
      image: 'https://picsum.photos/id/425/800/600' 
    },
    { 
      title: 'Special Offers This Month', 
      date: 'May 01, 2024', 
      category: 'News', 
      excerpt: 'Celebrate the season with our new Buy 1 Get 1 free offer on all pastries every Tuesday and Thursday.', 
      image: 'https://picsum.photos/id/312/800/600' 
    },
    { 
      title: 'Why People Love Maze The Cafe', 
      date: 'April 22, 2024', 
      category: 'Lifestyle', 
      excerpt: 'We asked our regulars what keeps them coming back. From the light-filled interior to our signature beans, here is what they said.', 
      image: 'https://picsum.photos/id/1060/800/600' 
    },
    { 
      title: 'Perfecting the Pour Over', 
      date: 'April 15, 2024', 
      category: 'Brewing Tips', 
      excerpt: 'A step-by-step guide to achieving cafe-quality drip coffee at home using our custom roasted beans.', 
      image: 'https://picsum.photos/id/431/800/600' 
    },
  ];
}
