import { loadProjects } from '$lib/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const projects = await loadProjects();
    return {
        projects
    };
};
