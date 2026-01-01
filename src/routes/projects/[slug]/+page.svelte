<script lang="ts">
  import ContentLayout from "../../../components/ContentLayout.svelte";
  import type { PageData } from './$types';
  
  export let data: PageData;
  const { project } = data;
</script>

<ContentLayout
  title={project.title}
  description={project.description}
  tags={project.tags}
  content={project.content}
  backLink="/projects"
  backLabel="Back to Projects"
  tagVariant="project"
/>

