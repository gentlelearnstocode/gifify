import { useQuery } from 'react-query';
import { enqueueSnackbar } from 'notistack';
import { AxiosResponse } from 'axios';

import { axios } from '@/libs/axios';
import { GIPHY_API_KEY, GIPHY_API_URL } from '@/config';
import { IGif } from '../interfaces/gif.interface';
import { IPagination } from '@/types/pagination.interface';

export const fetchTrendingGiphy = (
  pagination?: IPagination,
): Promise<AxiosResponse<IGif[], any>> => {
  const { limit = 12, offset = 0 } = pagination || {};
  return axios.get(
    `${GIPHY_API_URL}/gifs/trending?api_key=${GIPHY_API_KEY}&limit=${limit}&offset=${offset}&bundle=messaging_non_clips`,
  );
};

export const fetchSearchGiphy = (
  searchTerm: string,
  pagination?: IPagination,
): Promise<AxiosResponse<IGif[], any>> => {
  const { limit = 12, offset = 0 } = pagination || {};
  const search = `q=${searchTerm}`;
  return axios.get(
    `${GIPHY_API_URL}/gifs/search?api_key=${GIPHY_API_KEY}&${search}&limit=${limit}&offset=${offset}&bundle=messaging_non_clips
    `,
  );
};

export const useTrendingGiphyQuery = (searchTerm: string, pagination?: IPagination) => {
  return useQuery({
    queryKey: ['trendingGifs', searchTerm],
    queryFn: () =>
      Boolean(searchTerm)
        ? fetchSearchGiphy(searchTerm, pagination)
        : fetchTrendingGiphy(pagination),
    refetchOnWindowFocus: false,
    onSuccess: () => enqueueSnackbar({ variant: 'info', message: 'Gifs fetched successfully' }),
    onError: (error) => {
      console.log('Error:', error);
      enqueueSnackbar({ variant: 'error', message: 'Something went wrong' });
    },
  });
};
