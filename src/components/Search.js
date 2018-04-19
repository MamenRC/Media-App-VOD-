import React from 'react';

class Search extends React.Component {
	render() {
		return(
			<div className="select__search">
				<input className="input__find" type="text" placeholder="Search"
				onChange={this.props.show}>
				</input>
			</div>
		);
	}
}

export default Search;
