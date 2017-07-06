import React, { Component } from 'react';

// Class Based Component
// Must always use a render method and return JSX
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: '' };
  }

  render() {
    return ( 
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} /> 
      </div>
    ); 
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;