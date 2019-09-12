import React from 'react'

export default class Article extends React.Component {

    render() {
        const {title, content} = this.props;
        return <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    }
}
