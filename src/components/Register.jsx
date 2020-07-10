import React, { component } from 'react';
function Register() {
        let Form = {
            border: '1px solid grey',
            width: '500px',
        }

        let Input = {
            outlineColor: 'none',
            borderBottom: '3px solid #ccc',
            borderLeft: 'none',
            borderRight: 'none',
            borderTop: 'none',
        }
        let Button = {
            width: '400px',
            borderRadius: '15px',
            height: '50px',
        }
        let Images = {
            width:'100px',

        }
        return (
            <>
                <center>
                    <form class="px-4 py-3" style={Form}>
                    <div class="width-50px" style={Images}><img src={require('../Images/logo.png')} alt="Credit to Joshua Earle on Unsplash"/></div>
                        <div class="form-group">
                            <input type="email" style={Input} class="form-control col-sm-10" id="exampleDropdownFormEmail1" placeholder="Masukkan email" />
                        </div><br />
                        <div class="form-group">
                            <input type="password" style={Input} class="form-control col-sm-10" id="exampleDropdownFormPassword1" placeholder="Masukkan kata sandi" />
                        </div><br />
                        <button type="button" class="btn btn-warning" style={Button}>Warning</button><br />
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#"> Sign up</a>
                        <a class="dropdown-item" href="#">Forgot password?</a>
                    </form>
                </center>
            </>
        )
    }

    export default Register;