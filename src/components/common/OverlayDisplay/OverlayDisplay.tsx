import { Dialog, DialogContent, DialogProps, DialogContentProps } from "@mui/material"

export type OverlayDisplayProps = DialogProps & DialogContentProps

export const OverlayDisplay = (props: OverlayDisplayProps) => {
  const { children, open, onClose } = props

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}