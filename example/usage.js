import React from 'react';

const Usage = React.createClass({

  propTypes: {
    value: React.PropTypes.string,
    children: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      value: ''
    };
  },

  handleSelect(event) {
    event.currentTarget.select();
  },

  render() {
    let {children, value} = this.props;

    return (
      <div className='icon-usage'>
        {children}
        <br/>
        <input
          onClick={this.handleSelect}
          type='text'
          value={value}
          readonly />
      </div>
    );
  }
});

export default Usage;
