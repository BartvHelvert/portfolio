<script lang="ts">
  import ContentLayout from "../../../components/ContentLayout.svelte";
  import type { PageData } from './$types';
  
  export let data: PageData;
  const { post } = data;
</script>

<ContentLayout
  title={post.title}
  description={post.description}
  date={post.date}
  tags={post.tags}
  content={post.content}
  backLink="/blog"
  backLabel="Back to Blog"
  tagVariant="blog"
/>

