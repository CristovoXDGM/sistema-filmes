import React from 'react'
import loaderSrc from '../../assets/giphy.gif';

const Loader = props => (
    <div>
        <img
            alt="loader icon"
            src={loaderSrc}
            style={{ width: 75 }}
        />
    </div>


);

export default Loader;