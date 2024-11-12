<script lang="ts">
  export let name: string;
  export let imgUrl: string;
</script>

<div
  class="border rounded-md flex flex-col h-28 w-28"
>
  <div class="flex-grow flex items-center justify-center">
    <img
      src={`${import.meta.env.VITE_CMS_STORAGE}${imgUrl}`}
      alt={name}
      class="w-16"
    />
  </div>
  <p class="mt-2 text-center break-words">{name}</p>
</div>
