import React from 'react';
import PropTypes from 'prop-types'
import { AiFillCheckCircle } from "react-icons/ai";
const Fichar = ({fcompo}) => {
    return (
        <div className='flex'>
            <h2 className='flex items-center gap-2'>
            <AiFillCheckCircle className='text-red-500'></AiFillCheckCircle> {fcompo}
            </h2>
        </div>
    );
};
Fichar.propTypes={
    fcompo:PropTypes.string
}
export default Fichar;