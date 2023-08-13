export interface IGif {
  id: string;
  title: string;
  url: string;
  images: IGifImages;
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
