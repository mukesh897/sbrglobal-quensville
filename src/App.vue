<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-8">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l2.293 2.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </div>
              <div class="text-2xl font-bold text-gray-900">SBR GROUP</div>
            </div>
            <div class="hidden md:flex space-x-6">
              <a href="#home" class="text-gray-700 hover:text-teal-500 transition-colors">Home</a>
              <a href="#highlights" class="text-gray-700 hover:text-teal-500 transition-colors">Highlights</a>
              <a href="#pricing" class="text-gray-700 hover:text-teal-500 transition-colors">Pricing & Floor Plan</a>
              <a href="#amenities" class="text-gray-700 hover:text-teal-500 transition-colors">Amenities</a>
              <a href="#gallery" class="text-gray-700 hover:text-teal-500 transition-colors">Gallery</a>
              <a href="#location" class="text-gray-700 hover:text-teal-500 transition-colors">Location</a>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button class="bg-gray-800 text-white px-4 py-2 rounded text-sm hidden md:block">Schedule Site Visit</button>
            <div class="flex items-center space-x-2 text-gray-700 font-semibold hidden md:flex">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+917204508777</span>
            </div>
            <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
          <div class="flex flex-col space-y-4">
            <a href="#home" class="text-gray-700 hover:text-teal-500 transition-colors px-4 py-2">Home</a>
            <a href="#highlights" class="text-gray-700 hover:text-teal-500 transition-colors px-4 py-2">Highlights</a>
            <a href="#pricing" class="text-gray-700 hover:text-teal-500 transition-colors px-4 py-2">Pricing & Floor Plan</a>
            <a href="#amenities" class="text-gray-700 hover:text-teal-500 transition-colors px-4 py-2">Amenities</a>
            <a href="#gallery" class="text-gray-700 hover:text-teal-500 transition-colors px-4 py-2">Gallery</a>
            <a href="#location" class="text-gray-700 hover:text-teal-500 transition-colors px-4 py-2">Location</a>
            <div class="px-4 py-2">
              <button class="bg-gray-800 text-white px-4 py-2 rounded text-sm w-full">Schedule Site Visit</button>
            </div>
            <div class="flex items-center space-x-2 text-gray-700 font-semibold px-4 py-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+917204508777</span>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="flex flex-col lg:flex-row">
      <!-- Left Content -->
      <div class="flex-1">
        <!-- Hero Section -->
        <section id="home" class="relative">
          <div class="relative h-[500px] md:h-[700px] bg-gray-200">
            <img src="/src/assets/images/contact.png" 
                 alt="SBR Global Queens Ville" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
            
            <!-- Hero Card -->
            <div class="absolute top-4 left-4 right-4 md:top-12 md:left-8 md:right-auto bg-white rounded-xl shadow-2xl p-4 md:p-8 max-w-lg">
              <div class="text-sm text-gray-500 mb-2">New Launch</div>
              <h1 class="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">SBR GLOBAL QUEENS VILLE</h1>
              <div class="text-sm md:text-base text-gray-600 mb-4 md:mb-6">At Kumbalgodu, Mysore Road, Bangalore</div>
              
              <!-- Teal bordered box -->
              <div class="border-2 border-teal-500 rounded-lg p-4 mb-4 bg-teal-50">
                <div class="flex items-center space-x-2 text-teal-700 font-semibold">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>On-Spot Booking Perks Await! Call Now</span>
                </div>
              </div>
              
              <!-- Phone number box -->
              <div class="border-2 border-teal-500 rounded-lg p-4 mb-6 bg-teal-50">
                <div class="flex items-center space-x-2 text-teal-700 font-semibold text-lg">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+917204508777</span>
                </div>
              </div>
              
              <!-- Project specs -->
              <div class="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6 text-xs md:text-sm">
                <div class="text-center">
                  <div class="text-gray-500 text-xs">Land Parcel</div>
                  <div class="font-bold text-gray-900 text-sm md:text-base">8 Acres</div>
                </div>
                <div class="text-center">
                  <div class="text-gray-500 text-xs">Structure</div>
                  <div class="font-bold text-gray-900 text-sm md:text-base">2B + G + 4</div>
                </div>
                <div class="text-center">
                  <div class="text-gray-500 text-xs">Units</div>
                  <div class="font-bold text-gray-900 text-sm md:text-base">441</div>
                </div>
              </div>
              
              <!-- Benefits list -->
              <div class="mb-4 md:mb-6">
                <ul class="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                  <li class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-teal-500 rounded-full transform rotate-45 flex-shrink-0"></div>
                    <span>Limited Time Period Offer</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-teal-500 rounded-full transform rotate-45 flex-shrink-0"></div>
                    <span>High-Speed Elevators</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-teal-500 rounded-full transform rotate-45 flex-shrink-0"></div>
                    <span>Early Buy Discounts</span>
                  </li>
                </ul>
              </div>
              
              <!-- Pricing info -->
              <div class="text-xs md:text-sm text-gray-700 mb-4 md:mb-6">
                <div class="font-semibold">Luxurious 2 & 3 BHK Homes</div>
                <div class="text-base md:text-lg font-bold text-teal-600">Starting Price ₹ 90 Lacs* Onwards</div>
              </div>
              
              <button class="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold w-full hover:bg-gray-900 transition-colors">
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section class="py-16 px-8">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-6">About SBR Global Queens Ville</h2>
                <p class="text-gray-700 leading-relaxed mb-6">
                  An exquisite villament community spread across 8 acres on Mysore Road near Rajarajeshwari College of Engineering. 
                  Thoughtfully crafted 2BHK Duplex and Penthouse Villaments, 2BHK and 3BHK Simplex, blending luxury of independent 
                  villa with the ease of apartment living. Experience privacy, picturesque views, and a truly sophisticated lifestyle.
                </p>
                <button class="btn-primary">Enquire Now</button>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80" 
                     alt="Luxury Living Room" 
                     class="w-full h-96 object-cover rounded-lg">
              </div>
            </div>
          </div>
        </section>

        <!-- Highlights Section -->
        <section id="highlights" class="py-16 bg-gray-50">
          <div class="max-w-6xl mx-auto px-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">SBR Global Queens Ville - Highlights</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">2 Grand Clubhouses</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">30+ World-Class Amenities</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">Aluminium Formwork</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">24/7 Security</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Area & Pricing Section -->
        <section id="pricing" class="py-16">
          <div class="max-w-6xl mx-auto px-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Area & Pricing</h2>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="overflow-x-auto">
                <table class="w-full min-w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Area</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">2 BHK</td>
                    <td class="px-6 py-4 text-sm text-gray-600">1039 Sq.Ft.</td>
                    <td class="px-6 py-4 text-sm text-gray-900 font-semibold">₹ 90 Lacs* Onwards</td>
                    <td class="px-6 py-4">
                      <button class="btn-secondary text-sm">Complete Pricing Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">3 BHK</td>
                    <td class="px-6 py-4 text-sm text-gray-600">2316 Sq.Ft.</td>
                    <td class="px-6 py-4 text-sm text-gray-900 font-semibold">₹ 1.94 Cr* Onwards</td>
                    <td class="px-6 py-4">
                      <button class="btn-secondary text-sm">Complete Pricing Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">3 BHK Garden Villament</td>
                    <td class="px-6 py-4 text-sm text-gray-600">2104 - 2204 Sq.Ft.</td>
                    <td class="px-6 py-4 text-sm text-gray-900 font-semibold">₹ 1.76 - 1.85 Cr* Onwards</td>
                    <td class="px-6 py-4">
                      <button class="btn-secondary text-sm">Complete Pricing Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">3 BHK Sky Villament</td>
                    <td class="px-6 py-4 text-sm text-gray-600">2104 - 2204 Sq.Ft.</td>
                    <td class="px-6 py-4 text-sm text-gray-900 font-semibold">₹ 1.76 - 1.85 Cr* Onwards</td>
                    <td class="px-6 py-4">
                      <button class="btn-secondary text-sm">Complete Pricing Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">3 BHK - Penthouse</td>
                    <td class="px-6 py-4 text-sm text-gray-600">2403 - 2410 Sq.Ft.</td>
                    <td class="px-6 py-4 text-sm text-gray-900 font-semibold">₹ 2.29 - 2.30 Cr* Onwards</td>
                    <td class="px-6 py-4">
                      <button class="btn-secondary text-sm">Complete Pricing Details</button>
                    </td>
                  </tr>
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- Master Plan & Unit Plan Section -->
        <section class="py-16 bg-gray-900">
          <div class="max-w-6xl mx-auto px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="text-center">
                <img src="/src/assets/images/masterplan.png" 
                     alt="Master Plan Layout" 
                     class="h-64 w-full rounded-lg mb-4 object-cover">
                <button class="btn-primary">Request Master Layout Plan</button>
              </div>
              <div class="text-center">
                <img src="/src/assets/images/unitplan.png" 
                     alt="Unit Plan Layout" 
                     class="h-64 w-full rounded-lg mb-4 object-cover">
                <button class="btn-primary">Request Unit Layout Plan</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Luxurious Amenities Section -->
        <section id="amenities" class="py-16">
          <div class="max-w-6xl mx-auto px-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Luxurious Amenities</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div class="text-center">
              <img src="/src/assets/images/BasketBall.webp" 
                   alt="Basketball Court" 
                   class="h-32 w-full rounded-lg mb-3 object-cover">
                <div class="text-sm font-medium text-gray-700">BASKETBALL</div>
              </div>
              <div class="text-center">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                     alt="Gym" 
                     class="h-32 w-full rounded-lg mb-3 object-cover">
                <div class="text-sm font-medium text-gray-700">GYM</div>
              </div>
              <div class="text-center">
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                     alt="Swimming Pool" 
                     class="h-32 w-full rounded-lg mb-3 object-cover">
                <div class="text-sm font-medium text-gray-700">SWIMMING POOL</div>
              </div>
              <div class="text-center">
                <img src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                     alt="Billiards" 
                     class="h-32 w-full rounded-lg mb-3 object-cover">
                <div class="text-sm font-medium text-gray-700">BILLIARDS</div>
              </div>
              <div class="text-center">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                     alt="Jogging Track" 
                     class="h-32 w-full rounded-lg mb-3 object-cover">
                <div class="text-sm font-medium text-gray-700">JOGGING TRACK</div>
              </div>
              <div class="text-center">
                <img src="/src/assets/images/Tennis.png" 
                     alt="Tennis Court" 
                     class="h-32 w-full rounded-lg mb-3 object-cover">
                <div class="text-sm font-medium text-gray-700">MULTI-PURPOSE COURT</div>
              </div>
            </div>
            <div class="text-center mt-8">
              <button class="btn-secondary">Request All Amenities</button>
            </div>
          </div>
        </section>

        <!-- Project Gallery Section -->
        <section id="gallery" class="py-16 bg-gray-50">
          <div class="max-w-6xl mx-auto px-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Project Gallery</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                   alt="Project Exterior" 
                   class="h-48 w-full rounded-lg object-cover">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                   alt="Luxury Interior" 
                   class="h-48 w-full rounded-lg object-cover">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                   alt="Modern Kitchen" 
                   class="h-48 w-full rounded-lg object-cover">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                   alt="Master Bedroom" 
                   class="h-48 w-full rounded-lg object-cover">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                   alt="Balcony View" 
                   class="h-48 w-full rounded-lg object-cover">
            </div>
          </div>
        </section>

        <!-- Location Advantage Section -->
        <section id="location" class="py-16">
          <div class="max-w-6xl mx-auto px-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">SBR Global Queens Ville Location Advantage</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-6">Connectivity</h3>
                <ul class="space-y-3">
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span class="text-gray-700">NICE Road, Mysore Road Toll Booth - 4 Km</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span class="text-gray-700">Sri Swaminarayan Gurukul International School - 5 Km</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span class="text-gray-700">Rajarajeshwari Medical College & Hospital - 5 Km</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span class="text-gray-700">Bangalore Mysore Road Highway - 1 Km</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span class="text-gray-700">Kengeri Railway Station - 6 Km</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span class="text-gray-700">Challaghatta Metro Station - 3 Km</span>
                  </li>
                </ul>
                <button class="btn-primary mt-6">Request Location Details</button>
              </div>
              <img src="/src/assets/images/location.png" 
                   alt="Location Map" 
                   class="h-96 w-full rounded-lg object-cover">
            </div>
          </div>
        </section>

        <!-- Schedule Site Visit Section -->
        <section class="py-16 bg-gray-50">
          <div class="max-w-6xl mx-auto px-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Schedule a Site Visit</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div class="bg-white p-8 rounded-lg shadow-lg">
                <form @submit.prevent="sendEmail('site-visit')" class="space-y-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input v-model="formData.name" type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">India (+91) - Mobile No.</label>
                    <input v-model="formData.phone" type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">E-Mail Address</label>
                    <input v-model="formData.email" type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                    <textarea v-model="formData.requirements" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" :disabled="isSubmitting" class="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold w-full transition-colors">
                    {{ isSubmitting ? 'Submitting...' : 'Pre-Register Now' }}
                  </button>
                  <div v-if="submitMessage" class="text-sm text-green-600 mt-2">
                    {{ submitMessage }}
                  </div>
                </form>
              </div>
              <div>
                <img src="/src/assets/images/contact.png" 
                     alt="SBR Global Queens Ville" 
                     class="w-full h-full object-cover rounded-lg">
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Right Sidebar -->
      <div class="hidden lg:block w-80 bg-white border-l border-gray-200 p-6 sticky top-16 h-screen overflow-y-auto">
        <div class="mb-8">
          <h3 class="text-lg font-bold text-gray-900 mb-6">Pre-Register here for Best Offers</h3>
          <form @submit.prevent="sendEmail('sidebar')" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input v-model="formData.name" type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">India (+91)</label>
              <div class="flex">
                <select class="px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>+91</option>
                </select>
                <input v-model="formData.phone" type="tel" placeholder="Mobile No." required class="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">E-Mail Address</label>
              <input v-model="formData.email" type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
              <textarea v-model="formData.requirements" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"></textarea>
            </div>
            <button type="submit" :disabled="isSubmitting" class="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold w-full transition-colors">
              {{ isSubmitting ? 'Submitting...' : 'Pre-Register Now' }}
            </button>
            <div v-if="submitMessage" class="text-sm text-green-600 mt-2">
              {{ submitMessage }}
            </div>
          </form>
          
          <p class="text-xs text-gray-500 mt-4 leading-relaxed">
            By submitting this form, you agree to our Privacy Policy and consent to being contacted by our team. 
            You hereby authorize our company representatives to contact you and this consent overrides DNC/NDNC registration.
          </p>
        </div>

        <div class="space-y-6 mb-8">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
            </div>
            <div>
              <div class="font-semibold text-gray-900">Instant Call Back</div>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"></path>
              </svg>
            </div>
            <div>
              <div class="font-semibold text-gray-900">Free Site Visit</div>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941a1 1 0 102 0v-1.941a4.535 4.535 0 001.676-.662C13.398 9.765 14 8.99 14 8c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 5.092V5z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <div class="font-semibold text-gray-900">Best Price</div>
            </div>
          </div>
        </div>

        <button class="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold w-full hover:bg-gray-900 transition-colors">
          Request Call Back
        </button>
      </div>

      <!-- Mobile Sidebar -->
      <div class="lg:hidden bg-white border-t border-gray-200 p-4">
        <div class="max-w-md mx-auto">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Pre-Register here for Best Offers</h3>
          <form @submit.prevent="sendEmail('mobile')" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input v-model="formData.name" type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">India (+91) - Mobile No.</label>
              <input v-model="formData.phone" type="tel" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">E-Mail Address</label>
              <input v-model="formData.email" type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
              <textarea v-model="formData.requirements" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"></textarea>
            </div>
            <button type="submit" :disabled="isSubmitting" class="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold w-full transition-colors">
              {{ isSubmitting ? 'Submitting...' : 'Pre-Register Now' }}
            </button>
            <div v-if="submitMessage" class="text-sm text-green-600 mt-2">
              {{ submitMessage }}
            </div>
          </form>
          
          <p class="text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our Privacy Policy and consent to being contacted by our team.
          </p>
        </div>
      </div>
    </div>

    <!-- Floating Contact Buttons -->
    <div class="fixed right-4 bottom-4 space-y-3 z-50">
      <a href="https://wa.me/917204508777" class="block w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
        </svg>
      </a>
      <a href="tel:+917204508777" class="block w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
        </svg>
      </a>
      <a href="https://wa.me/917204508777" class="block w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors">
        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-6xl mx-auto px-8">
        <div class="text-center text-sm text-gray-400">
          <p class="mb-2">We are Authorized Channel Partner with many Developers.</p>
          <p class="mb-4">Disclaimer & Privacy Policy | Digital Media Planned - Growel.coMedia</p>
          <p>All Rights Reserved. © 2025</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

export default {
  name: 'App',
  setup() {
    const mobileMenuOpen = ref(false)
    const formData = ref({
      name: '',
      email: '',
      phone: '',
      requirements: ''
    })
    const isSubmitting = ref(false)
    const submitMessage = ref('')
    
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const sendEmail = async (formType = 'sidebar') => {
      isSubmitting.value = true
      submitMessage.value = ''
      
      try {
        const templateParams = {
          from_name: formData.value.name,
          from_email: formData.value.email,
          phone: formData.value.phone,
          requirements: formData.value.requirements,
          form_type: formType
        }
        
        await emailjs.send(
          'service_1o90b3i',
          'template_msncxgt',
          templateParams,
          'CAXeNuLKdK4qtQmdn'
        )
        
        submitMessage.value = 'Thank you! We will contact you soon.'
        formData.value = { name: '', email: '', phone: '', requirements: '' }
      } catch (error) {
        console.error('EmailJS error:', error)
        submitMessage.value = 'Sorry, there was an error. Please try again.'
      } finally {
        isSubmitting.value = false
      }
    }
    
    return {
      mobileMenuOpen,
      toggleMobileMenu,
      formData,
      isSubmitting,
      submitMessage,
      sendEmail
    }
  }
}
</script>
