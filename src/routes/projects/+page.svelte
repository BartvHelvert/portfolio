<script>
  import Navbar from "../../components/Navbar.svelte";
  import CardPanel from "../../components/CardPanel.svelte";
</script>

<Navbar></Navbar>

<main class="pt-24 min-h-screen">
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-5xl font-bold text-primary mb-8">Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project cards will go here -->
        <CardPanel
          title="Project Title"
          description="Project description goes here. This is a placeholder for future projects."
          tags={["Technology", "Stack"]}
          link="#"
          variant="project"
        />
        
        <CardPanel
          title="Project Title"
          description="Project description goes here. This is a placeholder for future projects."
          tags={["Technology", "Stack"]}
          link="#"
          variant="project"
        />
        
        <CardPanel
          title="Project Title"
          description="Project description goes here. This is a placeholder for future projects."
          tags={["Technology", "Stack"]}
          link="#"
          variant="project"
        />
      </div>
    </div>
  </div>
</main>

