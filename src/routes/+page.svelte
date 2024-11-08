<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  import LoadingDots from "../components/LoadingDots.svelte";
  import Links from "../components/Links.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import Experience from "../components/Experience.svelte";

  let myName: string;
  let myIntro: string;
  let myDescription: string;
  let loading: boolean = true;
  let myLinks: any;
  let myProjects: any;
  let myExperiences: any;

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

  async function getIntroduction() {
    const q = await axios({
      method: "get",
      url: `${import.meta.env.VITE_CMS_API}/introduction`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
      },
    });

    myIntro = q.data.data.attributes.introduction;
  }
  async function getDescription() {
    const q = await axios({
      method: "get",
      url: `${import.meta.env.VITE_CMS_API}/description`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
      },
    });

    myDescription = q.data.data.attributes.description;
  }

  async function getLinks() {
    const q = await axios({
      method: "get",
      url: `${import.meta.env.VITE_CMS_API}/links?populate=icon`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
      },
    });

    myLinks = q.data.data;
  }

  async function getProjects() {
    const q = await axios({
      method: "get",
      url: `${import.meta.env.VITE_CMS_API}/projects?populate[0]=tech_stacks&populate[1]=picture&populate[2]=tech_stacks.picture`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
      },
    });

    myProjects = q.data.data;
  }

  async function getExperiences() {
    const q = await axios({
      method: "get",
      url: `${import.meta.env.VITE_CMS_API}/experiences?sort[0]=start_date:desc`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
      },
    });

    myExperiences = q.data.data;
  }

  onMount(async () => {
    loading = true;
    await Promise.all([
      getName(),
      getIntroduction(),
      getDescription(),
      getLinks(),
      getProjects(),
      getExperiences(),
    ]);
    loading = false;
  });
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

    <div class="p-5 flex flex-col items-center gap-5">
      <p class="font-dm-serif text-3xl">Visit me on</p>
      <div class="flex flex-wrap items-center justify-center gap-3 lg:gap-5">
        {#each myLinks as link}
          <Links
            text={link.attributes.name}
            url={link.attributes.url}
            imgUrl={`${import.meta.env.VITE_CMS_STORAGE}${link.attributes.icon.data.attributes.url}`}
          />
        {/each}
      </div>
    </div>

    <div class="p-5 flex flex-col gap-5 items-center">
      <p class="font-dm-serif text-3xl">My projects</p>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 flex-grow"
      >
        {#each myProjects as project}
          <ProjectCard
            name={project.attributes.name}
            imgUrl={`${import.meta.env.VITE_CMS_STORAGE}${project.attributes.picture.data[0].attributes.url}`}
          />
        {/each}
      </div>
    </div>

    <div class="p-5 flex flex-col gap-5 items-center">
      <p class="font-dm-serif text-3xl">My experiences</p>
      <div class="flex flex-col gap-3">
        {#each myExperiences as exp}
          <Experience
            place={exp.attributes.title}
            role={exp.attributes.role}
            type={exp.attributes.type}
            start_date={exp.attributes.start_date}
            end_date={exp.attributes.end_date}
            location={exp.attributes.location}
          />
        {/each}
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
</style>
