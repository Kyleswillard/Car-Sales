import React from 'react';
import {connect} from 'react-redux'
import {removePart} from '../actions'

const AddedFeature = props => {
  console.log('rendered, AddedFeature')
  return (


    <li>

      <button className="button" onClick={() => {props.removePart(props.feature)}}>X</button>
      {props.feature.name}
    </li>
      )


};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, {removePart})(AddedFeature);
