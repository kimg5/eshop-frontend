import React from 'react';
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import SingleProductPage from './SingleProductPage'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  function ProductDetail({detail,closeHandler}) {
    const [open, setOpen] = React.useState(false);
   
    const handleClose = () => {
      setOpen(false);
      closeHandler(detail.row);
    };
  
    React.useEffect(() => {
       setOpen(detail.isOpen);
    }, [detail.isOpen]);
  
    return (
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <SingleProductPage closeHandler={handleClose} row={detail.row}/>
      </Dialog>
    );
  }

  export default ProductDetail;
  