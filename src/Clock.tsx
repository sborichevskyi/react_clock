import React from 'react';

type Props = {
  name: string;
};

interface State {
  clockName: string;
  time: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    clockName: this.props.name,
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number | undefined;

  timerId2: number | undefined;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({
        time: newTime,
      });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);

    this.timerId2 = window.setInterval(() => {
      const newClockName = this.getRandomName();

      this.setState({ clockName: newClockName });
    }, 3300);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(
        `Clock name changed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
