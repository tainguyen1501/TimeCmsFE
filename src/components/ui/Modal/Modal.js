import React from 'react';
import Button from '../Button/Button';
function Modal({title = 'Message', closeButtonName = 'Close', handleClose, isConfirm, confirmButtonName = 'Yes', handleConfirm, show, children}) {
  return (
    <div className={`fixed z-30 inset-0 overflow-y-auto ${show ? 'block' : 'hidden'}`}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="rounded inline-block align-bottom bg-white rounded-smg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle dark:bg-gray-900" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="p-2 mb-2">
                    <div className="flex justify-between items-center">
                        <h3 className="px-3 text-xl leading-6 font-semibold py-2" id="modal-headline">
                            {title}
                        </h3>
                        <span onClick={handleClose} className="close-modal cursor-pointer px-1 py-1 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700">
                            <svg className="h-6 w-6 fill-current text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="px-2 sm:p-6">
                    <div className="sm:flex sm:items-start">
                        <div className="text-center sm:-mt-6 sm:text-left">
                            {children}
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <Button text={closeButtonName} handlerOnClick={() => handleClose()} />
                    {
                        isConfirm && 
                        <Button text={confirmButtonName} handlerOnClick={() => handleConfirm()} />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
export default Modal;