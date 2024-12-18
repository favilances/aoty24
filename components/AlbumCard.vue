<template>
  <div 
    class="album-card group cursor-pointer modern-shadow"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 100 * index } }"
  >
    <div class="relative mb-4 overflow-hidden rounded-lg">
      <img 
        :src="album.coverUrl" 
        :alt="album.name"
        class="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
      >
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a 
          :href="album.playUrl" 
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
          class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:scale-105 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#181818]"
        >
          <span class="sr-only">Play {{ album.name }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
        </a>
      </div>
    </div>
    <h3 class="text-white font-medium mb-1.5 truncate text-[15px] tracking-wide">{{ album.name }}</h3>
    <p class="text-gray-400 text-sm truncate font-light">{{ album.artist }}</p>
  </div>
</template>

<script setup>
defineProps({
  album: {
    type: Object,
    required: true,
    validator: (value) => {
      return [
        'id',
        'name',
        'artist',
        'coverUrl',
        'playUrl'
      ].every(prop => prop in value)
    }
  },
  index: {
    type: Number,
    required: true
  }
})</script>