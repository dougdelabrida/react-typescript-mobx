import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer class Clicker extends React.Component<any, any> {
  @observable clicks = 0;

  public render() {
    return (
      <div>
        <button onClick={this.handleClick}>Clicked {this.clicks}</button>
      </div>
    )
  }

  handleClick = () => {
    this.clicks++;
  }
}

export default Clicker;
