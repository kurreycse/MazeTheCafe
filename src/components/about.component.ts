
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h4 class="text-amber-900 font-bold uppercase tracking-widest text-sm mb-4">Our Roots</h4>
      <h1 class="text-5xl md:text-6xl font-bold serif text-stone-900 mb-12">The Heart of <br>Telipara's Coffee Culture</h1>
      <div class="aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl bg-stone-200">
         <img src="https://picsum.photos/id/1060/1200/514" class="w-full h-full object-cover" alt="Artisanal Coffee Space in Bilaspur">
      </div>
      
      <div class="prose prose-lg mx-auto text-stone-600 text-left space-y-8">
        <p class="text-xl leading-relaxed">
          Maze The Cafe was born from a desire to blend the sophisticated world of specialty coffee with the warm, welcoming spirit of Chhattisgarh.
        </p>
        <p>
          In the maze of life, we found our peace in Bilaspur. Located on the bustling Ground Floor of Telephone Exchange Road, we've created a space where time slows down. "Maze" isn't just about the coffee; it's about the Chhattisgarhi community coming together over a shared love for craft and conversation.
        </p>
        <p>
          We source our beans from India's finest estates in Chikmagalur and Coorg, ensuring that our "Indian Soul" is present in every cup. We believe that Bilaspur deserves coffee that isn't just a drink, but a memorable experience.
        </p>
      </div>
      
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div class="text-center">
          <div class="text-4xl mb-4">🇮🇳</div>
          <h3 class="text-xl font-bold serif mb-2">Indian Souls</h3>
          <p class="text-stone-500 text-sm">Supporting Indian coffee farmers and local produce.</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-4">🤝</div>
          <h3 class="text-xl font-bold serif mb-2">Local Pride</h3>
          <p class="text-stone-500 text-sm">Bilaspur's own specialty coffee destination.</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-4">🧡</div>
          <h3 class="text-xl font-bold serif mb-2">Telipara Hospitality</h3>
          <p class="text-stone-500 text-sm">Where every guest is family.</p>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
