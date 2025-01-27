import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Make sure you're fetching fresh data if needed
});
