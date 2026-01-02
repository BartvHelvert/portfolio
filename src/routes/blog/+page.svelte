<script lang="ts">
  import { resolve } from '$app/paths';
  import CardPanel from "../../components/CardPanel.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ posts } = data);
</script>

<main class="pt-24 min-h-screen">
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl font-bold text-primary mb-8">Blog</h1>
      <div class="space-y-8">
        {#if posts.length > 0}
          {#each posts as post}
            <CardPanel
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              link={resolve(`/blog/${post.slug}`)}
              variant="blog"
            />
          {/each}
        {:else}
          <p class="text-secondary">No blog posts yet.</p>
        {/if}
      </div>
    </div>
  </div>
</main>

