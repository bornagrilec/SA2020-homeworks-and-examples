import React from 'react';
import './SectionGrid.scss';
import { SectionGridWrapper } from './SectionGridStyles';

const SectionGrid = (props) => {
    return <SectionGridWrapper>{props.children}</SectionGridWrapper>;
}

export default SectionGrid;