'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleClick = () => {
    this.setState({liked: !this.state.liked})
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.liked ? "liked" : "not liked"}
      </button>
    );
  }
}

const domContainer = document.querySelector('#draggable');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));