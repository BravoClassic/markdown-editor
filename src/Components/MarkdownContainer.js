import React, { Component } from 'react';
import TextContent from './TextContent';
import FormattedContent from './FormattedContent';
import '../Assets/styles/MarkdownContainer.module.scss';
import {marked} from 'marked';
import DOMPurify from 'dompurify';


class MarkdownContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            preview: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({text: DOMPurify.sanitize('# Heading One \n\n## Heading Two \n\n### Heading Three \n\n**bold text** \n\n*italic text* \n\n`code text` \n\n1. list item 1 \n\n2. list item 2 \n\n3. list item 3 \n\n[link text](https://www.google.com) \n\n![alt text](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png) \n\n> blockquote \n\n--- \n\n*** \n\n#### Heading Four \n\n##### Heading Five \n\n###### Heading Six \n\n[link text](https://www.google.com) \n\n![alt text](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png) \n\n> blockquote \n\n--- \n\n*** \n\n#### Heading Four \n\n##### Heading Five \n\n###### Heading Six \n\n[link text](https://www.google.com) \n\n![alt text](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png) \n\n> blockquote \n\n--- \n\n*** \n\n#### Heading Four \n\n##### Heading Five \n\n###### Heading Six \n\n[link text](https://www.google.com) \n\n![alt text](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png) \n\n> blockquote \n\n--- \n\n*** \n\n#### Heading Four \n\n##### Heading Five \n\n###### Heading Six \n\n[link text](https://www.google.com) \n\n![alt text](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)')});
        // this.setState({preview: marked.parse(this.state.text)});
    }

    handleChange(e){
        this.setState({text: e.target.value});
        this.setState({preview: marked.parse(this.state.text)});
    }

    render() {

        return (
            <div className="container">
                <TextContent change={this.handleChange} content={this.state.text} />
                <FormattedContent markdown={this.state.preview} />
            </div>
        );
    }
}

export default MarkdownContainer;