<template>
  <section class="container">
    <!-- Content -->
    <p class="badge">{{ WORK.label }}</p>
    <h2
      class="max-w-[700px] text-2xl md:text-3xl lg:text-4xl text-white font-semibold mt-4 !leading-snug"
    >
      {{ WORK.headline }}
    </h2>
    <p class="desc mt-4 max-w-xl">
      {{ WORK.subline }}
    </p>

    <!-- Works List -->
    <div class="grid md:grid-cols-2 gap-6 mt-16">

      <div class="card relative group" v-for="item in WORK.works">
        <div class="overflow-hidden aspect-[4/3] rounded-lg ">
          <img class="group-hover:scale-105 transition-all duration-500 w-full h-full object-cover" :src="'/images/work/' + item.thumbnails" :alt="'Thumbnail ' + item.name ">
        </div>

        <div class="rounded-xl overflow-hidden">
          <div class="absolute inset-x-5 inset-y-6 bg-gradient-to-t from-black group-hover:bg-black/40 rounded-md transition-all duration-500">
            <div class="flex items-center h-full justify-center">
              <div class="group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 opacity-0  scale-50  ">
              <Button label="View Details" to="#contact" variant="btn-dark" />

              </div>
            </div>
            <div class="-translate-y-16 lg:-translate-y-[70px] translate-x-4 lg:translate-x-7">
              <h3 class="text-white text-lg lg:text-xl tracking-wide font-bold group-hover:opacity-0 transition-all duration-500">{{ item.name }}</h3>
            <p class="text-sm text-white/40 group-hover:opacity-0 transition-all duration-500">{{item.type}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
