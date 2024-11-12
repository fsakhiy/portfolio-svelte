<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  export let imgUrl: any[];
</script>

<div class="p-12 items-center justify-center flex">
  <Carousel.Root class="w-full max-w-2xl">
    <Carousel.Content>
        {#each imgUrl as image}
        <Carousel.Item>
          <div class="p-1">
            <Card.Root>
              <Card.Content
                class="flex aspect-square items-center justify-center p-6"
              >
                <!-- <span class="text-4xl font-semibold">{i + 1}</span> -->
                <img
                  src="{import.meta.env.VITE_CMS_STORAGE}{image.attributes.url}"
                  alt={image.attributes.name}
                />
              </Card.Content>
            </Card.Root>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
</div>
