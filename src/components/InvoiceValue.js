import React from 'react';
import './Invoice.css'; // Make sure to have a corresponding CSS file
import Button from './Button';

const InvoiceValue = ({ label, value, isBold }) => (
  <div className="flex flex-row justify-between mb-3">
    <span className={isBold ? 'isBold letterSpaced' : ''}>
      {label}
    </span>
    <span className={isBold ? 'isBold' : ''}>
      {typeof value === 'string' ? value.toUpperCase() : `$ ${value}`}
    </span>
  </div>
);

const Invoice = ({ deliveryMethod, itemsArr }) => {
  const termsCondition =
    'By placing the order you agree to our terms and conditions, privacy and returns policy, and consent to some of your data being stored by COUPWAY may be used to make future shopping experiences better for you';

  return (
    <div className="bg-ededed p-3">
      <InvoiceValue label="Sub-total" value={160} />
      <InvoiceValue label="Delivery" value={'Free'} />
      <InvoiceValue label="TOTAL TO PAY" value={160} isBold={true} />
      <Button label={'place order'} />
      <span className="text-gray-400 text-xs mt-2">{termsCondition}</span>
    </div>
  );
};

export default Invoice;
