import { Component } from "react";

class SearchBox extends Component {
    render() {
        return (
            <input
                className={this.props.className}
                type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        );
    }
}

export default SearchBox;
