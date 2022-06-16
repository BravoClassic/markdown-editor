import React, { Component } from 'react';
import style from '../Assets/styles/TextContent.module.scss';

class TextContent extends Component {
    render() {
        return (
            <div>
                { /*TextContent Component*/}
                <textarea id="editor" style={style.textarea} onChange={this.props.change} value={this.props.content}></textarea>
            </div>
        );
    }
}

export default TextContent;