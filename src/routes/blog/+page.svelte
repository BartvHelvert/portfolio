<script>
  import Navbar from "../../components/Navbar.svelte";
  import CardPanel from "../../components/CardPanel.svelte";
</script>

<Navbar></Navbar>

<main class="pt-24 min-h-screen">
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl font-bold text-primary mb-8">Blog</h1>
      <div class="space-y-8">
        <!-- Blog post cards will go here -->
        <CardPanel
          title="Blog Post Title"
          description="This is a placeholder for blog posts. Write about your experiences, technical insights, or anything you'd like to share with your audience."
          date="January 1, 2024"
          category="Category"
          link="#"
          variant="blog"
        />
        
        <CardPanel
          title="Blog Post Title"
          description="This is a placeholder for blog posts. Write about your experiences, technical insights, or anything you'd like to share with your audience."
          date="January 1, 2024"
          category="Category"
          link="#"
          variant="blog"
        />
        
        <CardPanel
          title="Blog Post Title"
          description="This is a placeholder for blog posts. Write about your experiences, technical insights, or anything you'd like to share with your audience."
          date="January 1, 2024"
          category="Category"
          link="#"
          variant="blog"
        />
      </div>
    </div>
  </div>
</main>

