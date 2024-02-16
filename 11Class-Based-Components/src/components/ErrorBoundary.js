import { Component } from "react";

//error voundary can omnlybe used in class based componets
class ErrorBoundary extends Component {

  constructor() {
    super()
    this.state = { hasError: false }
  }

  componentDidCatch() {
    this.setState({ hasError: false })
  }

  render() {

    if (this.state.hasError) {
      return <p>Something went Wrong!</p>
    }

    return this.props.children
  }
}

export default ErrorBoundary