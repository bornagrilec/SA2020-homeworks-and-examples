import React from 'react';
import './SectionMore.scss';

const SectionMore = (props) => {
    return (
        <section className="SectionMore">
            {props.children}
        </section>
    );
}

export default SectionMore;