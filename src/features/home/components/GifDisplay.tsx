import { OverlayDisplay, OverlayDisplayProps } from "../../../components/common"
import { IGif } from "../interfaces/gif.interface"

type GifDisplayProps = OverlayDisplayProps & {
  gif: IGif;
}

export const GifDisplay = (props: GifDisplayProps) => {
  const { gif, ...otherProps } = props
  return (
    <OverlayDisplay {...otherProps}>
      <img alt={gif.title} src={gif.images.original.url} />
    </OverlayDisplay>
  )
}