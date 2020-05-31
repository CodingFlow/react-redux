import React from 'react'
import PropTypes from 'prop-types'

const CatInfo = (props) => {
  return <div className='catInfo' onClick={props.handleOnClick}>{props.headLine}</div>
}

CatInfo.propTypes = {
  handleOnClick: PropTypes.func,
  headLine: PropTypes.string
}

export default CatInfo
