<script lang="ts">
  import Navbar from "./Navbar.svelte";
  import { formatDate, getISODate } from "../lib/date-utils";
  import type { Component } from "svelte";

  export let title: string;
  export let description: string;
  export let date: string | null = null;
  export let tags: string[] = [];
  export let content: Component;
  export let backLink: string;
  export let backLabel: string;
  export let tagVariant: "blog" | "project" = "blog";

  const RenderComponent = content;
</script>

<Navbar></Navbar>

<main class="pt-24 min-h-screen">
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <article class="prose prose-invert prose-lg max-w-none">
        <div class="mb-8">
          {#if date}
            <div class="flex items-center gap-4 mb-4">
              <time class="text-gray-500 text-sm" datetime={getISODate(date)}>{formatDate(date)}</time>
            </div>
          {/if}
          <div class="flex flex-wrap items-center gap-4 mb-4">
            <h1 class="text-5xl font-bold text-primary m-0">{title}</h1>
            {#if tags && tags.length > 0}
              <div class="flex flex-wrap gap-2">
                {#each tags as tag}
                  {#if tagVariant === "blog"}
                    <span class="px-2 py-1 bg-accent/10 border border-accent/30 text-accent rounded text-xs">
                      {tag}
                    </span>
                  {:else}
                    <span class="px-3 py-1 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm">
                      {tag}
                    </span>
                  {/if}
                {/each}
              </div>
            {/if}
          </div>
          <p class="text-secondary text-xl mb-6">{description}</p>
        </div>
        
        <div class="markdown-content">
          <svelte:component this={RenderComponent} />
        </div>
      </article>
      
      <div class="mt-12 pt-8 border-t border-[#3a3a3a]">
        <a href={backLink} class="text-accent hover:underline">← {backLabel}</a>
      </div>
    </div>
  </div>
</main>

<style>
  :global(.markdown-content) {
    color: var(--color-secondary, #b0b0b0);
  }
  
  :global(.markdown-content h1),
  :global(.markdown-content h2),
  :global(.markdown-content h3),
  :global(.markdown-content h4),
  :global(.markdown-content h5),
  :global(.markdown-content h6) {
    color: var(--color-primary, #ffffff);
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  :global(.markdown-content h2) {
    font-size: 2rem;
    border-bottom: 1px solid #3a3a3a;
    padding-bottom: 0.5rem;
  }
  
  :global(.markdown-content p) {
    margin-bottom: 1rem;
    line-height: 1.7;
  }
  
  :global(.markdown-content ul),
  :global(.markdown-content ol) {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }
  
  :global(.markdown-content li) {
    margin-bottom: 0.5rem;
  }
  
  :global(.markdown-content code) {
    background-color: #1a1a1a;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.9em;
  }
  
  :global(.markdown-content pre) {
    background-color: #1a1a1a;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin-bottom: 1rem;
  }
  
  :global(.markdown-content pre code) {
    background-color: transparent;
    padding: 0;
  }
  
  :global(.markdown-content blockquote) {
    border-left: 4px solid var(--color-accent, #00d4ff);
    padding-left: 1rem;
    margin-left: 0;
    color: #888;
    font-style: italic;
  }
  
  :global(.markdown-content a) {
    color: var(--color-accent, #00d4ff);
    text-decoration: underline;
  }
  
  :global(.markdown-content a:hover) {
    opacity: 0.8;
  }
</style>
