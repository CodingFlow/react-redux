import { addMeow } from '../actions/addMeow'
import { connect } from 'react-redux'
import CatInfo from '../components/CatInfo'

const mapStateToProps = (state) => {
  return state.cat
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnClick: () => dispatch(addMeow())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatInfo)
