import React from 'react'
import PropTypes from 'prop-types'

export default class ReactSkycons extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    value: ''
  }

  onSelect = (event) => {
    event.currentTarget.select()
  }

  render () {
    const { children, value } = this.props

    return (
      <div className='icon-usage'>
        {children}
        <br />
        <input
          onClick={this.onSelect}
          type='text'
          value={value}
          readOnly />
      </div>
    )
  }
}
