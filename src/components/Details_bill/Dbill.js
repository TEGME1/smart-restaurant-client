import React from 'react'
import '../Details_bill/Dbill.css'
import { useSelector } from 'react-redux'; // Added

export default function Dbill() {
    const quantity = useSelector(state => state.quantities)
    const foodItems = Object.values(quantity)
    const total = foodItems.reduce((total, current) => total + Number(current.price) * Number(current.quantity), 0)
    return (
        <div className='Dbill-outer'>
            <div className='Dbill-inner'>
                <div className='Dbill-inner-title-outer'>
                    <label className='Dbill-inner-title'>Item </label>
                </div>
                <div className='Dbill-inner-title-outer'>
                    <label className='Dbill-inner-title'>Quantity</label>
                </div>
                <div className='Dbill-inner-title-outer'>
                    <label className='Dbill-inner-title' >Price</label>
                </div>
            </div>
            <div className='Dbill-inner1'>
                {
                    foodItems.map(item => (
                        <div className='Dbill-inner2'>
                            <div className='Dbill-inner-item-outer1'>
                                <label className='Dbill-inner-item'>{item.name}</label>
                            </div>
                            <div className='Dbill-inner-item-outer'>
                                <label className='Dbill-inner-item'>{item.quantity}</label>
                            </div>
                            <div className='Dbill-inner-item-outer'>
                                <label className='Dbill-inner-item' >{item.quantity * item.price} /-</label>
                            </div>
                        </div>
                    ))
                }
                <div className='Dbill-inner3-outer'>
                    <div className='Dbill-inner3'>
                        <div className='Dbill-inner-item-outer1'>
                            <label className='Dbill-inner-item1'>TAX : </label>
                        </div>
                        <div className='Dbill-inner-item-outer'>
                            <label className='Dbill-inner-item1'>{total * 0.18}</label>
                        </div>
                    </div>
                </div>
                <div className='Dbill-total-outer'>
                    {
                        <div className='Dbill-total-text-outer'>
                            <label className='Dbill-total-text'>Total: {Math.round(total * 1.18)}/-</label>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
