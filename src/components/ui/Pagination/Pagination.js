import React from 'react';

function Pagination() {
    return (
        <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
             <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                        <div className="flex items-center border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-1">
                            <p className="text-base text-gray-600 dark:text-gray-400" id="page-view">
                                Viewing 1 - 20 of 60
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                    <div className="flex items-center">
                    <a href="/" className="relative inline-flex items-center px-2 py-2 text-gray-600 dark:text-gray-400 mr-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <span className="sr-only">Next</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="/" aria-current="page" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 mr-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                1
                            </a>
                            <a href="/" aria-current="page" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 mr-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                2
                            </a>
                            <a href="/" aria-current="page" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 mr-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                ...
                            </a>
                            <a href="/" aria-current="page" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 mr-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                14
                            </a>
                            <a href="/" aria-current="page" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 mr-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                15
                            </a>
                           
                            <a href="/" className="relative inline-flex items-center px-2 py-2 text-gray-600 dark:text-gray-400 mr-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <span className="sr-only">Next</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
        </div>
    );
}

export default Pagination;