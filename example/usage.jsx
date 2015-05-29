import React from 'react';

var Usage = React.createClass({

  propTypes: {
    value: React.PropTypes.string,
    children: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      value: ''
    };
  },

  _select(event) {
    event.currentTarget.select();
  },

  render() {
    return (
      <div className='icon-usage'>
        {this.props.children}
        <br/>
        <input
          onClick={this._select}
          type='text'
          value={this.props.value}
          readonly />
      </div>
    );
  }
});

export default Usage;
