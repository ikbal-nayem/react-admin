import React, {Component} from 'react';
import Nprogress from 'nprogress';
// import ReactPlaceholder from 'react-placeholder';
import 'nprogress/nprogress.css';
// import 'react-placeholder/lib/reactPlaceholder.css';
import { ImpulseSpinner } from "react-spinners-kit";


export default function asyncComponent(importComponent) {
  class AsyncFunc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
      Nprogress.start();
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    async componentDidMount() {
      this.mounted = true;
      const {default: Component} = await importComponent();
      Nprogress.done();
      if (this.mounted) {
        this.setState({
          component: <Component {...this.props} />
        });
      }
    }

    render() {
      const Component = this.state.component ||
        <div className="d-flex flex-column justify-content-center align-items-center" style={{height: 'calc(100vh - 200px)'}}>
          <ImpulseSpinner size={70} frontColor="#BC4A3C"/>
          <h5 className="text-muted mt-3">Loading...</h5>
        </div>;
      return (
        <React.Fragment>
          {Component}
        </React.Fragment>
      );
    }
  }

  return AsyncFunc;
}
