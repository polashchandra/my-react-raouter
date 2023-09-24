import React from 'react';
import PropTypes from 'prop-types';
import Fichar from '../Fichar/Fichar';

const priceoption = ({option}) => {
    const {name,fechars,price} = option
    return (
        <div className='bg-emerald-700 mx-auto p-10 text-gray-100 flex flex-col'>
            <h2>
                <span className='text-5xl'>{price}</span>
                <span className='text-1xl'>/price</span>
            </h2>
            <h2 className='text-4xl'>
                {name}
            </h2>
            <div className='flex-grow'>
                {
                    fechars.map((fcompo,idx)=><Fichar key={idx} fcompo={fcompo}></Fichar>)
                }
            </div>
            <button className="w-full bg-red-500 py-2 mt-10">Buy now</button>
        </div>
    );
};

priceoption.propTypes = {
    option:PropTypes.object
};

export default priceoption;