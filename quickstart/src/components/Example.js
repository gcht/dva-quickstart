import React from 'react';


const Example = (props) => {
  return (<div>
      <p>
        Name : {props.userInfo.name}
      </p>
      <p>
        email : {props.userInfo.email}
      </p>
    </div>
  );
};

Example.propTypes = {
};



export default Example;
