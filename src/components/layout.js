import React from 'react';

const Container = (props) => {
    return (
        <div className={`container${(props.fluid ? '-fluid' : '')}`}>
            {props.children}
        </div>
    )
}

const Row = (props) => {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}

const Column = (props) => {
    const aliases = {
        Tablet: 'sm',
        Laptop: 'md',
        Desktop: 'lg',
    };

    let classes = [];

    const inRegex = new RegExp(`in(${Object.keys(aliases).join('|')})`);
    const offsetRegex = new RegExp(`offsetIn(${Object.keys(aliases).join('|')})`);

    Object.entries(props).forEach(prop => {
        const propName = prop[0];
        const propValue = prop[1];
        const inMatches = propName.match(inRegex);
        const offsetMatches = propName.match(offsetRegex);

        if (inMatches) {
            classes.push(`col-${aliases[inMatches[1]]}-${propValue}`);
        }

        if (offsetMatches) {
            classes.push(`offset-${aliases[offsetMatches[1]]}-${propValue}`);
        }
    });

    return (
        <div className={ classes ? classes.join(' ') : 'col' }>
            { props.children }
        </div>
    )
}

export {
    Container,
    Row,
    Column
};
