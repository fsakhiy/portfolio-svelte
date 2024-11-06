<script lang="ts">
  export let text: string;
  export let url: string;
  export let imgUrl: string;
</script>

<a href={url} target="_blank">
  <div class="px-3 py-1 rounded-lg border hover:bg-gray-200 flex gap-1 items-center h-16">
    <span>
      <img src={imgUrl} alt={text} />
    </span>
    <span>
      {text}
    </span>
  </div>
</a>

<style>
  img {
    max-width: 50px;
    max-height: 50px;
    width: 100%;
    height: auto;
    object-fit: contain; /* Keeps the aspect ratio within the 50px limit */
  }
</style>
