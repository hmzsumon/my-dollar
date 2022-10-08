import React from 'react';
import bicoin from '../../assets/images/bitcoin.png';
import bkash from '../../assets/images/bkash_circle.png';
import comodo from '../../assets/images/comodo.png';
import liteCoin from '../../assets/images/lite-coin.png';
import nogod from '../../assets/images/nagad_circale.png';
import neteller from '../../assets/images/neteller.png';
import payeer from '../../assets/images/payeer.png';
import paypal from '../../assets/images/paypal.png';
import pm from '../../assets/images/pm.png';
import rocket from '../../assets/images/rocket.jpg';
import torn from '../../assets/images/torn_circle.png';
import usdt from '../../assets/images/usdt_circle.png';
import webMoney from '../../assets/images/webMoney.png';

const eeserveData = [
  {
    id: 1,
    name: 'Baksh Parsonal BDT',
    img: bkash,
    currency: 'BDT',
    amount: '40000',
  },
  {
    id: 2,
    name: 'Nagad Parsonal BDT',
    img: nogod,
    currency: 'BDT',
    amount: '60000',
  },
  {
    id: 3,
    name: 'Rocket Parsonal BDT',
    img: rocket,
    currency: 'BDT',
    amount: '30000',
  },
  {
    id: 4,
    name: 'Perfect Money USD',
    img: pm,
    currency: 'USD',
    amount: '10000',
  },
  { id: 5, name: 'Payeer USD', img: payeer, currency: 'USD', amount: '4000' },
  { id: 6, name: 'Paypal USD', img: paypal, currency: 'USD', amount: '2000' },
  { id: 7, name: 'Bitcoin BTC', img: bicoin, currency: 'BTC', amount: '0.5' },
  {
    id: 8,
    name: 'Litecoin LTC',
    img: liteCoin,
    currency: 'LTC',
    amount: '0.5',
  },
  { id: 9, name: 'Torn USD', img: torn, currency: 'USD', amount: '1000' },
  { id: 10, name: 'USDT USD', img: usdt, currency: 'USD', amount: '1000' },
  {
    id: 11,
    name: 'Webmoney USD',
    img: webMoney,
    currency: 'USD',
    amount: '1000',
  },
  {
    id: 12,
    name: 'Neteller USD',
    img: neteller,
    currency: 'USD',
    amount: '1000',
  },
  { id: 13, name: 'Comodo USD', img: comodo, currency: 'USD', amount: '1000' },
];

const Reserve = () => {
  return (
    <div>
      <div className='overflow-x-auto bg-white relative shadow-md sm:rounded-lg'>
        <h2 className='my-4 text-2xl text-center font-semibold text-gray-800'>
          Our Reserve Now
        </h2>
        <hr />
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='py-3 px-6'>
                Product name
              </th>

              <th scope='col' className='py-3 px-6'>
                Currency
              </th>
              <th scope='col' className='py-3 px-6'>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {eeserveData.map((data) => (
              <tr
                key={data.id}
                className='border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              >
                <td className='py-3 px-6'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <img
                        className='w-6 h-6 rounded-full'
                        src={data.img}
                        alt='logo'
                      />
                    </div>
                    <div className='ml-3'>
                      <span className='font-medium'>{data.name}</span>
                    </div>
                  </div>
                </td>
                <td className='py-3 px-6'>
                  <div className='flex items-center'>
                    <div className='ml-3'>
                      <span className='font-medium'>{data.currency}</span>
                    </div>
                  </div>
                </td>
                <td className='py-3 px-6'>
                  <div className='flex items-center'>
                    <div className='ml-3'>
                      <span className='font-medium'>{data.amount}</span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reserve;
