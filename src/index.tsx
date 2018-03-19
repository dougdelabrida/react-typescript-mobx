import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface HelloProps {
  message?: String;
}

const Hello: React.SFC<HelloProps> = ({message}: HelloProps) => (
  <span>{message}</span>
);

Hello.defaultProps = {
  message: "Hello Typescript World",
}

ReactDOM.render(
  <Hello />,
  document.getElementById("root")
);
