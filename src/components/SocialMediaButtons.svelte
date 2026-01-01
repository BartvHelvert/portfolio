<script lang="ts">
  export let url: string;
  export let ariaLabel: string;
  export let iconClass: string;
</script>

<a href={url} target="_blank" rel="noopener" class="text-white text-2xl hover:text-accent transition-colors"
   aria-label={ariaLabel}>
  <i class={iconClass} aria-hidden="true"></i>
</a>

