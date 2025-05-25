import React from 'react'
import PropTypes from 'prop-types'




export default function alert(props) {
    const capitalize = (word) => {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  
  return (
    <div style={{height: '40px' }}>
    {
    props.alert &&
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
    
    }
    </div>
    
  )
}
