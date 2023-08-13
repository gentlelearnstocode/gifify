export interface IGif {
  id: string;
  title: string;
  url: string;
  images: IGifImages;
  username: string;
  rating: string;
}

export interface IGifImages {
  fixed_height: {
    url: string;
  };
  original: {
    height: string;
    width: string;
    url: string;
  };
}
