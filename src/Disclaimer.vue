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
              <a href="/" class="text-gray-700 transition-colors hover:text-[#417286]">Home</a>
              <a href="/#highlights" class="text-gray-700 transition-colors hover:text-[#417286]">Highlights</a>
              <a href="/#pricing" class="text-gray-700 transition-colors hover:text-[#417286]">Pricing</a>
              <a href="/#masterplan" class="text-gray-700 transition-colors hover:text-[#417286]">Floor Plan</a>
              <a href="/#amenities" class="text-gray-700 transition-colors hover:text-[#417286]">Amenities</a>
              <a href="/#gallery" class="text-gray-700 transition-colors hover:text-[#417286]">Gallery</a>
              <a href="/#location" class="text-gray-700 transition-colors hover:text-[#417286]">Location</a>
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
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-8 py-16">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8 text-center">Disclaimer & Privacy Policy</h1>
        
        <!-- Disclaimer Section -->
        <div class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Disclaimer</h2>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              This website is intended solely to provide general information about real estate projects across various regions. 
              By accessing this website, the viewer acknowledges that the information presented, including brochures and marketing 
              materials, is for informational purposes only and should not be relied upon for making any booking or purchase 
              decisions in any project.
            </p>
            <p>
              Nothing contained on this website constitutes advertising, marketing, booking, selling, or an offer or invitation 
              to purchase a unit in any project by the company. The company shall not be held responsible for any consequences 
              arising from actions taken by viewers based on the content or information available on this website.
            </p>
            <p>
              Please note that the company has not independently verified the details or compliances of the projects listed herein. 
              Additionally, the company has not verified the RERA (Real Estate Regulation Act, 2016) registration status of these 
              projects. The company makes no representation regarding such compliances. It is strongly advised that buyers independently 
              verify the RERA registration status and other legal compliances of any project before making a purchase decision.
            </p>
          </div>
        </div>
        
        <!-- Privacy Policy Section -->
        <div class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Privacy Policy</h2>
          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p>
              We are committed to safeguarding your personal information. This Privacy Policy outlines how your information is 
              collected, used, and protected when you use our website.
            </p>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Updates to Privacy Policy</h3>
              <p>
                This Privacy Policy may be updated or modified from time to time without prior notice. We encourage you to 
                periodically review this page to stay informed about changes to the terms and conditions.
              </p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-3">User Information</h3>
              <p>
                By using our website, you agree to the terms outlined in this Privacy Policy and consent to the collection and 
                use of information you may provide. While some sections of the website can be accessed without sharing personal 
                details, certain features may require you to provide personal information such as your name, email address, 
                phone number, etc.
              </p>
              <p class="mt-3">
                The information collected is used to:
              </p>
              <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Provide relevant products and services,</li>
                <li>Acknowledge receipt of your communication, and</li>
                <li>Share updates or information that may be of interest to you.</li>
              </ul>
              <p class="mt-3">
                You may request removal from our mailing list at any time. We do not share, sell, or disclose your personal 
                information to third parties without your consent.
              </p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Security</h3>
              <p>
                To protect sensitive data, all transmissions between client and server are encrypted using advanced 
                industry-standard protocols. Access to personal information is strictly restricted to authorized employees, 
                who are bound by confidentiality obligations.
              </p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Use of Cookies</h3>
              <p>
                We may use cookies to enhance website security, maintain session continuity, and improve user experience. 
                If you choose to disable cookies, certain features or services of the website may not function properly.
              </p>
            </div>
            
            <p>
              For any queries or suggestions regarding this Privacy Policy or your interaction with our website, please 
              contact us through the details provided on this site.
            </p>
          </div>
        </div>

        <!-- Back to Home Button -->
        <div class="text-center mt-8">
          <a href="/" class="inline-block bg-[#417286] text-white px-6 py-3 rounded-lg hover:bg-[#356074] transition-colors">
            Back to Home
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-50 py-8">
      <div class="max-w-6xl mx-auto px-8">
        <div class="text-center text-sm text-gray-400 mb-8">
          <p class="mb-2">We are Authorized Channel Partner with many Developers.</p>
          <p>All Rights Reserved. © 2025</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Disclaimer',
  setup() {
    const openModal = () => {
      // This would open the same modal as in the main app
      // For now, we'll just redirect to home with a modal trigger
      window.location.href = '/#modal'
    }

    return {
      openModal
    }
  }
}
</script>

<style scoped>
/* Add any specific styles for this page if needed */
</style>