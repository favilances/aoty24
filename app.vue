<template>
  <div class="min-h-screen bg-[#121212] relative">
    <div class="subtle-gradient fixed inset-0 pointer-events-none"></div>
    <div class="gradient-overlay fixed inset-0 pointer-events-none"></div>
    <title>aoty24</title>
    <div class="relative z-10">
      <TheHeader />
      
      <main class="container mx-auto px-6 pb-16">
        <div class="album-grid">
          <AlbumCard
            v-for="(album, index) in albums"
            :key="album.id"
            :album="album"
            :index="index"
          />
        </div>
      </main>
      <TheFooter />

    </div>
  </div>
</template>

<script setup>

const { albums } = useAlbums()
</script>