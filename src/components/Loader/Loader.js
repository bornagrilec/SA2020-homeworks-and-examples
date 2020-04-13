import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.scss';

const DotsLoader = () => {
    return (
        <div className="LoaderContainer">
            <Loader type="ThreeDots" color="#c59613" width={80} height={80} />
        </div>
    );
}

export default DotsLoader;