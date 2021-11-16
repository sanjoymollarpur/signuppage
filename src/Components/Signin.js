import {arr} from './Signup'
import {useState} from 'react'
const arr1=[];
function Signin() {
    const [data, setdata] = useState({
        email:"",
        password:""
    })
    const [show, setshow] = useState(false);
    const inputc1=(e)=>{
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
           arr1.push(data);
           
        const p=arr.filter((val,index)=>{
           return val.email===data.email && val.password===data.password;
        })

        console.log("sign in",p.length,arr);
      //  setshow(1);
        if(p.length>0)
        setshow(1);
        else{
            setshow(0);
        }
        console.log(show);
        setdata({
            email:"",
            password:""
        })
    }
    console.log(arr);
    return (
        <div className="w-25">
            <h6>Fill the data for Sign in</h6>
            <hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={inputc1} name="email" value={data.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={inputc1} name="password" value={data.password} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                
                <button onClick={submited} type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <div className="con-mat">

            Password:
            {show ? <h4>Matched</h4>:<h4>Not Matched</h4> }
            </div>
        </div>
    );
}

export default Signin;