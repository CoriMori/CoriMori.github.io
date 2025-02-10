import React from 'react'

const NavButton = ({ buttonText, img, link, onClickEvent }) => {
    const HandleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
        onClickEvent();
    }

    if (img) {
        return (
            <button type="button" className='btn-img' onClick={() => HandleClick()}>
                <img src={img} alt={buttonText} />
            </button>
        )
    }
    return (
        <button type="button" className='btn-standard' onClick={() => HandleClick()}>
            <span>{buttonText}</span>
        </button>
    )
}

export default NavButton