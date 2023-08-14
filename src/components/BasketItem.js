
import React from 'react';

const BasketItem = ({ image, title, placeName, price }) => {
  return (
    <div className="mt-2">
      <div className="flex flex-row h-28 bg-white p-2" onClick={() => alert('pressed')}>
        <div style={{ width: '30%' }}>
          <img
            src="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="food image"
            style={styles.imageStyles}
          />
        </div>

        <div className="ml-1 px-1 flex flex-col justify-between" style={{ flexBasis: '65%' }}>
          <span className="font-bold">{price || '$ 20.00'}</span>
          <div className="self-start">
            <p className="text-xs ">20% discount on sea food dishes</p>
            <p className="text-md text-light-green font-semibold">RestoName</p>
            <p className="text-sm text-gray-500">lorem lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  imageStyles: {
    maxWidth: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default BasketItem;