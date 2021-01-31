import React from 'react';
import {connect} from 'react-redux'
import {removePart} from '../actions'

const AddedFeature = props => {
  return (
    props.car.features.map(feature => {
      return(
    <li key={feature.id}>

      <button className="button" onClick={() => {props.removePart(feature)}}>X</button>
      {props.feature.name}
    </li>
      )
    })
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, {removePart})(AddedFeature);
