import React, { Component } from 'react';
import { getRepos } from './Api';
import CollapseCard from './CollapseCard';

class GithubData extends Component {
  state = {
    repoName: '',
    data: [],
    isLoading: true,
    state: false
  };
  render() {
    const { data, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <h1>Hello GitHub user!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            required
            placeholder="Repository name"
            name="repoName"
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Find your repository</button>
        </form>
        <ul>
          {data.map(repo => (
            <li key={repo.id}>
              Repo name: <br />
              {repo.name}
              <CollapseCard data={data}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.fetchRepos();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { repoName } = this.state;
    e.preventDefault();
    this.fetchRepos(repoName);
  };
  fetchRepos = repoName => {
    getRepos(repoName).then(items => {
      this.setState({ data: items, isLoading: false });
    });
  };
}

export default GithubData;
