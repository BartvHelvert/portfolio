import type { Component } from 'svelte';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: Component;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  content: Component;
}

interface MarkdownModule {
  default: Component;
  metadata?: {
    title?: string;
    date?: string;
    description?: string;
    tags?: string[];
  };
}

// Helper to ensure metadata tags are a string array
function ensureStringArray(value: any): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === 'string' && value.trim() !== '') return [value.trim()];
  return [];
}

// Load all blog posts
export async function loadBlogPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob<MarkdownModule>('/src/content/blog/*.md', { eager: true });
  
  const posts: BlogPost[] = [];
  
  for (const path in modules) {
    const module = modules[path];
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    if (module && module.default) {
      posts.push({
        slug,
        title: module.metadata?.title || 'Untitled',
        date: module.metadata?.date || '',
        description: module.metadata?.description || '',
        tags: ensureStringArray(module.metadata?.tags),
        content: module.default
      });
    }
  }
  
  // Sort by date (newest first)
  return posts.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Load a single blog post
export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await loadBlogPosts();
  return posts.find(p => p.slug === slug) || null;
}

// Load all projects
export async function loadProjects(): Promise<Project[]> {
  const modules = import.meta.glob<MarkdownModule>('/src/content/projects/*.md', { eager: true });
  
  const projects: Project[] = [];
  
  for (const path in modules) {
    const module = modules[path];
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    if (module && module.default) {
      projects.push({
        slug,
        title: module.metadata?.title || 'Untitled',
        description: module.metadata?.description || '',
        tags: ensureStringArray(module.metadata?.tags),
        content: module.default
      });
    }
  }
  
  return projects;
}

// Load a single project
export async function loadProject(slug: string): Promise<Project | null> {
  const projects = await loadProjects();
  return projects.find(p => p.slug === slug) || null;
}

