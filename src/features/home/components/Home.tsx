import { useState, ChangeEvent } from 'react';

import { FieldInput } from '@components/core';
import { Spinner } from '@components/common';
import { useTrendingGiphyQuery } from '../api/fetch-gifs';
import { IGif } from '../interfaces/gif.interface';
import { GifGrid } from './GifGrid';
import { GifDisplay } from './GifDisplay';
import classes from '../styles/home.module.css';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGif, setSelectedGif] = useState<IGif | null>(null);

  const { data, isSuccess, isFetching } = useTrendingGiphyQuery(searchTerm);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

  const handleClickGif = (gif: IGif) => setSelectedGif(gif);

  const handleUnselectGif = () => setSelectedGif(null);

  const render = () => {
    if (isFetching) {
      return <Spinner />;
    }
    if (isSuccess) {
      return <GifGrid gifs={data} onClick={handleClickGif} />;
    }
  };

  console.log('gif', data);

  return (
    <div className={classes.container}>
      <FieldInput
        placeholder="Type to search your gif"
        fontSize="medium"
        iconright="search"
        className={classes.searchInput}
        onChange={handleSearch}
      />
      <section className={classes.gifWrapper}>{render()}</section>
      {selectedGif && (
        <GifDisplay gif={selectedGif} open={Boolean(selectedGif)} onClose={handleUnselectGif} />
      )}
    </div>
  );
};
