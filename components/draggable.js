"use strict"

const e = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { held: false }
  }

  transformStyle = {
    backgroundColor: "blanchedalmond",
    left: 0,
    top: 0,
  }

  handleClick = () => {
    this.setState({ held: !this.state.held })
  }

  handleMouseMove = (event) => {
    this.setState({ x: event.pageX })
    this.setState({ y: event.pageY })
    console.log(this.state.x, this.state.y)
  }

  render() {
    return (
      <div
        className="drag-item"
        onClick={this.handleClick}
        style={this.state.held ? this.updatingPos : this.transformStyle}
        onMouseMove={this.handleMouseMove}
      >
        <br />
        <br />
        {this.state.held ? "held" : "dropped"}
      </div>
    )
  }
}

const domContainer = document.querySelector("#draggable")
const root = ReactDOM.createRoot(domContainer)
root.render(e(LikeButton))
