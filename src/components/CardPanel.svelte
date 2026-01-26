<script lang="ts">
  import { formatDate, getISODate } from "../lib/date-utils";

  export let title: string;
  export let description: string;
  export let link: string = "#";
  export let tags: string[] = [];
  export let date: string | null = null;
  export let variant: "project" | "blog" = "project";

  const isBlog = variant === "blog";
</script>

<svelte:element
  this={isBlog ? "article" : "div"}
  class="bg-[#292929] border border-[#3a3a3a] rounded-lg shadow-lg hover:shadow-xl hover:border-accent/30 transition-all {isBlog ? 'p-8' : 'p-6'}"
>
  {#if date}
    <div class="flex items-center gap-4 mb-4">
      <time class="text-gray-500 text-sm" datetime={getISODate(date)}>{formatDate(date)}</time>
    </div>
  {/if}

  <h2 class="font-bold text-primary mb-3 {isBlog ? 'text-3xl' : 'text-2xl'}">
    <a href={link} class="hover:text-accent hover:underline transition-colors">{title}</a>
  </h2>

  <p class="text-secondary mb-4">{description}</p>

  {#if tags.length > 0}
    <div class="flex flex-wrap gap-2 {!isBlog ? 'mb-4' : ''}">
      {#each tags as tag}
        <span class="bg-accent/10 border border-accent/30 text-accent {isBlog ? 'px-2 py-1 rounded text-xs' : 'px-3 py-1 rounded-full text-sm'}">
          {tag}
        </span>
      {/each}
    </div>
  {/if}
</svelte:element>
