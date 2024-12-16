import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

// export const App: React.FC = () => {
//   return (
//     <div className="App">
//       <h1>React clock</h1>

//       <Clock />
//     </div>
//   );
// };
type Props = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<Props> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });
    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: true });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
