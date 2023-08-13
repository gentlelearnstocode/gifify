import { OverlayDisplay, OverlayDisplayProps } from '../../../components/common';
import { Text } from '../../../components/core';
import { IGif } from '../interfaces/gif.interface';
import classes from '../styles/home.module.css';

type GifDisplayProps = OverlayDisplayProps & {
  gif: IGif;
};

export const GifDisplay = (props: GifDisplayProps) => {
  const { gif, ...otherProps } = props;
  return (
    <OverlayDisplay {...otherProps}>
      <div className={classes.gifDisplayWrapper}>
        <img className={classes.gifImg} alt={gif.title} src={gif.images.original.url} />
        <div className={classes.gifInfo}>
          <Text textSize="medium">{gif.title}</Text>
          <Text textSize="small">@{gif.username || 'unknown'}</Text>
          <Text textSize="small">Rating: {gif.rating}</Text>
        </div>
      </div>
    </OverlayDisplay>
  );
};
