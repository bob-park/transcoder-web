import api from '@/entries';

export async function getCurrentJob() {
  const result = await api
    .get('/api/job/search', {
      searchParams: {
        statues: 'PROCEEDING',
      },
    })
    .json<Page<Job>>();

  const { content } = result;

  if (content.length === 0) {
    return;
  }

  return content[0];
}

export async function search(statuses: string[]) {
  return api
    .get('/api/job/search', {
      searchParams: {
        statuses: statuses.join(','),
      },
    })
    .json<Page<Job>>();
}

export async function retry(id: number) {
  return api.put(`/api/job/${id}/retry`).json<Job>();
}
