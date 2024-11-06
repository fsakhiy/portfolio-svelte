<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  import LoadingDots from "../components/LoadingDots.svelte";

  let myName: string;
  let myIntro: string;
  let myDescription: string;
  let loading: boolean = true;

  async function getName() {
    const q = await axios({
      method: "get",
      url: `${import.meta.env.VITE_CMS_API}/name`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
      },
    });

    myName = q.data.data.attributes.name;
  }

  export async function getIntroduction() {
    const q = await axios({
      method: "get",
      url: `${import.meta.env.VITE_CMS_API}/introduction`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
      },
    });

    myIntro = q.data.data.attributes.introduction;
  }
  export async function getDescription() {
    const q = await axios({
      method: "get",
      url: `${import.meta.env.VITE_CMS_API}/description`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
      },
    });

    myDescription = q.data.data.attributes.description;
  }

  //   onMount(() => {
  //     getName();
  //     getIntroduction();
  //     getDescription();
  //   });

  onMount(async () => {
    loading = true;
    await Promise.all([getName(), getIntroduction(), getDescription()]);
    loading = false; // Set loading to false when data is fetched
  });

  // async function getData() {
  //   // Simultaneously fetch data (similar to your previous functions)
  //   await Promise.all([getName(), getIntroduction(), getDescription()]);
  //   loading = false;
  // }

  // onMount(() => {
  //   getData();
  // });
</script>

{#if loading}
  <LoadingDots text="loading" />
{:else}
  <div class="main font-anek-devanagari">
    <div
      class="px-5 lg:px-10 py-5 h-full min-h-screen flex flex-col justify-between bg-gradient-to-tr from-zinc-400 via-neutral-300 to-gray-100"
    >
      <div class="flex flex-wrap items-end"></div>

      <div class="flex flex-col justify-end gap-5">
        <h1>
          <div class="text-3xl">{myIntro}</div>
          <div class="font-dm-serif text-6xl">{myName}</div>
        </h1>

        <div>
          <p class="text-3xl">{myDescription}</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <p class="font-bold text-xl">Scroll down to see more (coming soon)</p>
          <!-- <ArrowDownwardIcon /> -->
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .main {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  .font-dm-serif {
    font-family: "DM Serif Text", serif;
    font-weight: 400;
    font-style: normal;
  }

  .font-anek-devanagari {
    font-family: "Anek Devanagari", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "wdth" 100;
  }
</style>
