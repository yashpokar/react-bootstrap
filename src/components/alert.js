import React from 'react';
import config from './../config';

export default class Alert extends React.Component
{
    render () {
        const classes = ['alert'];

        Object.entries(this.props).forEach(prop => {
            Object.entries(config.alert.patterns).forEach(pattern => {
                const regex = new RegExp(pattern[1]);
                const match = prop[0].match(regex);

                if (match) {
                    classes.push(pattern[0].replace('{{TYPE_HAS}}', match[1].toLowerCase()).replace('{{TYPE_IS}}', match[1].toLowerCase()));
                }
            });
        });

        return (
            <div className={ classes.join(' ') } role="alert">
                { this.props.children }
            </div>
        );
    }
}

export class AlertLink extends React.Component
{
    render () {
        return (
            <a href={ this.props.url } className="alert-link">{ this.props.children }</a>
        )
    }
}
