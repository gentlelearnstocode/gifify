import { useQuery } from 'react-query';

import { axios } from '../../../libs/axios';
import { GIPHY_API_KEY, GIPHY_API_URL } from '../../../config';
import { AxiosResponse } from 'axios';
import { IGif } from '../interfaces/gif.interface';

export const fetchTrendingGiphy = (): Promise<AxiosResponse<IGif[], any>> => {
  return axios.get(
    `${GIPHY_API_URL}/gifs/trending?api_key=${GIPHY_API_KEY}&limit=10&offset=0&rating=g&bundle=messaging_non_clips
    `,
  );
};

export const fetchSearchGiphy = (searchTerm: string): Promise<AxiosResponse<IGif[], any>> => {
  const search = `q=${searchTerm}`;
  return axios.get(
    `${GIPHY_API_URL}/gifs/search?api_key=${GIPHY_API_KEY}&${search}&limit=10&offset=0&rating=g&bundle=messaging_non_clips
    `,
  );
};

export const useTrendingGiphyQuery = (searchTerm: string) => {
  return useQuery({
    queryKey: ['trendingGifs', searchTerm],
    queryFn: () => (Boolean(searchTerm) ? fetchSearchGiphy(searchTerm) : fetchTrendingGiphy()),
    refetchOnWindowFocus: false,
  });
};
