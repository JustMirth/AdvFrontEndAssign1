import React, {useState} from 'react';

function OnClick() {
    const [isVisible, shownButton] = useState(false);
    const changeVisibility = () => {
        shownButton(!isVisible);
    }
    return (
        <div>
            <button onClick={changeVisibility}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <div>You have revealed the hidden text!</div>}
        </div>
    )
}

export default OnClick;