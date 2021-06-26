import React from 'react';

function Content({children}) {
    return (
        <section className="home-section pt-16 bg-gray-50 dark:bg-gray-900 dark:text-white transition-all">
            {/* <div className="home-content text-4xl">
            </div> */}
            <div className="flex p-4">
                {children}
            </div>
        </section>
    );
}

export default Content;