import React, { Component } from 'react';
import '../Assets/styles/FormattedContent.module.scss';
class FormattedContent extends Component {
    render() {
        return (
            <div id="preview" className="preview" dangerouslySetInnerHTML={{__html: this.props.markdown}}>
                {/* FormattedContent */}
            </div>
        );
    }
}

export default FormattedContent;