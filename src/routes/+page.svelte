<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";

  let myName: string;
  let myIntro: string;

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

  onMount(() => {
    getName();
    getIntroduction();
  });
</script>

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
        <p class="text-3xl">im a developer from semarang</p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="font-bold text-xl">Scroll down to see more (coming soon)</p>
        <!-- <ArrowDownwardIcon /> -->
      </div>
    </div>
  </div>
</div>

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
