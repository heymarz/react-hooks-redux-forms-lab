import React, {useState} from "react";

function BandInput({onBandSubmit}) {
  const [band, setBand] = useState("");

  function handleChange(e){
    setBand(e.target.value)
  };

  function handleSubmit(e){
    e.preventDefault();
    onBandSubmit(band)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label type="name">name
        <input 
          type="text" 
          name={band} 
          value={band} 
          onChange={handleChange}
        />
        </label>
        <button type="submit">Add Band</button>
      </form>
    </div>
    )
}

export default BandInput;
