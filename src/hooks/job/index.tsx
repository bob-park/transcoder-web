import { getCurrentJob, retry, search } from '@/entries/job/api';

import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export function useCurrentJob() {
  const { data, isPending } = useQuery<Job | null>({
    queryKey: ['job', 'current'],
    queryFn: () => getCurrentJob(),
    refetchInterval: 1_000,
  });

  return { currentJob: data, isLoading: isPending };
}

export function useSearchJob(statuses: string[]) {
  const { data, fetchNextPage, isLoading, refetch } = useInfiniteQuery<
    Page<Job>,
    unknown,
    InfiniteData<Page<Job>>,
    QueryKey,
    PageParams
  >({
    queryKey: ['job', 'search'],
    queryFn: () => search(statuses, 'createdDate,asc'),
    initialPageParam: {
      size: 25,
      page: 0,
    },
    getNextPageParam: (lastPage) => {
      let totalPage = Math.ceil(lastPage.total / lastPage.pageable.size);

      if (lastPage.total % lastPage.pageable.size > 0) {
        totalPage += 1;
      }

      const page = lastPage.pageable;
      const nextPage = page.page + 1;

      return {
        ...page,
        page: page.page + 1 > totalPage ? totalPage : nextPage,
      };
    },
    refetchInterval: 1_000,
  });

  return {
    pages: data?.pages || [],
    isLoading,
    fetchNextPage,
    reload: refetch,
  };
}

export function useRetryJob() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['job', 'retry'],
    mutationFn: (id: number) => retry(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['job'] });
    },
  });

  return { retry: mutate, isLoading: isPending };
}
