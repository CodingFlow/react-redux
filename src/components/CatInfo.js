import React from 'react'
import PropTypes from 'prop-types'
import styles from './CatInfo.module.css'

console.log(styles)
const CatInfo = (props) => {
  return <div className={styles.main} onClick={props.handleOnClick}>{props.headLine}</div>
}

CatInfo.propTypes = {
  handleOnClick: PropTypes.func,
  headLine: PropTypes.string
}

export default CatInfo
