import React, { Component } from 'react';

// Class Based Component
// Must always use a render method and return JSX
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  handleSearchTermChange(event) {
    const term = event.target.value;
    this.setState({ term: term });
    if(this.props.onSearchTermChange){
      this.props.onSearchTermChange({ term })
    }
  }

  render() {
    return (
      <div>
        <input
          className="search-input"
          id="search"
          type="text"
          placeholder="Search"
          value={this.state.term}
          onChange={(event) => this.handleSearchTermChange(event)} />
      </div>
    );
  }
}

export default SearchBar;
