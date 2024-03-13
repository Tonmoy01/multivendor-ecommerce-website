import React from 'react';
import { Link } from 'react-router-dom';
import { BsCurrencyDollar } from 'react-icons/bs';
import { RiProductHuntLine } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Chart from 'react-apexcharts';

import adminJpg from '../../assets/admin.jpg';

function AdminDashboard() {
  const state = {
    series: [
      {
        name: 'Orders',
        data: [45, 87, 89, 77, 97, 94, 54, 99, 55, 67, 22, 57],
      },
      {
        name: 'Revenue',
        data: [40, 80, 85, 72, 95, 99, 51, 92, 56, 61, 20, 50],
      },
      {
        name: 'Sellers',
        data: [48, 84, 80, 74, 92, 91, 53, 95, 59, 65, 21, 55],
      },
    ],
    options: {
      color: ['#181ee8', '#181ee8'],
      plotOptions: {
        radius: 30,
      },
      chart: {
        backgroundColor: 'transparent',
        foreColor: '#d0d2d6',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ['smoth', 'straight', 'stepline'],
        lineCap: 'butt',
        colors: '#f0f0f0',
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      legend: {
        position: 'top',
      },
      responsive: [
        {
          breakpoint: 565,
          options: {
            yaxis: {
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
            },
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: '550px',
            },
          },
        },
      ],
    },
  };

  return (
    <div className='px-2 py-5 md:px-7'>
      <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>$5555</h2>
            <span className='font-medium text-md'>Total Sales</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
            <BsCurrencyDollar className='text-[#28c76f] shadow-lg' />
          </div>
        </div>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>20</h2>
            <span className='font-medium text-md'>Products</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl'>
            <RiProductHuntLine className='text-[#cd00e8] shadow-lg' />
          </div>
        </div>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>50</h2>
            <span className='font-medium text-md'>Sellers</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl'>
            <FaUsers className='text-[#00cfe8] shadow-lg' />
          </div>
        </div>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>100</h2>
            <span className='font-medium text-md'>Orders</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#7c67f01f] flex justify-center items-center text-xl'>
            <AiOutlineShoppingCart className='text-[#7367f0] shadow-lg' />
          </div>
        </div>
      </div>

      <div className='flex flex-wrap w-full mt-7'>
        <div className='w-full lg:w-7/12 lg:pr-3'>
          <div className='w-full bg-[#283046] p-4 rounded-md'>
            <Chart
              options={state.options}
              series={state.series}
              type='bar'
              height={350}
            />
          </div>
        </div>

        <div className='w-full mt-6 lg:w-5/12 lg:pl-4 lg:mt-0'>
          <div className='w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6]'>
            <div className='flex items-center justify-between'>
              <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>
                Recent Seller Message:
              </h2>
              <Link className='font-semibold text-sm text-[#d0d2d6]'>
                View all
              </Link>
            </div>
            <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
              <ol className='relative ml-4 border-1 border-slate-600'>
                <li className='mb-3 ml-6'>
                  <div className='absolute -left-5 shadow-lg flex justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'>
                    <img
                      src={adminJpg}
                      alt=''
                      className='w-full h-full rounded-full shadow-lg'
                    />
                  </div>
                  <div className='p-3 border rounded-lg shadow-sm bg-slate-800 border-slate-600'>
                    <div className='flex items-center justify-between mb-2'>
                      <Link className='font-normal text-md'>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>
                        4 days ago
                      </time>
                    </div>
                    <div className='p-2 text-sm font-normal border rounded-lg bg-slate-700 border-slate-800'>
                      How are you?
                    </div>
                  </div>
                </li>
                <li className='mb-3 ml-6'>
                  <div className='absolute -left-5 shadow-lg flex justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'>
                    <img
                      src={adminJpg}
                      alt=''
                      className='w-full h-full rounded-full shadow-lg'
                    />
                  </div>
                  <div className='p-3 border rounded-lg shadow-sm bg-slate-800 border-slate-600'>
                    <div className='flex items-center justify-between mb-2'>
                      <Link className='font-normal text-md'>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>
                        4 days ago
                      </time>
                    </div>
                    <div className='p-2 text-sm font-normal border rounded-lg bg-slate-700 border-slate-800'>
                      How are you?
                    </div>
                  </div>
                </li>
                <li className='mb-3 ml-6'>
                  <div className='absolute -left-5 shadow-lg flex justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'>
                    <img
                      src={adminJpg}
                      alt=''
                      className='w-full h-full rounded-full shadow-lg'
                    />
                  </div>
                  <div className='p-3 border rounded-lg shadow-sm bg-slate-800 border-slate-600'>
                    <div className='flex items-center justify-between mb-2'>
                      <Link className='font-normal text-md'>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>
                        4 days ago
                      </time>
                    </div>
                    <div className='p-2 text-sm font-normal border rounded-lg bg-slate-700 border-slate-800'>
                      How are you?
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full p-4 bg-[#283046] rounded-md mt-6'>
        <div className='flex items-center justify-between'>
          <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>
            Recent Orders
          </h2>
          <Link className='font-semibold text-sm text-[#d0d2d6]'>View all</Link>
        </div>

        <div className='relative overflow-x-auto'>
          <table className='w-full text-sm text-left text-[#d0d2d6]'>
            <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
              <tr>
                <th scope='col' className='px-4 py-3'>
                  Order ID
                </th>
                <th scope='col' className='px-4 py-3'>
                  Price
                </th>
                <th scope='col' className='px-4 py-3'>
                  Payment Status
                </th>
                <th scope='col' className='px-4 py-3'>
                  Order Status
                </th>
                <th scope='col' className='px-4 py-3'>
                  Active
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <tr key={idx}>
                  <td
                    scope='row'
                    className='px-4 py-3 font-medium whitespace-nowrap'
                  >
                    #4d485fe4ff
                  </td>
                  <td
                    scope='row'
                    className='px-4 py-3 font-medium whitespace-nowrap'
                  >
                    $440
                  </td>
                  <td
                    scope='row'
                    className='px-4 py-3 font-medium whitespace-nowrap'
                  >
                    <span>Pending</span>
                  </td>
                  <td
                    scope='row'
                    className='px-4 py-3 font-medium whitespace-nowrap'
                  >
                    <span>Pending</span>
                  </td>
                  <td
                    scope='row'
                    className='px-4 py-3 font-medium whitespace-nowrap'
                  >
                    <Link>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
