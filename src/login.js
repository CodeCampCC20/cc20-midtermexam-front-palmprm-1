import { useState } from 'react';
function Login() {


    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your Username:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your Password:
        <input 
          type="password" 
          name="password" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
        
  
        