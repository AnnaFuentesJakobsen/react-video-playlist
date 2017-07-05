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
      <div>
        <input 
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} /> 
      </div>
    ); 
  }
}

export default SearchBar;