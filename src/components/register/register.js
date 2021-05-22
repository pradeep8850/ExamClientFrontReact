import React, { Fragment, useState, useEffect } from 'react';
import { postUser } from '../../services/apiFunction'

const AddUser = () => {
    useEffect(() => {
        document.title = "add user"
    }, []);

    const [user, setUser] = useState({})
    const handleForm = (e) => {
        postUser(user)
        
        e.preventDefault();
    }
    return (
        <Fragment>
            <div className="card form-row">
                <div className="card-body">
                    <form onSubmit={handleForm} className="align-items-center">
                        <div className="form-row">
                            <div className="form-group mt-0">
                                <label>Username</label>
                                <input onChange={(e) => {
                                    setUser({ ...user, username: e.target.value })
                                }} type="username" className="form-control mt-2" name="username" id="username" placeholder="Username" />
                            </div>
                            <div className="form-group mt-3">
                                <label>First Name</label>
                                <input required onChange={(e) => {
                                    setUser({ ...user, firstName: e.target.value })
                                }} type="text" className="form-control mt-2" name="firstName" id="firstName" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label>Last Name</label>
                            <input required onChange={(e) => {
                                setUser({ ...user, lastName: e.target.value })
                            }} type="text" className="form-control mt-2" name="lastName" id="lastName" placeholder="Last Name" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Phone Number</label>
                            <input required onChange={(e) => {
                                setUser({ ...user, phone: e.target.value })
                            }} type="Number" className="form-control mt-2" name="phone" id="phone" placeholder="Number" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Mail</label>
                            <input required onChange={(e) => {
                                setUser({ ...user, email: e.target.value })
                            }} type="Text" className="form-control mt-2" name="email" id="email" placeholder="Mail" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input required onChange={(e) => {
                                setUser({ ...user, password: e.target.value })
                            }} type="Password" className="form-control mt-2" name="password" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Register</button>
                        <button type="reset" className="btn btn-warning  mt-5">Reset</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
export default AddUser;