import axios from 'axios'
import React, { useState } from 'react'

const Signin = () => {
    const [data, setdata] = useState(
        

        {
            "email":"",
            "password":""
        }

)
const inputhandler = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
}
const readvalue = () => {
    console.log(data)
    axios.post("http://localhost:8080/signin", data).then(
        (response) => {
            console.log(response.data)
        if (response.data.status) {
        alert("added")
    } else {
        alert("error")
    }
}

    ).catch ().finally()
}
return (
<div>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">email</label>
                        <input type="text" className="form-control" name='email' value={data.email} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">password</label>
                        <input type="text" className="form-control" name='password' value={data.password} onChange={inputhandler}/>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readvalue}>submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
)
}

export default Signin