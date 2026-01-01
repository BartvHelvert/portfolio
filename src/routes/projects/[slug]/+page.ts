import { error } from '@sveltejs/kit';
import { loadProject } from '../../../lib/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const project = await loadProject(params.slug);
  
  if (!project) {
    throw error(404, 'Project not found');
  }
  
  return {
    project
  };
};

