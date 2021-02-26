import React from 'react';
import {connect} from 'react-redux'
import {addPart} from '../actions'


const AdditionalFeature = props => {
  console.log('AdditionalFeature: props', props)
  return (
     props.additionalFeatures.map(feature => {
       return (

    <li key={feature.id}>
      <button className="button" onClick={() => {
        props.addPart(feature)
      }} >Add</button>
      {feature.name} (+{feature.price})
    </li>
      )
    })
  );
};


const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}
export default connect(mapStateToProps, {addPart}) (AdditionalFeature);
