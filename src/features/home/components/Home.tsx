import { FieldInput } from '../../../components/core';
import { useTrendingGiphyQuery } from '../api/fetch-gifs';
import classes from '../styles/home.module.css';

export const Home = () => {
  const trendingQuery = useTrendingGiphyQuery()

  console.log('query log', trendingQuery);

  return (
    <div className={classes.container}>
      <FieldInput />
    </div>
  );
};
