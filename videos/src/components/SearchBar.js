import React from 'react'

class SearchBar extends React.Component {
    state={text: ''};

    constructor(props) {
        super(props);
    }

    onInputChange = event => {
        this.setState({text: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.text);
    };

    render() {
        return (
                <div className="ui segment">
                    <form onSubmit={this.onFormSubmit} className="ui form" >
                        <div className="field" style={{width: `85%`}}>
                            <label className="label">Video Search</label>
                            <input className="input" type="text" value={this.state.text} onChange={this.onInputChange} />
                        </div>
                    </form>
                </div>
        );
    };
}

export default SearchBar;