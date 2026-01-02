import { error } from '@sveltejs/kit';
import { loadProject, loadProjects } from '../../../lib/content';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = async ({ params }) => {
  const project = await loadProject(params.slug);
  
  if (!project) {
    throw error(404, 'Project not found');
  }
  
  return {
    project
  };
};

export const entries: EntryGenerator = async () => {
  const projects = await loadProjects();
  return projects.map((project) => ({ slug: project.slug }));
};

