import React from 'react';
// import classNames from 'classnames';

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
        mobile: 'xs',
        tablet: 'sm',
        laptop: 'md',
        desktop: 'lg',
    };

    // let classes = [];

    Object.entries(props).map(prop => {
        const propName = prop[0];
        const propValue = prop[1];

        console.log(propName, propValue);

        return '';
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
