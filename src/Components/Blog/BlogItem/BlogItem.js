import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import "./BlogItem.css"

class BlogItem extends Component {
    render() {
        const {iframe, description, iframe2, description2} = this.props
        return (
            <div className="text-center blog">
                <br/>
                <div className="iframe col-md-5 d-inline-block">
                    {ReactHtmlParser(iframe)}
                </div>
                <div className="description col-md-4 d-inline-block">
                    {description}
                </div>
                <br/>
                <br/>
                <div className="description col-md-4 d-inline-block">
                    {description2}
                </div>
                <div className="iframe col-md-5 d-inline-block">
                    {ReactHtmlParser(iframe2)}
                </div>
                <br/>
            </div>
        );
    }
}

export default BlogItem;