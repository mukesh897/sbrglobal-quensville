<template>
  <div>
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
              <a href="#pricing" class="text-gray-700 transition-colors hover:text-[#417286]">Pricing</a>
              <a href="#masterplan" class="text-gray-700 transition-colors hover:text-[#417286]">Floor Plan</a>
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
            <a href="#pricing" class="text-gray-700 hover:text-[#417286] transition-colors px-4 py-2 text-sm">Pricing</a>
            <a href="#masterplan" class="text-gray-700 hover:text-[#417286] transition-colors px-4 py-2 text-sm">Floor Plan</a>
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
                   src="/src/assets/images/slider1.png" 
                   alt="SBR Global Queens Ville" 
                   class="w-full h-full object-cover transition-opacity duration-1000">
              <img v-show="currentSlide === 1" 
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
                <div class="text-sm font-bold" style="color: #417286;">Starting Price <span class="text-xl">₹ 90 Lacs*</span> Onwards</div>
              </div>
              
              <button @click="openModal" class="shimmer-btn w-full">
                Enquire Now
              </button>
            </div>
          </div>
        </section>
        <!-- Footer -->
        <footer class="bg-gray-50 py-8">
          <div class="max-w-6xl mx-auto px-8">
            <!-- Disclaimer Text -->
            <div class="text-center text-xs text-gray-600 mb-6 leading-relaxed">
              <p class="mb-4">
                <strong>Disclaimer:</strong> The information provided on this website is intended solely for general informational purposes and does not constitute an offer to sell or avail any service. Prices are subject to change without prior notice, and property availability cannot be guaranteed. The images displayed are for illustrative purposes only and may differ from actual property.
              </p>
              <p class="mb-4">
                This is the official website of an authorized marketing partner. We may share information with RERA-registered brokers / companies for necessary processing. Additionally, updates and notifications may be sent to the mobile number or email ID you provide.
              </p>
              <p class="mb-4">
                All rights reserved. The content, design, and information featured on this website are protected under copyright and intellectual property laws. Any unauthorized use, reproduction, or distribution may result in legal consequences. For the most accurate and updated details on services, pricing, availability, or other information, please contact us directly through the official contact details provided on this website.
              </p>
              <p class="mb-4">
                We are authorized channel partners with SBR Group and various other developers.
              </p>
              <p class="mb-4">
                Thank you for visiting our website.
              </p>
            </div>
            
            <!-- Authorized Channel Partner -->
            <div class="text-center text-gray-800 font-semibold mb-6">
              <p>We are Authorized Channel Partner with many Developers.</p>
            </div>
            
            <!-- Copyright -->
            <div class="text-center text-xs text-gray-500 mb-6">
              <p>All Rights Reserved. © 2025</p>
            </div>
            
            <!-- Disclaimer & Privacy Policy Link -->
            <div class="text-center">
              <a href="/disclaimer" class="text-blue-600 underline hover:text-blue-800 transition-colors cursor-pointer">
                Disclaimer & Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import emailjs from '@emailjs/browser'

export default {
  name: 'Home',
  setup() {
    const mobileMenuOpen = ref(false)
    const showModal = ref(false)
    const currentSlide = ref(0)
    const slides = ref([
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
          name: formData.value.name,
          email: formData.value.email,
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