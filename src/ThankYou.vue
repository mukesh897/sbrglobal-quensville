<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Thank You!</h1>
      <p class="text-gray-600 mb-6">Thank you for your interest, our team will get in touch with you soon!</p>
      <div class="space-y-4">
        <a href="/" class="block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          Back to Home
        </a>
        <div class="text-sm text-gray-500">
          <p>Contact us: +917204508777</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'ThankYou',
  setup() {
    onMounted(() => {
      // Track thank you page visit
      window.dataLayer = window.dataLayer || [];
      
      // Push thank you page event
      window.dataLayer.push({
        'event': 'thank_you_page_view',
        'page_title': 'Thank You - SBR Global Queens Ville',
        'page_location': window.location.href,
        'conversion_type': 'form_submission_success',
        'project_name': 'SBR Global Queens Ville',
        'user_action': 'completed_enquiry'
      });
      
      console.log('Thank you page event tracked:', {
        event: 'thank_you_page_view',
        timestamp: new Date().toISOString()
      });
    });
  }
}
</script>
