import { IGif } from '../interfaces/gif.interface';

type GifGridProps = {
  gifs: any;
  onClick: (gif: IGif) => void;
};

export const GifGrid = (props: GifGridProps) => {
  const { gifs, onClick } = props;
  return (
    <>
      {gifs?.map((gif: IGif) => (
        <img onClick={() => onClick(gif)} key={gif.id} alt={gif.title} src={gif.images.fixed_height.url} />
      ))}
    </>
  );
};
