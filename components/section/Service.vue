<template>
  <section class="container">
    <!-- Content -->
    <p class="badge">{{ SERVICE.label }}</p>
    <h2
      class="max-w-[700px] text-2xl md:text-3xl lg:text-4xl text-white font-semibold mt-4 !leading-snug"
    >
      {{ SERVICE.headline }}
    </h2>
    <p class="desc mt-4 max-w-xl">
      {{ SERVICE.subline }}
    </p>

    <!-- Services List -->
    <div class="grid md:grid-cols-2 gap-6 mt-16">
      <div class="card" v-for="item in SERVICE.services">
        <div class="flex gap-4">
          <div>
            <div class="inline-flex p-2 rounded-lg border border-primary shadow-[0px_0px_15px_-3px_rgba(85,_132,_255,_0.5)]">
              <VsxIcon
                :iconName="item.icon"
                :size="24"
                color="#5584FF"
                type="linear"
              />
            </div>
          </div>
          <div>
            <h4 class="text-xl font-semibold text-white">{{ item.name }}</h4>
            <p class="text-white/50 mt-2">{{ item.description }}</p>
          </div>
        </div>

        <img class="mt-6 rounded-lg" src="https://sfveuafbpwhmzfiorbis.supabase.co/storage/v1/object/public/project/azurakit-preview.png" alt="">
      </div>
    </div>
  </section>
</template>
