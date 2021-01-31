import React from 'react';
import {connect} from 'react-redux'
import {removePart} from '../actions'

const AddedFeature = props => {
  console.log('rendered, AddedFeature')
  return (


    <li key={props.id}>

      <button className="button" onClick={() => {props.removePart(props)}}>X</button>
      {props.name}
    </li>
      )


};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, {removePart})(AddedFeature);
