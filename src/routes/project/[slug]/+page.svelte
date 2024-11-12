<script lang="ts">
  import ProjectImageCarousel from "../../../components/ProjectImageCarousel.svelte";
  import TechStack from "../../../components/TechStack.svelte";

  export let data; // This `data` object contains the data returned from +page.server.ts
  let { project } = data; // Destructure `post` from `data`\
  
  const tech_stacks: any[] = project.attributes.tech_stacks.data;
  const images: any[] = project.attributes.picture.data
</script>

<div class="font-anek-devanagari p-3 lg:p-10 flex flex-col gap-10">
  <a href="/" class="font-bold text-lg">go back</a>
  <div>
    <h1 class="font-dm-serif text-3xl flex items-center justify-center">{project.attributes.name}</h1>
  </div>
  <div class="flex flex-col gap-3 items-center justify-center">
    <p>{project.attributes.description}</p>
  </div>
  <div class="flex flex-col items-center justify-center gap-5">
    <h2 class="text-xl font-bold">Image</h2>
    <ProjectImageCarousel imgUrl={images} />
  </div>
  <div class="flex flex-col gap-5 items-center justify-center">
    <h2 class="text-xl font-bold">Technology Used</h2>
    <div class="flex flex-row gap-4 flex-wrap items-center justify-center">
      {#each tech_stacks as ts}
        <TechStack name={ts.attributes.name} imgUrl={ts.attributes.picture.data.attributes.url} />
      {/each}
    </div>
  </div>
</div>
