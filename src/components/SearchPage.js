// import React, { Component } from 'react';
// import GithubData from './GithubData';

// class SearchPage extends Component {
//   state = {
//     repository: ''
//   };
//   render() {
//     const { repository } = this.state;
//     return (
//       <div>
//         <h1>Hello GitHub user!</h1>
//         <form>
//           <input
//             type="text"
//             placeholder="Repository name"
//             name="Search"
//             onChange={this.handleChange}
//           />{' '}
//           <br />
//           <button type="submit" onClick={() => this.handleSubmit}>
//             Find your repository
//           </button>
//         </form>
//       </div>
//     );
//   }
//   handleChange = e => {
//     console.log(e.target.value);
//     this.setState({ repository: e.target.value });
//   };

//   handleSubmit = () => {
//     const { repository } = this.state;

//     this.props.fetchRepos(repository);
//   };
// }

// export default SearchPage;
