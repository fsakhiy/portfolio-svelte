<script lang="ts">
  export let name: string;
  export let imgUrl: string;
</script>

<!-- <div class="border rounded-lg flex flex-col w-full h-64 p-5">
  <img src={imgUrl} alt={name} />
  <div class="flex items-center justify-center h-full">
    <p class="text-center">{name}</p>
  </div>
</div> -->

<div
  class="border shadow-sm rounded-lg flex flex-col w-full h-64 p-5 relative group overflow-hidden"
>
  <!-- Background Image with Zoom Effect -->
  <div
    class="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-300 group-hover:scale-110"
    style="background-image: url({imgUrl});"
  ></div>

  <!-- Dark Overlay with Smooth Transition -->
  <div
    class="absolute inset-0 bg-black opacity-60 transition-opacity duration-300 group-hover:opacity-0"
  ></div>

  <!-- Content with Text Fade-Out on Hover -->
  <div
    class="flex items-center justify-center h-full relative z-10 transition-opacity duration-300 group-hover:opacity-0"
  >
    <p class="text-center text-white">{name}</p>
  </div>
</div>
