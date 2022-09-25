'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {held: false}
  }

  transformStyle = {
    backgroundColor: "blanchedalmond"
  }

  handleClick = () => {
    this.setState({held: !this.state.held})
  }

  render() {
    return (
      <div className="drag-item" onClick={this.handleClick} style={this.transformStyle}>
        <br /><br />
        {this.state.held ? "held" : "dropped"}
      </div>
    );
  }
}

const domContainer = document.querySelector('#draggable');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));