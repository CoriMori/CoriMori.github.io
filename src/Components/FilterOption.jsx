import React from 'react'

const FilterOption = ({ label, checked, onChangeEvent }) => {
    return (
        <div>
            <input type='checkbox' id={label} checked={checked} onChange={() => { onChangeEvent(); }}></input>
            <label htmlFor={label} className='ml-2'>{label}</label>
        </div>
    )
}

export default FilterOption