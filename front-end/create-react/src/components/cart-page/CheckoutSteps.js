import React from 'react'

const CheckoutSteps = ({ bag, address, payment }) => {
    return (
        <>
            <div className='border'>
                {bag &&
                    <div className='flex  justify-center gap-x-3 my-5  font-medium'>
                        <div className='text-rose-500 border-b-2 border-rose-500 pb-1'>Bag</div>
                        <div>-------</div>
                        <div>Address</div>
                        <div>-------</div>
                        <div>Payment</div>
                    </div>
                }

                {address &&
                    <div className='flex  justify-center gap-x-3 my-5  font-medium'>
                        <div>Bag</div>
                        <div>-------</div>
                        <div className='text-rose-500 border-b-2 border-rose-500 pb-1'>Address</div>
                        <div>-------</div>
                        <div>Payment</div>
                    </div>
                }

                {payment &&
                    <div className='flex  justify-center gap-x-3 my-5  font-medium'>
                        <div>Bag</div>
                        <div>-------</div>
                        <div>Address</div>
                        <div>-------</div>
                        <div className='text-rose-500 border-b-2 border-rose-500 pb-1'>Payment</div>
                    </div>
                }
            </div>
        </>
    )
}

export default CheckoutSteps