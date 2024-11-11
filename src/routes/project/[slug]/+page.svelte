<!-- <script>
  import { page } from "$app/stores";

  // Get the `slug` parameter from the page store
  let slug = $page.params.slug;
</script>

<h1>Project: {slug}</h1>
<p>This is the page for project: {slug}</p> -->

<script>
  export let data; // This `data` object contains the data returned from +page.server.ts
  let { project } = data; // Destructure `post` from `data`
</script>

<div class="font-anek-devanagari p-3 lg:p-10">
  <div>
    <a href="/">go back</a>
    <h1 class="font-dm-serif text-3xl">{project.attributes.name}</h1>
  </div>
  <p>{project.attributes.description}</p>
</div>
