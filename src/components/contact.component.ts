
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <!-- Info Column -->
        <div class="space-y-12">
          <div>
            <h1 class="text-5xl font-bold serif mb-6">Find Your Way</h1>
            <p class="text-stone-600 text-lg">We are located in the heart of Telipara, Bilaspur. Drop by for a coffee or just to say hello.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-amber-900">Address</h3>
              <p class="text-stone-600">
                Ground Floor, Maze The Cafe<br>
                Telephone Exchange Rd, Telipara<br>
                Chhattisgarh 495001, India
              </p>
              <a href="https://maps.google.com?q=Maze+The+Cafe+Telipara" target="_blank" class="text-sm font-bold text-stone-900 flex items-center">
                Get Directions <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-amber-900">Communication</h3>
              <p class="text-stone-600">
                +91 7752 459 646<br>
                hello&#64;mazethecafe.com
              </p>
              <div class="flex space-x-3">
                 <button class="px-4 py-2 bg-stone-100 rounded-lg text-sm font-bold hover:bg-stone-200">Call Us</button>
                 <button class="px-4 py-2 bg-stone-100 rounded-lg text-sm font-bold hover:bg-stone-200">Email Us</button>
              </div>
            </div>
          </div>

          <div class="rounded-3xl overflow-hidden h-[400px] shadow-xl border border-stone-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.025381665406!2d82.15256387532817!3d22.07669805128038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b167f433a51%3A0x37cfc7d3fd71af40!2zTWF6ZSBUaGUgQ2FmZQ!5e0!3m2!1sen!2sin!4v1715456000000!5m2!1sen!2sin" 
              width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
          </div>
        </div>

        <!-- Form Column -->
        <div class="bg-white p-10 rounded-3xl shadow-2xl border border-stone-100 self-start">
          <h2 class="text-3xl font-bold serif mb-8">Send a Message</h2>
          <form class="space-y-6" (submit)="handleSubmit($event)">
            <div>
              <label class="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
              <input type="text" class="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-900 outline-none transition-all" placeholder="Enter your name">
            </div>
            <div>
              <label class="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
              <input type="email" class="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-900 outline-none transition-all" placeholder="your@email.com">
            </div>
            <div>
              <label class="block text-sm font-bold text-stone-700 mb-2">Subject</label>
              <select class="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-900 outline-none transition-all">
                <option>General Inquiry</option>
                <option>Event Booking</option>
                <option>Private Function</option>
                <option>Feedback</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-bold text-stone-700 mb-2">Message</label>
              <textarea rows="4" class="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-900 outline-none transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" class="w-full py-4 bg-amber-900 text-white rounded-xl font-bold hover:bg-amber-800 transition-colors shadow-lg shadow-amber-900/20">Send Inquiry</button>
            
            @if (formSent()) {
              <div class="mt-4 p-4 bg-emerald-50 text-emerald-700 rounded-xl text-center font-medium">
                Thank you! Your message has been sent.
              </div>
            }
          </form>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  formSent = signal(false);

  handleSubmit(e: Event) {
    e.preventDefault();
    this.formSent.set(true);
    setTimeout(() => this.formSent.set(false), 5000);
  }
}
