<template>
  <svg v-if="name == 'view'" :class="iconClasses()" :width="size" :height="size"
    fill="currentColor"
    viewBox="0 0 20 14"
  >
    <path
      d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
    />
  </svg>
  <svg viewBox="0 0 24 24" v-if="name == 'logout'" :class="iconClasses()" :width="size" :height="size">
    <path fill="currentColor"
      d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path>
  </svg>
  <svg viewBox="0 0 24 24" v-if="name == 'theme'" :class="iconClasses()" :width="size" :height="size">
    <path fill="currentColor" d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z"></path>
  </svg>
  <svg v-if="name == 'notify'" :class="iconClasses()" :width="size" :height="size" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
    <path stroke="none" d="M0 0h24v24H0z"/>  
    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  
    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  </svg>
  <svg v-if="name == 'messages'" :class="iconClasses()" :width="size" :height="size" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
    <path stroke="none" d="M0 0h24v24H0z"/>  
    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />  
    <line x1="12" y1="12" x2="12" y2="12.01" />  
    <line x1="8" y1="12" x2="8" y2="12.01" />  
    <line x1="16" y1="12" x2="16" y2="12.01" />
  </svg>
  <svg v-if="name == 'search'" :class="iconClasses()" :width="size" :height="size" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
    <path stroke="none" d="M0 0h24v24H0z"/>  
    <circle cx="10" cy="10" r="7" />  
    <line x1="21" y1="21" x2="15" y2="15" />
  </svg>
  <svg v-if="name == 'home'" :class="iconClasses()" :width="size" :height="size" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
    <path stroke="none" d="M0 0h24v24H0z"/>  
    <polyline points="5 12 3 12 12 3 21 12 19 12" />  
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
  </svg>
  <svg v-if="name == 'people'" :class="iconClasses()" :width="size" :height="size" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  
    <circle cx="9" cy="7" r="4" /> 
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /> 
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
  <svg v-if="name == 'menu'" :class="iconClasses()" :width="size" :height="size" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
    <line x1="3" y1="12" x2="21" y2="12" />  
    <line x1="3" y1="6" x2="21" y2="6" />  
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'info',
    },
    class: {
      type: String,
      default: '',
    },
    size: {
      type: [Number, String],
      default: 18,
    },
  },
  methods: {
    iconClasses() {
      return [this.class];
    },
  },
};
</script>
