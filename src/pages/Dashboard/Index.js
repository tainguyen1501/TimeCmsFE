import React from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/ui/Button/Button';
import Chart1 from '../../components/Charts/Chart1';
import Chart2 from '../../components/Charts/Chart2';
import Chart3 from '../../components/Charts/Chart3';

function Dashboard() {

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
            image: "https://cdn.sportsshoes.com/product/N/NIK18144/NIK18144_400_1.jpg",
            name: "NIKE AIR ZOOM PEGASUS 37 FLYEASE RUNNING SHOES - SP21",
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
            image: "https://cdn.sportsshoes.com/product/B/BRO2175/BRO2175_400_1.jpg",
            name: "BROOKS TRANSCEND 7 MEN'S ROAD RUNNING SHOES",
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

    const invoices = [
        {
            customer: "https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png",
            product: "NIKE AIR",
            invoice: 123768,
            total: 895,
            status: 'Shipped'
        },
        {
            customer: "https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png",
            product: "NIKE AIR",
            invoice: 123768,
            total: 1895,
            status: 'Shipped'
        },
        {
            customer: "https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png",
            product: "Adidas",
            invoice: 123765,
            total: 995,
            status: 'Paid'
        },
        {
            customer: "https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png",
            product: "NIKE AIR",
            invoice: 123768,
            total: 695,
            status: 'Shipped'
        },
        {
            customer: "https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png",
            product: "NIKE AIR",
            invoice: 123768,
            total: 895,
            status: 'Shipped'
        }
    ]

    const socialTraffics =[
        {
            referral: 'Facebook',
            visitors: 7864,
            percent: 82
        },
        {
            referral: 'Twitter',
            visitors: 3864,
            percent: 49
        },
        {
            referral: 'Instagram',
            visitors: 1864,
            percent: 45
        },
        {
            referral: 'Google',
            visitors: 9864,
            percent: 93
        },
        {
            referral: 'Linkedin',
            visitors: 5864,
            percent: 72
        }
    ]

    const campaigns = [
        {
            name : 'Puma Sale',
            growth: 89,
            charges: 18976,
            status: 'Active'
        },
        {
            name : 'Adidas Shoes',
            growth: 99,
            charges: 58976,
            status: 'Active'
        },
        {
            name : 'Nike Air Jordan',
            growth: 79,
            charges: 38976,
            status: 'Active'
        },
        {
            name : 'Shirt 12 CSR',
            growth: 15,
            charges: 8976,
            status: 'Close'
        },
        {
            name : 'Puma Shoes',
            growth: 89,
            charges: 18976,
            status: 'Active'
        }
    ]
    return (
        <Layout title="Product">
            <div className="w-full container">
                <div className="grid xl:grid-cols-4 gap-6 md:grid-cols-2">
                    <div className="shadow-lg dark:bg-gray-800">
                        <div className="card">
                            <div className="card-body flex flex-col p-4">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="text-4xl text-indigo-700">
                                        <i className="bx bxs-cart ml-1 opacity-90"></i>
                                    </div>
                                    <span className="rounded-full px-2 py-1 text-white badge bg-primary text-xs">
                                        12%
                                        <i className="bx bxs-chevron-up ml-4"></i>
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <h1 className="font-bold text-2xl">9367</h1>
                                    <p className="text-gray-500">Items sales</p>
                                </div>                
                            </div>
                        </div>
                    </div>

                    <div className="shadow-lg dark:bg-gray-800 dark:border-gray-800">
                        <div className="card">
                            <div className="card-body flex flex-col p-4">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="text-4xl text-indigo-700">
                                        <i className="bx bxs-store ml-1 opacity-90"></i>
                                    </div>
                                    <span className="rounded-full px-2 py-1 text-white badge bg-red-400 text-xs">
                                        8%
                                        <i className="bx bxs-chevron-down ml-4"></i>
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <h1 className="font-bold text-2xl">2367</h1>
                                    <p className="text-gray-500">New Orders</p>
                                </div>                
                            </div>
                        </div>
                    </div>
                
                    <div className="shadow-lg dark:bg-gray-800 dark:border-gray-800">
                        <div className="card">
                            <div className="card-body flex flex-col p-4">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="text-4xl text-indigo-700">
                                        <i className="bx bx-sitemap ml-1 opacity-90"></i>
                                    </div>
                                    <span className="rounded-full px-2 py-1 text-white badge bg-primary text-xs">
                                        12%
                                        <i className="bx bxs-chevron-up ml-4"></i>
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <h1 className="font-bold text-2xl">6987</h1>
                                    <p className="text-gray-500">Total Products</p>
                                </div>                
                            </div>
                        </div>
                    </div>

                    <div className="shadow-lg dark:bg-gray-800 dark:border-gray-800">
                        <div className="card">
                            <div className="card-body flex flex-col p-4">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="text-4xl text-indigo-700">
                                        <i className="bx bxs-group ml-1 opacity-90"></i>
                                    </div>
                                    <span className="rounded-full px-2 py-1 text-white badge bg-primary text-xs">
                                        120%
                                        <i className="bx bxs-chevron-up ml-4"></i>
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <h1 className="font-bold text-2xl">5367</h1>
                                    <p className="text-gray-500">New Visitor</p>
                                </div>                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid mt-6 xl:grid-cols-2 gap-6 md:grid-cols-1">
                    <div className="border-t border-primary shadow-lg rounded p-4 dark:bg-gray-800 dark:border-gray-800">
                         {/* Best Sellers title */}
                         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch w-full">
                                <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                                    <div className="flex items-center border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-1">
                                        <h1 className="text-2xl font-bold dark:text-gray-400" id="page-view">
                                            Best Sellers
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                                    <div className="flex items-center">
                                    <Button text="View all" styleButton="btn-primary"/>
                                    </div>
                                </div>
                            </div>
                                
                        {/* Best Sellers table */}
                        <table className="min-w-full mt-4">
                            {/* thead */}
                            <thead>
                                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 py-8">
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Product</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"></th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Price</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Brand</th>
                                </tr>
                            </thead>
                            {/* tbody */}
                            <tbody>
                            {
                                products && products.map((product, index) => (
                                    <tr key={index} className="h-16 dark:border-gray-200">
                                        <td className="pr-6 whitespace-no-wrap">
                                            <div className="flex items-center">
                                                <div className="h-12 w-12">
                                                    <img src={product.image} alt="img"className="h-full w-full overflow-hidden shadow" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.name}</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">${product.price}.000</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.brand}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>

                    <div className="border-t border-primary shadow-lg rounded p-4 dark:bg-gray-800 dark:border-gray-800">
                         {/* Recent Orders title */}
                         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch w-full">
                                <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                                    <div className="flex items-center border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-1">
                                        <h1 className="text-2xl font-bold dark:text-gray-400" id="page-view">
                                            Recent Orders
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                                    <div className="flex items-center">
                                    <Button text="View all" styleButton="btn-primary"/>
                                    </div>
                                </div>
                            </div>
                                
                        {/* Recent Orders table */}
                        <table className="min-w-full mt-4">
                            {/* thead */}
                            <thead>
                                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 py-8">
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Customer</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Product</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Invoice</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Total</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Status</th>
                                </tr>
                            </thead>
                            {/* tbody */}
                            <tbody>
                            {
                                invoices && invoices.map((invoice, index) => (
                                    <tr key={index} className="h-16 dark:border-gray-200">
                                        <td className="pr-6 whitespace-no-wrap">
                                            <div className="flex items-center">
                                                <div className="h-8 w-8">
                                                    <img src={invoice.customer} alt="img"className="h-full w-full overflow-hidden" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{invoice.product}</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{invoice.invoice}</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">${invoice.total}.000</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{invoice.status}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid mt-6 xl:grid-cols-2 gap-6 md:grid-cols-1">
                    <div className="border-t border-primary shadow-lg rounded p-4 dark:bg-gray-800 dark:border-gray-800">
                         {/* Social Traffic title */}
                         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch w-full">
                                <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                                    <div className="flex items-center border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-1">
                                        <h1 className="text-2xl font-bold dark:text-gray-400" id="page-view">
                                            Social Traffic
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                                    <div className="flex items-center">
                                    <Button text="View all" styleButton="btn-primary"/>
                                    </div>
                                </div>
                            </div>
                                
                        {/* Social Traffic table */}
                        <table className="min-w-full mt-4">
                            {/* thead */}
                            <thead>
                                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 py-8">
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">REFERRAL</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">VISITORS</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"></th>
                                </tr>
                            </thead>
                            {/* tbody */}
                            <tbody>
                            {
                                socialTraffics && socialTraffics.map((socialTraffic, index) => (
                                    <tr key={index} className="h-16 dark:border-gray-200">
                                        <td className="text-sm font-bold pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{socialTraffic.referral}</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{socialTraffic.visitors}</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <div className="flex items-center">
                                            <span className="mr-2">{socialTraffic.percent}%</span>
                                            <div className="relative w-full">
                                                <div className={`overflow-hidden h-2 text-xs flex rounded ${socialTraffic.percent > 50 ? 'bg-blue-200' : 'bg-pink-200'}`}>
                                                    <div style={{width: `${socialTraffic.percent}%`}} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${socialTraffic.percent > 50 ? 'bg-blue-700' : 'bg-pink-700'}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>

                    <div className="border-t border-primary shadow-lg rounded p-4 dark:bg-gray-800 dark:border-gray-800">
                         {/* campaigns title */}
                         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch w-full">
                                <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                                    <div className="flex items-center border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-1">
                                        <h1 className="text-2xl font-bold dark:text-gray-400" id="page-view">
                                            Campaigns
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                                    <div className="flex items-center">
                                    <Button text="View all" styleButton="btn-primary"/>
                                    </div>
                                </div>
                            </div>
                                
                        {/* campaigns table */}
                        <table className="min-w-full mt-4">
                            {/* thead */}
                            <thead>
                                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 py-8">
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Campaign</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Growth</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Charges</th>
                                    <th className="font-bold text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Status</th>
                                </tr>
                            </thead>
                            {/* tbody */}
                            <tbody>
                            {
                                campaigns && campaigns.map((campaign, index) => (
                                    <tr key={index} className="h-16 dark:border-gray-200">
                                        <td className="text-sm font-bold pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{campaign.name}</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{campaign.growth}</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">${campaign.charges}.000</td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                            <span className={`py-1 px-3 rounded-full ${campaign.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-200 text-red-700'}`}>{campaign.status}</span>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Chart */}
                <div className="grid mt-6 xl:grid-cols-2 gap-6 md:grid-cols-1">
                    <div className="border-t border-primary shadow-lg rounded p-4 dark:bg-gray-800 dark:border-gray-800">
                        <Chart1 />
                    </div>

                    <div className="border-t border-primary shadow-lg rounded p-4 dark:bg-gray-800 dark:border-gray-800">
                        <Chart2 />
                    </div>
                </div>
                {/* End Chart */}


                {/* Chart */}
                <div className="grid mt-6 xl:grid-cols-2 gap-6 md:grid-cols-1">
                    <div className="border-t border-primary shadow-lg rounded p-4 dark:bg-gray-800 dark:border-gray-800">
                        <Chart3 />
                    </div>

                    <div className="border-t border-primary shadow-lg rounded p-4 dark:bg-gray-800 dark:border-gray-800">
                        <Chart2 />
                    </div>
                </div>
                {/* End Chart */}
            </div>


           
        </Layout>
    );
}

export default Dashboard;