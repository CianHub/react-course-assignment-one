import React from 'react';
import './userinput.css';

const Userinput = props => {
  const styles = { borderColor: 'green' };

  return (
    <div>
      <input
        style={styles}
        className="userinput"
        onChange={props.change}
        value={props.old}
        type="text"
      />
    </div>
  );
};

export default Userinput;
