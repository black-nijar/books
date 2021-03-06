import React from 'react'
import { connect } from 'react-redux';
import Navbar from './Navbar';

const Container = (props) => {
  //console.log('PROPS :', props)
  const { user: { userId } } = props
  return (
    <div>
      {userId ? <Navbar /> : null}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    user: state.auth
  }
}
export default connect(mapStateToProps)(Container)
