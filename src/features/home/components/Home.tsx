import { Button, FieldInput } from '../../../components/core';
import { Card } from '../../../components/common';
import { useTrendingGiphyQuery } from '../api/fetch-gifs';
import classes from '../styles/home.module.css';
import { IGif } from '../interfaces/gif.interface';

export const Home = () => {
  const { data: gifs, isSuccess } = useTrendingGiphyQuery()

  const render = () => {
    if (isSuccess) {
      return (
        <>
          {gifs?.map((gif: IGif, index: number) => <Card key={gif.id}>
            <img alt={`gif-${index}`} src={gif.images.fixed_height.url} />
          </Card>)}
        </>
      )
    }
  }


  return (
    <div className={classes.container}>
      <section className={classes.searchbar}>
        <FieldInput className={classes.searchInput} />
        <Button>Search</Button>
      </section>
      <section className={classes.gifWrapper}>
        {render()}
      </section>
    </div>
  );
};
