import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';

import PostViewer from './PostViewer';
import PostEditor from './PostEditor';

class App extends Component {
  state = {
    editing: null,
  };

  render() {
    const { editing } = this.state;

    return (
      <Container fluid>
        <Button
          className="my-2"
          color="primary"
          onClick={() => this.setState({ editing: {} })}
        >
          New Post
        </Button>
        <PostViewer
          canEdit={() => true}
          onEdit={(post) => this.setState({ editing: post })}
        />
        {editing && (
          <PostEditor
            post={editing}
            onClose={() => this.setState({ editing: null })}
          />
        )}
      </Container>
    );
  }
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
