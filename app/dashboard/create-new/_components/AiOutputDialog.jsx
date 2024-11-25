import React, {useEffect} from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function AiOutputDialog({openDialog, setOpenDialog, orgImage,aiImage}) {
    useEffect(() => {
        if (openDialog) {
          document.getElementById('my_modal_1').showModal();
          }
        }
      , [openDialog]);

    const handleClose = () => {
        setOpenDialog(false);
    };      

  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method 
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>*/}
        
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Result:</h3>
                <ReactBeforeSliderComponent
                    firstImage={{
                        imageUrl:aiImage
                    }}
                    secondImage={{
                        imageUrl:orgImage
                    }}
                
                />                
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn" onClick={handleClose} >Close</button>
                    </form>
                </div>
            </div>
        </dialog>  
    </div>  
  )
}

export default AiOutputDialog