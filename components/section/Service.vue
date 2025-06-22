<template>
  <LayoutScrollSmooth>
    <section id="service" class="container">
    <!-- Content -->
    <p class="badge">{{ SERVICE.label }}</p>
    <h2
      class="section-title"
    >
      {{ SERVICE.headline }}
    </h2>
    <p class="paragraph mt-4 max-w-xl">
      {{ SERVICE.subline }}
    </p>

    <!-- Services List -->
    <div class="grid md:grid-cols-3 gap-6 mt-16">
      <div class="card relative flex items-center p-10" v-for="item in SERVICE.services">
       <div>
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
       
          <div class="mt-5">
            <h4 class="text-xl font-semibold tracking-wide text-white">{{ item.name }}</h4>
            <p class="text-white/50 mt-2">{{ item.description }}</p>
          </div>
       </div>

          <div
          class="absolute  bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"
        ></div>
        <div class="-z-10 absolute  bottom-0 w-40 bg-[#0b50e5] rounded-full blur-2xl h-40 animate-pulse"></div>
      </div>
    </div>
  </section>
  </LayoutScrollSmooth>
</template>
