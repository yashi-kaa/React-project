import './Dashboard.css';
import './LoginUi.css';
import { useNavigate } from "react-router-dom";

    
function Dashboard() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      
        //Prevent page reload
        event.preventDefault();
        navigate("/");
    };
  return (
    <body>
        <div>  
       <div class="centered">   <div className="app new">
    <div className="login-form">
      <div className="title">ACCOUNTING APPLICATION</div>
    <div className="form">
      <form onSubmit={handleSubmit}>
      <div className="input-container">
          <label> Enter the salary </label>
          <input type="text" name="lname"  />
          
        </div>
        <div className="input-container">
          <label>Add a daily expenses</label>
          <input type="text" name="uname"  />
         
        </div>
       
        <div className="input-container">
          <label>Add monthly expenses </label>
          <input type="text" name="email"  />
        </div>

        <div className="input-container">
          <label>Add Yearly expenses </label>
          <input type="text" name="email"  />
        </div>
        <div className="input-container">
          <label>Total </label>
          <input type="text" name="total"/>
          
        </div>
        <div className="input-container">
          <label>Remaining </label>
          <input type="text" name="salary"  />
          
        </div>
        <div className="input-container">
          <label>Savings </label>
          <input type="text" name="salary"  />
          
        </div>
        <button class="button1" type="button" Value="<-- Logout">Submit</button><br/>
        <div className="button-container">
        
          <input type="submit" Value=" Logout"/>
        </div>
      </form>
    </div>
    </div>
    </div>

    
</div>
       
        </div>
        </body>

    
  );
}

export default Dashboard;