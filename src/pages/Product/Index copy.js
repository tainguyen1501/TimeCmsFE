import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/ui/Button/Button';
import Table from '../../components/ui/Table/Table';
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
                {/* Filter */}
                <div className="vertical-dropdown -mt-4 mx-8 p-4 lg:px-8 justify-between border rounded" style={{height: openFilter ? '240px' : '0px', visibility: openFilter ? 'visible' : 'hidden'}}>
<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" />
      <p className="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe" />
    </div>
  </div>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-full px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************" />
      <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="-mx-3 md:flex mb-2">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
</div>
                    </div>
                <div className="mx-auto container bg-white dark:bg-gray-800 shadow-lg rounded">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                        <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                            <div className="flex items-center">
                                <a className="text-gray-600 dark:text-gray-400 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                        <line x1={16} y1={5} x2={19} y2={8} />
                                    </svg>
                                </a>
                                <a className="text-gray-600 dark:text-gray-400 mx-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <circle cx={12} cy={12} r={3} />
                                    </svg>
                                </a>
                                <a className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                    </svg>
                                </a>
                                <a className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={8} y={8} width={12} height={12} rx={2} />
                                        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                                    </svg>
                                </a>
                                <a className="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={7} x2={20} y2={7} />
                                        <line x1={10} y1={11} x2={10} y2={17} />
                                        <line x1={14} y1={11} x2={14} y2={17} />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                            <div className="lg:ml-6 flex items-center">
                                <Button text="Delete selected" style="btn-gray" svg='delete' />
                                <Button handlerOnClick={() => {setOpenFilter(!openFilter)}} text="Filter" style="btn-gray" svg='M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z' />
                                <Button text="Create new" style="btn-primary" svg='create' />
                            </div>
                        </div>
                    </div>

                   

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
                                                    <img src={product.image} alt className="h-full w-full overflow-hidden shadow" />
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