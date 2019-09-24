import React, { Component } from 'react';
import { getRepos } from './Api';

class GithubData extends Component {
  state = {
    repository: '',
    data: [],
    isLoading: true
  };
  render() {
    const { data, isLoading, repository } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <h1>Hello GitHub user!</h1>
        <form>
          <input
            type="text"
            placeholder="Repository name"
            name="Search"
            onChange={this.handleChange}
          />{' '}
          <br />
          <button type="submit" onClick={() => this.handleSubmit(repository)}>
            Find your repository
          </button>
        </form>
        <ul>
          {data.map(git => (
            <li key={git.id}>
              Number of Forks: {git.forks} Number of Issues: {git.open_issues}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.fetchRepos();
  }

  fetchRepos = repository => {
    // console.log(this.props, 'fetch');
    getRepos(repository).then(items => {
      this.setState({ data: items, isLoading: false });
    });
  };
  handleChange = e => {
    console.log(e.target.value);
    this.setState({ repository: e.target.value });
  };

  handleSubmit = repository => {
    console.log(repository);
    this.fetchRepos(repository);
  };
}

export default GithubData;
