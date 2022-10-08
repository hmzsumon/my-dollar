import React from 'react';
import bicoin from '../../assets/images/bitcoin.png';
import comodo from '../../assets/images/comodo.png';
import liteCoin from '../../assets/images/lite-coin.png';
import neteller from '../../assets/images/neteller.png';
import payeer from '../../assets/images/payeer.png';
import paypal from '../../assets/images/paypal.png';
import pm from '../../assets/images/pm.png';
import torn from '../../assets/images/torn_circle.png';
import usdt from '../../assets/images/usdt_circle.png';
import webMoney from '../../assets/images/webMoney.png';

const methdos = [
  {
    id: 4,
    name: 'Perfect Money USD',
    img: pm,
    currency: 'USD',
    buy: 88,
    sell: 90,
  },
  {
    id: 5,
    name: 'Payeer USD',
    img: payeer,
    currency: 'USD',
    buy: 85,
    sell: 92,
  },
  {
    id: 6,
    name: 'Paypal USD',
    img: paypal,
    currency: 'USD',
    buy: 80,
    sell: 95,
  },
  {
    id: 7,
    name: 'Bitcoin BTC',
    img: bicoin,
    currency: 'BTC',
    buy: 88,
    sell: 92,
  },
  {
    id: 8,
    name: 'Litecoin LTC',
    img: liteCoin,
    currency: 'LTC',
    buy: 88,
    sell: 92,
  },
  { id: 9, name: 'Torn USD', img: torn, currency: 'USD', buy: 88, sell: 92 },
  { id: 10, name: 'USDT USD', img: usdt, currency: 'USD', buy: 85, sell: 92 },
  {
    id: 11,
    name: 'Webmoney USD',
    img: webMoney,
    currency: 'USD',
    buy: 80,
    sell: 95,
  },
  {
    id: 12,
    name: 'Neteller USD',
    img: neteller,
    currency: 'USD',
    buy: 80,
    sell: 95,
  },
  {
    id: 13,
    name: 'Comodo USD',
    img: comodo,
    currency: 'USD',
    buy: 80,
    sell: 95,
  },
];

const BuySellRate = () => {
  return (
    <div>
      <div className='overflow-x-auto bg-white relative shadow-md sm:rounded-lg'>
        <h2 className='my-4 text-2xl text-center font-semibold text-gray-800'>
          Today's Buy-Sell Rate
        </h2>
        <hr />
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='py-3 px-6'>
                Product name
              </th>

              <th scope='col' className='py-3 px-6'>
                We Buy
              </th>
              <th scope='col' className='py-3 px-6'>
                We Sell
              </th>
            </tr>
          </thead>
          <tbody>
            {methdos.map((data) => (
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
                      <span className='font-medium'>{data.buy} TK</span>
                    </div>
                  </div>
                </td>
                <td className='py-3 px-6'>
                  <div className='flex items-center'>
                    <div className='ml-3'>
                      <span className='font-medium'>{data.sell} TK</span>
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

export default BuySellRate;
