import React from "react";
import { Select } from '@chakra-ui/react';

export default function Header({ setDinein }) {

    const setOrderingMethod = ({ target }) => {
        const isDiningIn = target.value === 'dine-in'
        setDinein(isDiningIn)
    }

    return (
        <div className="header">
            <div className="logo-and-name">
                <img className="logo" />
                <div className="name">De la Cuisine</div>
            </div>
            <div className="order-type-select-button">
                <Select focusBorderColor="#000000" textDecorationColor={"#000000"} onChange={setOrderingMethod}>
                    <option value='dine-in'>Dine-in</option>
                    <option value='take-away'>Take away</option>
                </Select>
            </div>
        </div>
    );
}
