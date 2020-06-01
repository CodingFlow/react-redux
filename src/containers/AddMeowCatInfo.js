import { addMeow } from '../actions/addMeow'
import { connect } from 'react-redux'
import CatInfo from '../components/CatInfo'
import { createSelector } from 'reselect'
import { fetchPosts } from '../actions/redditApi'

const getCat = (state) => state.cat
const memoizedGetCat = createSelector([getCat], (cat) => cat)

const mapStateToProps = memoizedGetCat

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnClick: () => {
      dispatch(addMeow())
      dispatch(fetchPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatInfo)
