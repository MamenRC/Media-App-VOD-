import React from 'react';
import MoviesCard from './MoviesCard';
import Search from './Search';
import MoviesList from './MoviesList';

class App extends React.Component {

	constructor(props) {
		super(props);
		// this.callOtherDomain = this.callOtherDomain.bind();
		this.handleClick = this.handleClick.bind();
		this.state = {
			array: [],
			filterMovies: ""
		}
	}

	componentDidMount() {
		fetch('https://sela-test.herokuapp.com/assets/hkzxv.json')
			.then(response => response.json())
			.then(json =>{
				this.setState({
					array:json
			});
		})
		}

		// function callOtherDomain(){
		// 	const invocation = new XMLHttpRequest();
		// 	const url = 'https://sela-test.herokuapp.com/assets/hkzxv.json';
		// 	if(invocation) {
		// 		invocation.open('GET', url, true);
		// 		invocation.withCredentials = true;
		// 		invocation.onreadystatechange = handler;
		// 		invocation.send();
		// 	}
		// }
		handleClick(event) {
			const movies = event.target.value;

			this.setState({
				filterMovies: movies
			});
		}

		paintMovies() {
			const moviesToShow = this.state.array.filter (element =>
			element.title.includes(this.state.filterMovies)
			);
			return (
				<MoviesList moviesShow = {moviesToShow} />
			);
		}


	render() {
		return (
			<div className="app__container">
				<header className="header">
					<h1 className="header__title">Movies</h1>
					<nav className="menu__navigation">
						<ul className="menu">
							<li className="menu__item"><a href={this.props.title} className="menu-link">Home</a></li>
							<li className="menu__item"><a href={this.props.description} className="menu-link">History</a></li>
						</ul>
					</nav>
				</header>
				<section className="search__container">
					<Search show={this.handleClick} />
					{this.paintMovies()}
				</section>
			</div>
		);
		}
}

export default App;
