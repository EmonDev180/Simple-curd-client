
import './App.css'

function App() {

  const handleAddUser = e =>{

    e.preventDefault()

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;

    const user = {name,email}

    console.log(user);

    fetch('http://localhost:5000/users',{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(user), 

    })
    .then(res => res.json())
    .then(data => {

      console.log(data);
      if(data.insertedId){
        alert('User set sussefully')
      }

    })
  }
  

  return (
    <>
     
      <h1>simple curd</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br></br>
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add user" />

      </form>
      
    </>
  )
}

export default App
