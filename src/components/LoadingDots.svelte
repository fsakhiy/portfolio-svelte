<!-- src/components/LoadingDots.svelte -->
<script lang="ts">
  import { onMount, tick } from "svelte";

  export let text: string = "loading";
  let loadingText: string = text;
  let isAnimating: boolean = true;

  // Function to animate loading dots
  async function animateLoading() {
    let dotCount = 1;
    while (isAnimating) {
      loadingText = text + ".".repeat(dotCount % 4); // Adds 1, 2, or 3 dots
      dotCount++;
      await tick(); // Ensure DOM updates with each loop
      await new Promise((resolve) => setTimeout(resolve, 200)); // Pause for 500ms
    }
  }

  onMount(() => {
    animateLoading(); // Start the loading animation
    return () => {
      isAnimating = false; // Stop animation on unmount
    };
  });
</script>

<div class="flex justify-center items-center min-h-screen">
  <div class="loading-text text-3xl">{loadingText}</div>
</div>

<style>
  .loading-text {
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "wdth" 100;
  }
</style>
