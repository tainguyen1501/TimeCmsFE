import React from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/ui/Button/Button';

function ButtonComponent() {
    return (
        <Layout title="ButtonComponent">
            <div className="w-full h-screen">
                <div className="mx-auto container">
                    <Button text="Create" svg='create' />
                    <Button text="Edit" svg='edit' />
                    <Button text="Delete" svg='delete' />
                    <Button text="Save" svg='save' />
                </div>
            </div>
        </Layout>
    );
}

export default ButtonComponent;