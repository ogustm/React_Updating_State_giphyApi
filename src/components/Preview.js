import React, { Component } from 'react';


class Preview extends Component {
    render() {
        return (
            <div className="preview">
                <h2>Preview</h2>                
                <img className="img-preview" src={this.props.data} alt="something"></img>
            </div>
        )
    }
}

export default Preview;
