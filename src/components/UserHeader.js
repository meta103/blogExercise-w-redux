import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    //el user lo conseguimos luego de ejecutar el mapToStateToProps:
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>

  }
}
//ownProps es una propiedad de mapStateToProps que obtiene una copia del prop de todo el componente
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);