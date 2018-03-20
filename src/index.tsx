import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Clicker from './components/Clicker';

interface HelloProps {
  message?: String;
}

const Hello: React.SFC<HelloProps> = ({message}: HelloProps) => (
  <span>
    <span>{message}</span>
    <Clicker />
  </span>
);

Hello.defaultProps = {
  message: "Hello Typescript World",
}

ReactDOM.render(
  <Hello />,
  document.getElementById("root")
);
