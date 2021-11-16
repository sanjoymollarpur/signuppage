import {useState} from 'react'
import arr from './Data'
//const arr=[];
function Signin() {
    const [data, setdata] = useState({
        username:"",
        phone:"",
        email:"",
        password:""
    })
    const inputc=(e)=>{
          const {name,value}=e.target;
          setdata((prev)=>{
               return{
                   ...prev,
                   [name]:value 
               }

          })
    }
    const submited=(e)=>{
           e.preventDefault();
           arr.push(data);
           setdata({
            username:"",
            phone:"",
            email:"",
            password:""
        })
        console.log(arr);
    }
    return (
        <div className="w-25">
             <h6>Fill the data for Sign Up</h6>
            <hr />
            <form >
            <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input onChange={inputc} name="username" value={data.username} type="text" className="form-control"  aria-describedby="emailHelp" />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone number</label>
                    <input onChange={inputc} name="phone" value={data.phone} type="number" className="form-control"  aria-describedby="emailHelp" />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={inputc} name="email" value={data.email} type="email" className="form-control"  aria-describedby="emailHelp" />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={inputc} name="password" value={data.password} type="password" className="form-control"  />
                </div>
                
                <button onClick={submited} type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default Signin;
export {arr}