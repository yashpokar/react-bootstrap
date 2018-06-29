import React from 'react';
import config from './../config';

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
    const aliases = config.layouts.devices;

    const classes = [];

    Object.entries(props).forEach(prop => {
        Object.entries(config.layouts.patterns).forEach(pattern => {
            const regex = new RegExp(pattern[1].replace('{{DEVICES}}', `${Object.keys(aliases).join('|')}`));
            const match = prop[0].match(regex);

            if (match) {
                classes.push(pattern[0].replace('{{DEVICE_ALIAS}}', aliases[match[1]]).replace('{{COLS}}', prop[1]));
            }
        });
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
