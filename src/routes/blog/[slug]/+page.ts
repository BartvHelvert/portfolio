import { error } from '@sveltejs/kit';
import { loadBlogPost, loadBlogPosts } from '../../../lib/content';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = async ({ params }) => {
  const post = await loadBlogPost(params.slug);
  
  if (!post) {
    throw error(404, 'Post not found');
  }
  
  return {
    post
  };
};

export const entries: EntryGenerator = async () => {
  const posts = await loadBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

