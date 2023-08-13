import { useState, ChangeEvent } from 'react';

import { Button, FieldInput } from '../../../components/core';
import { Card, Spinner } from '../../../components/common';
import { useTrendingGiphyQuery } from '../api/fetch-gifs';
import classes from '../styles/home.module.css';
import { IGif } from '../interfaces/gif.interface';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { data: gifs, isSuccess, isFetching } = useTrendingGiphyQuery(searchTerm);

  const render = () => {
    if (isFetching) {
      return <Spinner />;
    }
    if (isSuccess) {
      return (
        <>
          {gifs?.map((gif: IGif, index: number) => (
            <Card key={gif.id}>
              <img alt={`gif-${index}`} src={gif.images.fixed_height.url} />
            </Card>
          ))}
        </>
      );
    }
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

  return (
    <div className={classes.container}>
      <section className={classes.searchbar}>
        <FieldInput
          placeholder="Type to search your gif"
          fontSize="medium"
          iconright="search"
          className={classes.searchInput}
          onChange={handleSearch}
        />
      </section>
      <section className={classes.gifWrapper}>{render()}</section>
    </div>
  );
};
