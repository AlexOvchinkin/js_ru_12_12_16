import React, {Component} from 'react'

export default class Comments extends Component {

    state = {
        isOpen: false
    };

    render() {

        let template;

        if (this.props.commentsArray) {
            template = this.props.commentsArray.map(function (value, key) {
                return (
                    <li key={value.id}>
                        <p>author: {value.user}</p>
                        <p>{value.text}</p>
                    </li>
                );
            });
        } else {
            template = <p>No comments ...</p>;
        }

        return (
            <div>
                <a href="#" onClick={this.onShowCommentsClick.bind(this)}>{this.getLinkText()}</a>
                {this.getCommentsText(template)}
            </div>
        );
    }

    getCommentsText(template) {
        if (this.state.isOpen) {
            return (
                <ul>
                    {template}
                </ul>);
        } else {
            return <p>...</p>
        }
    }

    getLinkText() {
        return this.state.isOpen ? 'Hide comments ...' : 'Show comments ...';
    }

    onShowCommentsClick(e) {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
};


