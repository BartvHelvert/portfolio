<script lang="ts">
  import { resolve } from '$app/paths';
  import CardPanel from "../../components/CardPanel.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ projects } = data);
</script>

<main class="pt-24 min-h-screen">
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-5xl font-bold text-primary mb-8">Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#if projects.length > 0}
          {#each projects as project}
            <CardPanel
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={resolve(`/projects/${project.slug}`)}
              variant="project"
            />
          {/each}
        {:else}
          <p class="text-secondary col-span-full">No projects yet.</p>
        {/if}
      </div>
    </div>
  </div>
</main>

