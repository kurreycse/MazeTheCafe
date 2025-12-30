
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  template: `
    <section class="bg-amber-900 py-24 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-bold serif mb-6">Voices of Telipara</h1>
        <div class="flex items-center justify-center space-x-2 mb-4">
          @for (star of [1,2,3,4,5]; track star) {
            <svg class="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          }
        </div>
        <p class="text-2xl font-light">4.8 Average Google Rating from the Bilaspur Community</p>
        <div class="mt-8">
          <a href="https://www.google.com/maps/place/Maze+The+Cafe/" target="_blank" class="bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition-colors inline-block">Review Us on Google</a>
        </div>
      </div>
    </section>

    <!-- Review Grid -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        @for (review of reviews; track review.name) {
          <div class="break-inside-avoid bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div class="flex items-center mb-6">
              <img [src]="review.avatar" class="w-12 h-12 rounded-full object-cover mr-4" alt="Reviewer">
              <div>
                <h4 class="font-bold text-stone-900">{{review.name}}</h4>
                <p class="text-xs text-stone-400">{{review.date}}</p>
              </div>
            </div>
            <p class="text-stone-600 italic leading-relaxed mb-4">"{{review.comment}}"</p>
            <div class="flex text-amber-500 mb-4">
              @for (s of [1,2,3,4,5]; track s) {
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              }
            </div>
          </div>
        }
      </div>
    </section>

    <!-- Photo Section -->
    <section class="py-20 bg-stone-100 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 mb-10">
        <h2 class="text-3xl font-bold serif">Moments from Telipara</h2>
      </div>
      <div class="flex space-x-4 overflow-x-auto pb-8 px-4 snap-x">
        @for (img of customerPhotos; track img) {
          <div class="flex-shrink-0 w-72 h-72 snap-center">
            <img [src]="img" class="w-full h-full object-cover rounded-2xl shadow-lg" alt="Cafe Life in Bilaspur">
          </div>
        }
      </div>
    </section>
  `,
})
export class ReviewsComponent {
  reviews = [
    { name: 'Aman Verma', date: '2 weeks ago', avatar: 'https://i.pravatar.cc/150?u=aman', comment: 'Finally a place in Bilaspur with actual specialty coffee. The Telipara vibe is just amazing. Perfect for my morning work sessions.' },
    { name: 'Priya Sharma', date: '1 month ago', avatar: 'https://i.pravatar.cc/150?u=priya', comment: 'The Masala Chai Latte is soul-warming! Love the greenery and the peaceful atmosphere. A true hidden gem in Telipara.' },
    { name: 'Rahul Gupta', date: '3 days ago', avatar: 'https://i.pravatar.cc/150?u=rahul', comment: 'Excellent beans. The Shakerato with jaggery is a game changer for the Chhattisgarh heat. Highly recommend!' },
    { name: 'Sana Khan', date: '2 months ago', avatar: 'https://i.pravatar.cc/150?u=sana', comment: 'Best aesthetics in town. The Paneer Tikka Croissant is flaky and delicious. Bilaspur needed this!' },
    { name: 'Deepak Rao', date: '1 week ago', avatar: 'https://i.pravatar.cc/150?u=deepak', comment: 'Great spot to catch up with friends. The staff is very polite and knows their coffee well.' },
  ];

  customerPhotos = [
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=500',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=500',
    'https://images.unsplash.com/photo-1559925393-8be0ec41b5ec?auto=format&fit=crop&q=80&w=500',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=500',
    'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=500',
  ];
}
