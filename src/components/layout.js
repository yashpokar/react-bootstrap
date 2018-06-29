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
        Mobile: 'xs',
        Tablet: 'sm',
        Laptop: 'md',
        Desktop: 'lg',
    };

    let classes = [];

    Object.entries(props).forEach(prop => {
        const propName = prop[0];
        const propValue = prop[1];
        const inMatches = propName.match(/in(Mobile|Tablet|Laptop|Desktop)/);
        const offsetMatches = propName.match(/offsetIn(Mobile|Tablet|Laptop|Desktop)/);

        if (inMatches) {
            classes.push(`col-${aliases[inMatches[1]]}-${props[inMatches[0]]}`);
        }

        if (offsetMatches) {
            classes.push(`offset-${aliases[offsetMatches[1]]}-${props[offsetMatches[0]]}`);
        }
    });

    return (
        <div className="col">
            {props.children}
        </div>
    )
}

export {
    Container,
    Row,
    Column
};
