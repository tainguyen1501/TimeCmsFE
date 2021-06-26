import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/ui/Button/Button';
import Pagination from '../../components/ui/Pagination/Pagination';

function Product() {

    const products = [
        {
            image: "https://cdn.sportsshoes.com/product/N/NIK18178/NIK18178_400_1.jpg",
            name: "NIKE AIR ZOOM PEGASUS 37 WOMEN'S RUNNING SHOES - SP21",
            price: 765,
            active: true,
            brand: 'Nike',
            quantity: 176
        },
        {
            image: "https://cdn.sportsshoes.com/product/N/NIK18138/NIK18138_400_1.jpg",
            name: "NIKE AIR ZOOM PEGASUS 37 RUNNING SHOES - SP21",
            price: 995,
            active: true,
            brand: 'Nike',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/N/NIK17873/NIK17873_400_1.jpg",
            name: "NIKE AIR ZOOM PEGASUS 37 RUNNING SHOES - SP21",
            price: 995,
            active: true,
            brand: 'Nike',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/N/NIK18144/NIK18144_400_1.jpg",
            name: "NIKE AIR ZOOM PEGASUS 37 FLYEASE RUNNING SHOES - SP21",
            price: 995,
            active: true,
            brand: 'Nike',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/N/NIK17925/NIK17925_400_1.jpg",
            name: "NIKE AIR ZOOM PEGASUS 37 SHIELD WOMEN'S RUNNING SHOES - HO20",
            price: 995,
            active: true,
            brand: 'Nike',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/A/ADI14748/ADI14748_400_1.jpg",
            name: "ADIDAS ADIZERO BOSTON 10 WOMEN'S RUNNING SHOES - SS21",
            price: 695,
            active: true,
            brand: 'Adidas',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/A/ADI13881/ADI13881_400_1.jpg",
            name: "ADIDAS TERREX AGRAVIC TR GORE-TEX WOMEN'S TRAIL RUNNING SHOES - SS21",
            price: 995,
            active: true,
            brand: 'Adidas',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/A/ADI13884/ADI13884_400_1.jpg",
            name: "ADIDAS TERREX AGRAVIC TR WOMEN'S TRAIL RUNNING SHOES - SS21",
            price: 995,
            active: true,
            brand: 'Adidas',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/A/ADI12297/ADI12297_400_1.jpg",
            name: "ADIDAS TERREX EASTRAIL GORE-TEX WOMEN'S WALKING SHOES - SS20",
            price: 995,
            active: true,
            brand: 'Adidas',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/A/ADI12221/ADI12221_400_7.jpg",
            name: "ADIDAS ADIZERO XCS WOMEN'S CROSS COUNTRY SPIKES - SS20",
            price: 995,
            active: true,
            brand: 'Adidas',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/A/ADI13476/ADI13476_400_1.jpg",
            name: "ADIDAS DISTANCESTAR WOMEN'S RUNNING SPIKES - AW20",
            price: 995,
            active: true,
            brand: 'Adidas',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/A/ADI13205/ADI13205_400_1.jpg",
            name: "ADIDAS TERREX AGRAVIC FLOW WOMEN'S TRAIL RUNNING SHOES - AW20",
            price: 995,
            active: true,
            brand: 'Adidas',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/A/ADI13202/ADI13202_400_1.jpg",
            name: "ADIDAS TERREX AGRAVIC GORE-TEX WOMEN'S TRAIL RUNNING SHOES - AW20",
            price: 995,
            active: true,
            brand: 'Adidas',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/B/BRO2176/BRO2176_400_1.jpg",
            name: "BROOKS TRANSCEND 7 MEN'S ROAD RUNNING SHOES",
            price: 995,
            active: true,
            brand: 'Brooks',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/B/BRO2175/BRO2175_400_1.jpg",
            name: "BROOKS TRANSCEND 7 MEN'S ROAD RUNNING SHOES",
            price: 995,
            active: true,
            brand: 'Brooks',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/B/BRO2289/BRO2289_400_1.jpg",
            name: "BROOKS CATAMOUNT WOMEN'S TRAIL RUNNING SHOES",
            price: 995,
            active: true,
            brand: 'Brooks',
            quantity: 17
        },
        {
            image: "https://cdn.sportsshoes.com/product/B/BRO2196/BRO2196_400_1.jpg",
            name: "BROOKS LEVITATE 4 WOMEN'S ROAD RUNNING SHOES",
            price: 995,
            active: true,
            brand: 'Brooks',
            quantity: 17
        }
    ]
    const [openFilter, setOpenFilter] = useState(false)
    return (
        <Layout title="Product">
           <div className="w-full">
                {/* Action */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch w-full">
                    <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="lg:ml-6 flex items-center">
                            <Button text="Delete selected" styleButton="btn-gray" svg='delete' />
                            <Button handlerOnClick={() => {setOpenFilter(!openFilter)}} text="Filter" styleButton="btn-gray" svg='M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z' />
                            <Button text="Create new" styleButton="btn-primary" svg='create' />
                        </div>
                    </div>
                </div>
                
                {/* Filter */}
                {
                    openFilter && 
                    <div className="vertical-dropdown mx-auto my-4 p-4 container bg-white dark:bg-gray-800 shadow-lg rounded">
                    <div className="-mx-3 md:flex mb-6">

                        <fieldset className="md:w-1/3 px-3 mb-6 md:mb-0">
                            <label for="email" className="block mt-2 text-sm font-semibold">Name</label>
                            <input className="border w-full p-2 mt-2 rounded focus:outline-none dark:bg-gray-700 dark:border-gray-700" required />
                        </fieldset>

                        <fieldset className="md:w-1/3 px-3 mb-6 md:mb-0">
                            <label for="email" className="block mt-2 text-sm font-semibold">Status</label>
                            <select className="border w-full p-2 mt-2 rounded focus:outline-none dark:bg-gray-700 dark:border-gray-700">
                                <option>All</option>
                                <option>Publish</option>
                                <option>Unpublish</option>
                            </select>
                        </fieldset>

                        <fieldset className="md:w-1/3 px-3 mb-6 md:mb-0">
                            <label for="email" className="block mt-2 text-sm font-semibold">Product type</label>
                            <select className="border w-full p-2 mt-2 rounded focus:outline-none dark:bg-gray-700 dark:border-gray-700">
                                <option>All</option>
                                <option>Simple</option>
                                <option>Grouped</option>
                            </select>
                        </fieldset>
                        
                    </div>


                    <div className="-mx-3 md:flex mb-6">
                        <fieldset className="md:w-1/3 px-3 mb-6 md:mb-0">
                            <label for="email" className="block mt-2 text-sm font-semibold">Category</label>
                            <select className="border w-full p-2 mt-2 rounded focus:outline-none dark:bg-gray-700 dark:border-gray-700">
                                <option>All</option>
                                <option>New</option>
                                <option>Trend</option>
                            </select>
                        </fieldset>
                        <fieldset className="md:w-1/3 px-3 mb-6 md:mb-0">
                            <label for="email" className="block mt-2 text-sm font-semibold">Brand</label>
                            <select className="border w-full p-2 mt-2 rounded focus:outline-none dark:bg-gray-700 dark:border-gray-700">
                                <option>All</option>
                                <option>Nike</option>
                                <option>Adidas</option>
                                <option>Puma</option>
                                <option>Brooks</option>
                            </select>
                        </fieldset>
                        <fieldset className="md:w-1/3 px-3 mb-6 md:mb-0">
                            <label for="email" className="block mt-2 text-sm font-semibold">Vendor</label>
                            <select className="border w-full p-2 mt-2 rounded focus:outline-none dark:bg-gray-700 dark:border-gray-700">
                                <option>All</option>
                                <option>Venfor 1</option>
                                <option>Venfor 2</option>
                                <option>Venfor 3</option>
                                <option>Venfor 4</option>
                            </select>
                        </fieldset>
                    </div>
                    
                    <div className="-mx-2 md:flex mb-6">
                        <div className="float-right">
                            <Button text="Search" styleButton="btn-primary" svg='search' />
                        </div>
                    </div>
                </div>
                }
                

                <div className="mt-4 mx-auto container bg-white dark:bg-gray-800 shadow-lg rounded">

                    {/* table */}
                    <div className="w-full px-8 overflow-x-scroll xl:overflow-x-hidden">
                        <table className="min-w-full bg-white dark:bg-gray-800">
                            {/* thead */}
                            <thead>
                                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                    <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="checkAll(this)" />
                                    </th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Image</th>

                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Product name</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Price</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Status</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Brand</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Stock</th>
                                    <td className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">Actions</td>
                                </tr>
                            </thead>
                            {/* tbody */}
                            <tbody>
                            {
                                products && products.map((product, index) => (
                                    <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                        <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                            <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                        </td>
                                        <td className="pr-6 whitespace-no-wrap">
                                            <div className="flex items-center">
                                                <div className="h-16 w-16">
                                                    <img src={product.image} alt="img" className="h-full w-full overflow-hidden shadow" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.name}</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">${product.price}.000</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.active ? 'active' : ''}</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.brand}</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.quantity > 0 ? `In stock (${product.quantity})` : 'Out of stock'}</td>
                                        <td className="pr-8 relative">
                                            <div className="flex items-center space-x-4 text-sm">
                                                <button
                                                    className="flex btn-gray items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                    aria-label="Edit"
                                                >
                                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                                    />
                                                    </svg>
                                                </button>
                                                <button
                                                    className="flex btn-gray items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                    aria-label="Delete"
                                                >
                                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clip-rule="evenodd"
                                                    />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="">
                        <Pagination />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Product;