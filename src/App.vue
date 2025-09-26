<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-8">
            <div class="flex items-center">
              <img src="/src/assets/images/logo.png" alt="SBR GROUP" class="w-12 h-12">
            </div>
            <div class="hidden md:flex space-x-6">
              <a href="#home" class="text-gray-700 transition-colors hover:text-[#417286]">Home</a>
              <a href="#highlights" class="text-gray-700 transition-colors hover:text-[#417286]">Highlights</a>
              <a href="#pricing" class="text-gray-700 transition-colors hover:text-[#417286]">Pricing & Floor Plan</a>
              <a href="#amenities" class="text-gray-700 transition-colors hover:text-[#417286]">Amenities</a>
              <a href="#gallery" class="text-gray-700 transition-colors hover:text-[#417286]">Gallery</a>
              <a href="#location" class="text-gray-700 transition-colors hover:text-[#417286]">Location</a>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button @click="openModal" class="text-white px-4 py-2 rounded text-sm hidden md:block" style="background-color: #417286;">Schedule Site Visit</button>
            <div class="flex items-center space-x-2 text-gray-700 font-semibold hidden md:flex">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+917204508777</span>
            </div>
            <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-md text-gray-700 hover:text-[#417286] focus:outline-none focus:ring-2 focus:ring-[#417286]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
          <div class="flex flex-col space-y-2">
            <a href="#home" class="text-gray-700 hover:text-[#417286] transition-colors px-4 py-2 text-sm">Home</a>
            <a href="#highlights" class="text-gray-700 hover:text-[#417286] transition-colors px-4 py-2 text-sm">Highlights</a>
            <a href="#pricing" class="text-gray-700 hover:text-[#417286] transition-colors px-4 py-2 text-sm">Pricing & Floor Plan</a>
            <a href="#amenities" class="text-gray-700 hover:text-[#417286] transition-colors px-4 py-2 text-sm">Amenities</a>
            <a href="#gallery" class="text-gray-700 hover:text-[#417286] transition-colors px-4 py-2 text-sm">Gallery</a>
            <a href="#location" class="text-gray-700 hover:text-[#417286] transition-colors px-4 py-2 text-sm">Location</a>
            <div class="px-4 py-2">
              <button @click="openModal" class="text-white px-4 py-2 rounded text-sm w-full" style="background-color: #417286;">Schedule Site Visit</button>
            </div>
            <div class="flex items-center space-x-2 text-gray-700 font-semibold px-4 py-2 text-sm">
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
        <!-- Mobile Carousel Section (only visible on mobile) -->
        <section id="home" class="relative md:hidden">
          <div class="relative h-[400px] bg-gray-200 overflow-hidden">
            <!-- Carousel Images -->
            <div class="relative w-full h-full">
              <img v-show="currentSlide === 0" 
                   src="/src/assets/images/contact.png" 
                   alt="SBR Global Queens Ville" 
                   class="w-full h-full object-cover transition-opacity duration-1000">
              <img v-show="currentSlide === 1" 
                   src="/src/assets/images/slider1.png" 
                   alt="SBR Global Queens Ville" 
                   class="w-full h-full object-cover transition-opacity duration-1000">
              <img v-show="currentSlide === 2" 
                   src="/src/assets/images/slider2.png" 
                   alt="SBR Global Queens Ville" 
                   class="w-full h-full object-cover transition-opacity duration-1000">
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
            
            <!-- Carousel Navigation Arrows -->
            <button @click="previousSlide" 
                    class="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 z-10">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <button @click="nextSlide" 
                    class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 z-10">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            <!-- Carousel Dots -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <button v-for="(slide, index) in slides" :key="index" 
                      @click="currentSlide = index"
                      :class="currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'"
                      class="w-2 h-2 rounded-full transition-all duration-300"></button>
            </div>
          </div>
        </section>

        <!-- Mobile Hero Card Section (only visible on mobile) -->
        <section class="relative md:hidden mt-5 z-20">
          <div class="max-w-6xl mx-auto px-4">
            <div class="bg-white rounded-xl shadow-2xl p-4 max-w-lg mx-auto">
              <div class="text-sm text-gray-500 mb-2">New Launch</div>
              <h1 class="text-lg font-bold text-gray-900 mb-2">SBR GLOBAL QUEENS VILLE</h1>
              <div class="text-xs text-gray-600 mb-3">At Kumbalgodu, Mysore Road, Bangalore</div>
              
              <!-- Teal bordered box -->
              <div class="border-2 rounded-lg p-2 mb-3" style="border-color: #417286; background-color: rgba(65, 114, 134, 0.1);">
                <div class="flex items-center space-x-1 font-semibold text-xs" style="color: #417286;">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span class="text-xs">On-Spot Booking Perks Await! Call Now</span>
                </div>
              </div>
              
              <!-- Phone number box -->
              <div class="border-2 rounded-lg p-2 mb-4" style="border-color: #417286; background-color: rgba(65, 114, 134, 0.1);">
                <div class="flex items-center space-x-1 font-semibold text-sm" style="color: #417286;">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span class="text-sm">+917204508777</span>
                </div>
              </div>
              
              <!-- Project specs -->
              <div class="grid grid-cols-3 gap-1 mb-3 text-xs">
                <div class="text-center">
                  <div class="text-gray-500 text-xs">Land Parcel</div>
                  <div class="font-bold text-gray-900 text-xs">8 Acres</div>
                </div>
                <div class="text-center">
                  <div class="text-gray-500 text-xs">Structure</div>
                  <div class="font-bold text-gray-900 text-xs">2B + G + 4</div>
                </div>
                <div class="text-center">
                  <div class="text-gray-500 text-xs">Units</div>
                  <div class="font-bold text-gray-900 text-xs">441</div>
                </div>
              </div>
              
              <!-- Benefits list -->
              <div class="mb-3">
                <ul class="space-y-1 text-xs text-gray-700">
                  <li class="flex items-center space-x-1">
                    <div class="w-1.5 h-1.5 rounded-full transform rotate-45 flex-shrink-0" style="background-color: #417286;"></div>
                    <span class="text-xs">Limited Time Period Offer</span>
                  </li>
                  <li class="flex items-center space-x-1">
                    <div class="w-1.5 h-1.5 rounded-full transform rotate-45 flex-shrink-0" style="background-color: #417286;"></div>
                    <span class="text-xs">High-Speed Elevators</span>
                  </li>
                  <li class="flex items-center space-x-1">
                    <div class="w-1.5 h-1.5 rounded-full transform rotate-45 flex-shrink-0" style="background-color: #417286;"></div>
                    <span class="text-xs">Early Buy Discounts</span>
                  </li>
                </ul>
              </div>
              
              <!-- Pricing info -->
              <div class="text-xs text-gray-700 mb-3">
                <div class="font-semibold text-xs">Luxurious 2 & 3 BHK Homes</div>
                <div class="text-sm font-bold" style="color: #417286;">Starting Price ₹ 90 Lacs* Onwards</div>
              </div>
              
              <button @click="openModal" class="shimmer-btn w-full">
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        <!-- Desktop Hero Section (only visible on desktop) -->
        <section id="home" class="relative hidden md:block">
          <div class="relative h-[700px] bg-gray-200 overflow-hidden">
            <!-- Carousel Images -->
            <div class="relative w-full h-full">
              <img v-show="currentSlide === 0" 
                   src="/src/assets/images/contact.png" 
                   alt="SBR Global Queens Ville" 
                   class="w-full h-full object-cover transition-opacity duration-1000">
              <img v-show="currentSlide === 1" 
                   src="/src/assets/images/slider1.png" 
                   alt="SBR Global Queens Ville" 
                   class="w-full h-full object-cover transition-opacity duration-1000">
              <img v-show="currentSlide === 2" 
                   src="/src/assets/images/slider2.png" 
                   alt="SBR Global Queens Ville" 
                   class="w-full h-full object-cover transition-opacity duration-1000">
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
            
            <!-- Carousel Navigation Arrows -->
            <button @click="previousSlide" 
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 z-10">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <button @click="nextSlide" 
                    class="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 z-10">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            <!-- Carousel Dots -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <button v-for="(slide, index) in slides" :key="index" 
                      @click="currentSlide = index"
                      :class="currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'"
                      class="w-3 h-3 rounded-full transition-all duration-300"></button>
            </div>
            
            <!-- Hero Card -->
            <div class="absolute top-12 left-8 bg-white rounded-xl shadow-2xl p-8 max-w-lg">
              <div class="text-sm text-gray-500 mb-2">New Launch</div>
              <h1 class="text-3xl font-bold text-gray-900 mb-3">SBR GLOBAL QUEENS VILLE</h1>
              <div class="text-base text-gray-600 mb-6">At Kumbalgodu, Mysore Road, Bangalore</div>
              
              <!-- Teal bordered box -->
              <div class="border-2 rounded-lg p-4 mb-4" style="border-color: #417286; background-color: rgba(65, 114, 134, 0.1);">
                <div class="flex items-center space-x-2 font-semibold text-sm" style="color: #417286;">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>On-Spot Booking Perks Await! Call Now</span>
                </div>
              </div>
              
              <!-- Phone number box -->
              <div class="border-2 rounded-lg p-4 mb-6" style="border-color: #417286; background-color: rgba(65, 114, 134, 0.1);">
                <div class="flex items-center space-x-2 font-semibold text-lg" style="color: #417286;">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+917204508777</span>
                </div>
              </div>
              
              <!-- Project specs -->
              <div class="grid grid-cols-3 gap-4 mb-6 text-sm">
                <div class="text-center">
                  <div class="text-gray-500 text-xs">Land Parcel</div>
                  <div class="font-bold text-gray-900 text-base">8 Acres</div>
                </div>
                <div class="text-center">
                  <div class="text-gray-500 text-xs">Structure</div>
                  <div class="font-bold text-gray-900 text-base">2B + G + 4</div>
                </div>
                <div class="text-center">
                  <div class="text-gray-500 text-xs">Units</div>
                  <div class="font-bold text-gray-900 text-base">441</div>
                </div>
              </div>
              
              <!-- Benefits list -->
              <div class="mb-6">
                <ul class="space-y-2 text-sm text-gray-700">
                  <li class="flex items-center space-x-2">
                    <div class="w-2 h-2 rounded-full transform rotate-45 flex-shrink-0" style="background-color: #417286;"></div>
                    <span>Limited Time Period Offer</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <div class="w-2 h-2 rounded-full transform rotate-45 flex-shrink-0" style="background-color: #417286;"></div>
                    <span>High-Speed Elevators</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <div class="w-2 h-2 rounded-full transform rotate-45 flex-shrink-0" style="background-color: #417286;"></div>
                    <span>Early Buy Discounts</span>
                  </li>
                </ul>
              </div>
              
              <!-- Pricing info -->
              <div class="text-sm text-gray-700 mb-6">
                <div class="font-semibold">Luxurious 2 & 3 BHK Homes</div>
                <div class="text-lg font-bold" style="color: #417286;">Starting Price ₹ 90 Lacs* Onwards</div>
              </div>
              
              <button @click="openModal" class="shimmer-btn w-full">
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section class="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div>
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">About SBR Global Queens Ville</h2>
                <p class="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  An exquisite villament community spread across 8 acres on Mysore Road near Rajarajeshwari College of Engineering. 
                  Thoughtfully crafted 2BHK Duplex and Penthouse Villaments, 2BHK and 3BHK Simplex, blending luxury of independent 
                  villa with the ease of apartment living. Experience privacy, picturesque views, and a truly sophisticated lifestyle.
                </p>
                <button @click="openModal" class="btn-primary">Enquire Now</button>
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
                <div class="w-6 h-6 rounded-full flex items-center justify-center" style="background-color: #417286;">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">2 Grand Clubhouses</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 rounded-full flex items-center justify-center" style="background-color: #417286;">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">30+ World-Class Amenities</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 rounded-full flex items-center justify-center" style="background-color: #417286;">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">Aluminium Formwork</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 rounded-full flex items-center justify-center" style="background-color: #417286;">
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
                      <button @click="openModal" class="btn-secondary text-sm">Complete Pricing Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">3 BHK</td>
                    <td class="px-6 py-4 text-sm text-gray-600">2316 Sq.Ft.</td>
                    <td class="px-6 py-4 text-sm text-gray-900 font-semibold">₹ 1.94 Cr* Onwards</td>
                    <td class="px-6 py-4">
                      <button @click="openModal" class="btn-secondary text-sm">Complete Pricing Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">3 BHK Garden Villament</td>
                    <td class="px-6 py-4 text-sm text-gray-600">2104 - 2204 Sq.Ft.</td>
                    <td class="px-6 py-4 text-sm text-gray-900 font-semibold">₹ 1.76 - 1.85 Cr* Onwards</td>
                    <td class="px-6 py-4">
                      <button @click="openModal" class="btn-secondary text-sm">Complete Pricing Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">3 BHK Sky Villament</td>
                    <td class="px-6 py-4 text-sm text-gray-600">2104 - 2204 Sq.Ft.</td>
                    <td class="px-6 py-4 text-sm text-gray-900 font-semibold">₹ 1.76 - 1.85 Cr* Onwards</td>
                    <td class="px-6 py-4">
                      <button @click="openModal" class="btn-secondary text-sm">Complete Pricing Details</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">3 BHK - Penthouse</td>
                    <td class="px-6 py-4 text-sm text-gray-600">2403 - 2410 Sq.Ft.</td>
                    <td class="px-6 py-4 text-sm text-gray-900 font-semibold">₹ 2.29 - 2.30 Cr* Onwards</td>
                    <td class="px-6 py-4">
                      <button @click="openModal" class="btn-secondary text-sm">Complete Pricing Details</button>
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
                <button @click="openModal" class="btn-primary">Request Master Layout Plan</button>
              </div>
              <div class="text-center">
                <img src="/src/assets/images/unitplan.png" 
                     alt="Unit Plan Layout" 
                     class="h-64 w-full rounded-lg mb-4 object-cover">
                <button @click="openModal" class="btn-primary">Request Unit Layout Plan</button>
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
              <button @click="openModal" class="btn-secondary">Request All Amenities</button>
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
                    <div class="w-2 h-2 rounded-full" style="background-color: #417286;"></div>
                    <span class="text-gray-700">NICE Road, Mysore Road Toll Booth - 4 Km</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 rounded-full" style="background-color: #417286;"></div>
                    <span class="text-gray-700">Sri Swaminarayan Gurukul International School - 5 Km</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 rounded-full" style="background-color: #417286;"></div>
                    <span class="text-gray-700">Rajarajeshwari Medical College & Hospital - 5 Km</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 rounded-full" style="background-color: #417286;"></div>
                    <span class="text-gray-700">Bangalore Mysore Road Highway - 1 Km</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 rounded-full" style="background-color: #417286;"></div>
                    <span class="text-gray-700">Kengeri Railway Station - 6 Km</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 rounded-full" style="background-color: #417286;"></div>
                    <span class="text-gray-700">Challaghatta Metro Station - 3 Km</span>
                  </li>
                </ul>
                <button @click="openModal" class="btn-primary mt-6">Request Location Details</button>
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
                    <input v-model="formData.name" type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">India (+91) - Mobile No.</label>
                    <input v-model="formData.phone" type="tel" required pattern="[0-9]*" inputmode="numeric" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent" @input="formData.phone = formData.phone.replace(/[^0-9]/g, '')">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">E-Mail Address</label>
                    <input v-model="formData.email" type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent">
                  </div>
                  <button type="submit" :disabled="isSubmitting" class="shimmer-btn w-full disabled:bg-gray-400" :class="{ 'shimmer-btn': !isSubmitting }">
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
              <input v-model="formData.name" type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">India (+91)</label>
              <div class="flex">
                <select class="px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent">
                  <option>+91</option>
                </select>
                <input v-model="formData.phone" type="tel" placeholder="Mobile No." required pattern="[0-9]*" inputmode="numeric" class="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent" @input="formData.phone = formData.phone.replace(/[^0-9]/g, '')">
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">E-Mail Address</label>
              <input v-model="formData.email" type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent">
            </div>
            <button type="submit" :disabled="isSubmitting" class="shimmer-btn w-full disabled:bg-gray-400">
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
            <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background-color: #417286;">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
            </div>
            <div>
              <div class="font-semibold text-gray-900">Instant Call Back</div>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background-color: #417286;">
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

        <button @click="openModal" class="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold w-full hover:bg-gray-900 transition-colors">
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
              <input v-model="formData.name" type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">India (+91) - Mobile No.</label>
              <input v-model="formData.phone" type="tel" required pattern="[0-9]*" inputmode="numeric" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent" @input="formData.phone = formData.phone.replace(/[^0-9]/g, '')">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">E-Mail Address</label>
              <input v-model="formData.email" type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent">
            </div>
            <button type="submit" :disabled="isSubmitting" class="shimmer-btn w-full disabled:bg-gray-400">
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
    <div class="fixed right-2 sm:right-4 bottom-4 space-y-2 sm:space-y-3 z-50">
      <a href="https://wa.me/917204508777" class="block w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
        </svg>
      </a>
      <a href="tel:+917204508777" class="block w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
        </svg>
      </a>
      <a href="https://wa.me/917204508777" class="block w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors">
        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-6xl mx-auto px-8">
        <div class="text-center text-sm text-gray-400">
          <p class="mb-2">We are Authorized Channel Partner with many Developers.</p>
          <p class="mb-4">Disclaimer & Privacy Policy </p>
          <p>All Rights Reserved. © 2025</p>
        </div>
      </div>
    </footer>

    <!-- Popup Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="flex flex-col lg:flex-row">
          <!-- Left Section - We Promise -->
          <div class="p-8 lg:w-1/2" style="background: linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(65, 114, 134, 0.1));">
            <h2 class="text-3xl font-bold text-gray-800 mb-8">We Promise</h2>
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background-color: #417286;">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">Instant Call Back</h3>
                  <p class="text-gray-600">Get immediate response from our team</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background-color: #417286;">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">Free Site Visit</h3>
                  <p class="text-gray-600">Schedule at your convenience</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941a1 1 0 102 0v-1.941a4.535 4.535 0 001.676-.662C13.398 9.765 14 8.99 14 8c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 5.092V5z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">Unmatched Price</h3>
                  <p class="text-gray-600">Best deals exclusively for you</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Section - Registration Form -->
          <div class="p-8 lg:w-1/2 relative">
            <!-- Close Button -->
            <button @click="closeModal" class="absolute top-4 right-4 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <!-- Logo and Branding -->
            <div class="flex items-center space-x-3 mb-6">
              <img src="/src/assets/images/logo.png" alt="SBR GROUP" class="w-12 h-12">
              <div>
                <div class="text-xl font-bold text-gray-900">SBR GROUP</div>
                <div class="text-sm text-gray-600">Building Reality</div>
                <div class="text-xs text-gray-500">Authorized Channel Partner</div>
              </div>
            </div>

            <!-- Headline -->
            <h2 class="text-2xl font-bold text-gray-900 mb-2">
              Register Here And Avail The <span class="text-red-600">Best Offers!!</span>
            </h2>

            <!-- Form -->
            <form @submit.prevent="submitModalForm" class="space-y-4 mt-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input v-model="modalFormData.name" type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">India (+91)</label>
                <div class="flex">
                  <select class="px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent">
                    <option>+91</option>
                  </select>
                  <input v-model="modalFormData.phone" type="tel" placeholder="Mobile No." required pattern="[0-9]*" inputmode="numeric" class="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent" @input="modalFormData.phone = modalFormData.phone.replace(/[^0-9]/g, '')">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">E-Mail Address</label>
                <input v-model="modalFormData.email" type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#417286] focus:border-transparent">
              </div>
              <button type="submit" :disabled="isSubmitting" class="shimmer-btn w-full disabled:bg-gray-400" :class="{ 'shimmer-btn': !isSubmitting }">
                {{ isSubmitting ? 'Submitting...' : 'Pre-Register Now' }}
              </button>
            </form>

            <!-- Consent Text -->
            <p class="text-xs text-gray-500 mt-4 leading-relaxed">
              I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. 
              This consent overrides any registration for DNC/NDNC.
            </p>

            <!-- Footer -->
            <div class="mt-6 bg-gray-100 rounded-lg p-4 flex items-center space-x-2">
              <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span class="text-gray-700 font-semibold">+917204508777</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import emailjs from '@emailjs/browser'

export default {
  name: 'App',
  setup() {
    const mobileMenuOpen = ref(false)
    const showModal = ref(false)
    const currentSlide = ref(0)
    const slides = ref([
      { src: '/src/assets/images/contact.png' },
      { src: '/src/assets/images/slider1.png' },
      { src: '/src/assets/images/slider2.png' }
    ])
    const formData = ref({
      name: '',
      email: '',
      phone: ''
    })
    const modalFormData = ref({
      name: '',
      email: '',
      phone: ''
    })
    const isSubmitting = ref(false)
    const submitMessage = ref('')
    
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const openModal = () => {
      showModal.value = true
    }
    
    const closeModal = () => {
      showModal.value = false
      modalFormData.value = { name: '', email: '', phone: '' }
    }
    
    const showThankYouPage = () => {
      // Redirect to thank you page
      window.location.href = '/thank-you.html'
    }
    
    // Auto carousel functionality
    let carouselInterval = null
    
    const startCarousel = () => {
      carouselInterval = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % slides.value.length
      }, 4000) // Change slide every 4 seconds
    }

    const stopCarousel = () => {
      if (carouselInterval) {
        clearInterval(carouselInterval)
        carouselInterval = null
      }
    }

    const nextSlide = () => {
      stopCarousel()
      currentSlide.value = (currentSlide.value + 1) % slides.value.length
      startCarousel()
    }

    const previousSlide = () => {
      stopCarousel()
      currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
      startCarousel()
    }
    
    onMounted(() => {
      startCarousel()
    })
    
    onUnmounted(() => {
      stopCarousel()
    })
    
    const sendEmail = async (formType = 'sidebar') => {
      isSubmitting.value = true
      submitMessage.value = ''
      
      try {
        const templateParams = {
          from_name: formData.value.name,
          from_email: formData.value.email,
          phone: formData.value.phone,
          form_type: formType
        }
        
        await emailjs.send(
          'service_1o90b3i',
          'template_msncxgt',
          templateParams,
          'CAXeNuLKdK4qtQmdn'
        )
        
        submitMessage.value = 'Thank you! We will contact you soon.'
        formData.value = { name: '', email: '', phone: '' }
        
        // Show thank you message after successful submission
        setTimeout(() => {
          showThankYouPage()
        }, 1000)
        
      } catch (error) {
        console.error('EmailJS error:', error)
        submitMessage.value = 'Sorry, there was an error. Please try again.'
      } finally {
        isSubmitting.value = false
      }
    }
    
    const submitModalForm = async () => {
      isSubmitting.value = true
      
      try {
        const templateParams = {
          from_name: modalFormData.value.name,
          from_email: modalFormData.value.email,
          phone: modalFormData.value.phone,
          form_type: 'modal'
        }
        
        await emailjs.send(
          'service_1o90b3i',
          'template_msncxgt',
          templateParams,
          'CAXeNuLKdK4qtQmdn'
        )
        
        // Close modal and show thank you message
        closeModal()
        setTimeout(() => {
          showThankYouPage()
        }, 500)
        
      } catch (error) {
        console.error('EmailJS error:', error)
        alert('Sorry, there was an error. Please try again.')
      } finally {
        isSubmitting.value = false
      }
    }
    
    return {
      mobileMenuOpen,
      showModal,
      currentSlide,
      slides,
      toggleMobileMenu,
      openModal,
      closeModal,
      formData,
      modalFormData,
      isSubmitting,
      submitMessage,
      sendEmail,
      submitModalForm,
      nextSlide,
      previousSlide
    }
  }
}
</script>
