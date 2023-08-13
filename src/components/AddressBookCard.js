import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddressBookCard = ({
  editable,
  user_name,
  user_address,
  city,
  region,
  number,
}) => {
  const navigate=useNavigate()
  return (
    <div
      className={
        editable
          ? 'bg-white py-3 flex flex-row p-4'
          : 'bg-white py-3 flex flex-row'
      }
    >
      <div className={editable ? 'w-[85%] p-2' : 'w-[85%]'}>
        <p className="mb-2">
          {`${user_name}'FirstName LastName'`}
        </p>
        <p className="mb-2">
          {`${user_address}
            'Tripoli, Near azmi street, Azmi square, Azmi Building'`}
        </p>
        <p className="mb-2">{'Tripoli'}</p>
        <p className="mb-2">{'Lebanon'}</p>
        <p className="mb-5">{'+961 76 000 000'}</p>
        {editable && (
          <>
            <p className="text-gray-400 text-xs mb-1">
              This is your delivery address
            </p>
            <p className="text-gray-400 text-xs mb-1">
              This is your default billing address
            </p>
          </>
        )}
      </div>

      {editable && (
        <div className="basis-[15%] ml-auto pt-4">
          <button
            onClick={() => navigate('AddressBookEdit')}
          >
            {/* <Ionicons style={styles.iconStyles} name="create" /> */}
          </button>
          <button>
            {/* <Ionicons style={styles.iconStyles} name="trash" /> */}
          </button>
        </div>
      )}
    </div>
  );
};



export default AddressBookCard;