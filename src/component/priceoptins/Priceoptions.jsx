import React from 'react';
import Priceoption from '../priceoption/priceoption';
const Priceoptions = () => {
    const bikeditals = [
        {
            "id": 1,
            "name": "Mountain Bike",
            "price": 500.00,
            "fechars": [
                "Aluminum frame",
                "27.5-inch wheels",
                "21 gears",
                "Disc brakes",
                "Front and Rear suspension",
                "Red/Black color"
            ]
        },
        {
            "id": 2,
            "name": "Road Bike",
            "price": 750.00,
            "fechars": [
                "Carbon fiber frame",
                "28-inch wheels",
                "18 gears",
                "Caliper brakes",
                "No suspension",
                "Blue/White color"
            ]
        },
        {
            "id": 3,
            "name": "Hybrid Bike",
            "price": 600.00,
            "fechars": [
                "Aluminum frame",
                "26-inch wheels",
                "24 gears",
                "Disc brakes",
                "Front suspension",
                "Green/Black color"
            ]
        }
    ]

    return (
        <div>

            <h2>price</h2>
            <div className=' flex gird grid-cols-3 gap-4'>
                {
                    bikeditals.map(option=><Priceoption key ={option.id}option={option}></Priceoption>)
                }
            </div>
        </div>
    );
};

export default Priceoptions;