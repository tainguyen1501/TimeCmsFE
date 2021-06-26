import React, { useState } from 'react';
import Button from '../../components/ui/Button/Button';
import Modal        from '../../components/ui/Modal/Modal';
import Layout from '../../components/Layout/Layout';

function ModalComponent() {
    const [isShow, setIsShow] = useState(false);
    const modalEvent = () =>{
        setIsShow(!isShow)
    }
    return (
        <Layout title="ButtonComponent">
            <div className="w-full h-screen">
                <Button text="Open Modal" styleButton="btn-primary" svg='save' handlerOnClick={() => modalEvent()} />
                <Modal show={isShow} handleClose={() => setIsShow(false)}>
                    <fieldset className="mt-2">
                        <label for="email" className="block mt-2 text-sm font-semibold">Name</label>
                        <p className="text-sm text-gray-500">
                        Start with a capital letter and use only alphanumeric characters and underscores.
                        </p>
                        <input className="border w-full p-3 mt-2 rounded-sm focus:outline-none dark:bg-gray-700 dark:border-gray-700" required />
                    </fieldset>

                    <fieldset className="mt-2">
                        <label for="email" className="block mt-2 text-sm font-semibold">Name</label>
                        <p className="text-sm text-gray-500">
                        Start with a capital letter and use only alphanumeric characters and underscores.
                        </p>
                        <textarea rows="6" className="border w-full p-3 mt-2 rounded-sm focus:outline-none dark:bg-gray-700 dark:border-gray-700" required />
                    </fieldset>
                </Modal>
            </div>
        </Layout>
        
    );
}

export default ModalComponent;