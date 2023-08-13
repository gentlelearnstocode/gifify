import { Card } from "../../../components/common"
import { IGif } from "../interfaces/gif.interface"

type GifGridProps = {
  gifs: any;
  onClick: (gif: IGif) => void;
}

export const GifGrid = (props: GifGridProps) => {
  const { gifs, onClick } = props
  return (
    <>
      {gifs?.map((gif: IGif, index: number) => (
        <Card key={gif.id} onClick={() => onClick(gif)}
        >
          <img alt={gif.title} src={gif.images.fixed_height.url} />
        </Card>
      ))}
    </>
  )
}