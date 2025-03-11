import React from "react";

function Alerts(props) {
    
    return(
        
          props.alert && <div style={{ position: "fixed", top: "10px", left: "50%", transform: "translateX(-50%)", width: "50%", zIndex: "1050" }} class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.msg} : </strong> {props.alert.type}
</div>
        
    )
}

export default Alerts 