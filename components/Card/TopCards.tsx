import React from 'react';

const arrTopCards = [
  {
    price: '$7,846',
    content: 'Daily Revenue',
    percent: '+18%',
  },
  {
    price: '$23,846',
    content: 'YTD Revenue',
    percent: '+18%',
  },
  {
    price: '$78,846',
    content: 'Users',
    percent: '+18%',
  },
];

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      {arrTopCards.map((item, idx) => (
        <div
          key={idx}
          className={`${
            idx !== arrTopCards.length - 1 && 'lg:col-span-2 col-span-1'
          } bg-white flex justify-between w-full border p-4 rounded-lg`}
        >
          <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>{item.price}</p>
            <p className='text-gray-600'>{item.content}</p>
          </div>
          <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>{item.percent}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
