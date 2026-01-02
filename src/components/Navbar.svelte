<script>
    import { resolve } from '$app/paths';
</script>

<nav class="theme-nav shadow-md fixed w-full z-10" aria-label="Main navigation">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
            <a href={resolve('/')} class="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity text-white">Bart van Helvert</a>
            <div class="flex items-center space-x-8">
                <a href={resolve('/projects')} class="text-gray-500 hover:text-white transition-colors" aria-label="View projects">Projects</a>
                <a href={resolve('/blog')} class="text-gray-500 hover:text-white transition-colors" aria-label="Read blog posts">Blog</a>
            </div>
        </div>
    </div>
</nav>