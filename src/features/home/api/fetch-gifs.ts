import { useQuery } from 'react-query';

import { axios } from '../../../libs/axios';
import { GIPHY_API_KEY, GIPHY_API_URL } from '../../../config';

export const fetchTrendingGiphy = () => {
  return axios.get(
    `https://api.giphy.com/v1/gifs/trending?api_key=TAikWbOQZkL0dyDP9944qvcdccTEi1w5&limit=1&offset=0&rating=g&bundle=messaging_non_clips
    `,
  );
};

export const useTrendingGiphyQuery = () => {
  return useQuery({
    queryKey: ['trendingGifs'],
    queryFn: () => fetchTrendingGiphy(),
  });
};
