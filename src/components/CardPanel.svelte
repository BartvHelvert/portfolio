<script lang="ts">
  import { formatDate, getISODate } from "../lib/date-utils";
  
  export let title: string;
  export let description: string;
  export let link: string = "#";
  export let tags: string[] = [];
  export let date: string | null = null;
  export let variant: "project" | "blog" = "project";
</script>

{#if variant === "blog"}
  <article class="bg-[#292929] border border-[#3a3a3a] rounded-lg p-8 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all">
    <div class="flex items-center gap-4 mb-4">
      {#if date}
        <time class="text-gray-500 text-sm" datetime={getISODate(date)}>{formatDate(date)}</time>
      {/if}
    </div>
    <h2 class="text-3xl font-bold text-primary mb-3">
      <a href={link} class="hover:text-accent hover:underline transition-colors">{title}</a>
    </h2>
    <p class="text-secondary mb-4">{description}</p>
    {#if tags.length > 0}
      <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <span class="px-2 py-1 bg-accent/10 border border-accent/30 text-accent rounded text-xs">{tag}</span>
        {/each}
      </div>
    {/if}
  </article>
{:else}
  <div class="bg-[#292929] border border-[#3a3a3a] rounded-lg p-6 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all">
    <h2 class="text-2xl font-bold text-primary mb-3">
      <a href={link} class="hover:text-accent hover:underline transition-colors">{title}</a>
    </h2>
    <p class="text-secondary mb-4">{description}</p>
    {#if tags.length > 0}
      <div class="flex flex-wrap gap-2 mb-4">
        {#each tags as tag}
          <span class="px-3 py-1 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
{/if}

