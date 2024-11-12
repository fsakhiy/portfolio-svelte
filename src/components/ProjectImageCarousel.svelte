<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import * as Dialog from "$lib/components/ui/dialog";
  
    export let imgUrl: any[];
  </script>
  
  <div class="px-12 flex">
    <Carousel.Root class="w-full max-w-2xl">
      <Carousel.Content>
        {#each imgUrl as image}
          <Carousel.Item>
            <div class="p-1">
              <Card.Root>
                <Card.Content
                  class="flex aspect-square items-center justify-center p-6"
                >
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <img
                        src="{import.meta.env.VITE_CMS_STORAGE}{image.attributes.url}"
                        alt={image.attributes.name}
                      />
                    </Dialog.Trigger>
                    <Dialog.Content class="w-[90vw] h-[90vh] sm:w-[80vw] sm:h-[80vh] max-w-3xl max-h-3xl p-4 overflow-hidden flex items-center justify-center">
                      <img
                        src="{import.meta.env.VITE_CMS_STORAGE}{image.attributes.url}"
                        alt={image.attributes.name}
                        class="object-contain max-w-full max-h-full"
                      />
                    </Dialog.Content>
                  </Dialog.Root>
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
  