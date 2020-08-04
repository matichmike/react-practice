import React, { PureComponent } from 'react';

export default class Article extends PureComponent {
  // state = {
  //   isOpen: true
  // }
  // same as below(babel)
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  // PureComponent already has shouldComponentUpdate built in
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.isOpen !== nextState.isOpen;
  // }

  componentWillMount() {
    console.log('---', 'mounting');
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('---', 'will receive props');
  //   if (nextProps.defaultOpen !== this.props.defaultOpen) {
  //     this.setState({
  //       isOpen:nextProps.defaultOpen
  //     })
  //   }
  // }

  componentDidUpdate() {
    console.log('---', 'will update');
  }

  render() {
    const {article, isOpen, onButtonClick} = this.props;
    const body = isOpen && <section className="card-text">{article.text}</section>;
    return (
      <div className="card mx-auto" style= {{width:'50%', margin:'2em'}}>
        <div className="card-header">
        <h2 onClick = {onButtonClick}>
          {article.title}
           clicked {this.state.count}
          <button className="btn btn-primary btn-lg float-right" onClick={this.handleClick}>{isOpen ? 'close' : 'open'}</button>
        </h2>
        </div>
        <div className="card-body">
        <h6 className="card-subtitle text-muted">creation date: {(new Date(article.date).toDateString())}</h6>
        {body}
      </div>
      </div>
        )
    }

    incrementCounter = () => {
      this.setState({
        count: this.state.count + 1
      })
    }
}