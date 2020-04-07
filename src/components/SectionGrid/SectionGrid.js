import React from 'react';
import './SectionGrid.scss';

const SectionGrid = (props) => {
    return <section className="SectionGrid">{props.children}</section>;
}

export default SectionGrid;