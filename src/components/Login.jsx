import React, { component } from 'react';


function Login() {
  let Form = {
    border: '1px solid grey',
    width: '500px',
    height: '550px',

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
  return (
    <>
      <center>
        <form class="px-4 py-3 mb-3" style={Form}>
          <h2 class="mt-5">Masuk Ke akun Kamu</h2><br /><br />
          <div class="form">
            <label htmlFor=""><i class="fa fa-envelope"></i></label>
            <input type="email" style={Input} class=" col-sm-10" id="exampleDropdownFormEmail1" placeholder="Masukkan email" />
          </div><br />
          <div class="form-group">
            <label htmlFor=""><i class="fa fa-lock"></i></label>
            <input type="password" style={Input} class="col-sm-10" id="exampleDropdownFormPassword1" placeholder="Masukkan kata sandi" />
          </div><br />
          <button type="button" class="btn btn-warning" style={Button}>Warning</button>
          <div><br />
            <p>Belum punya akun? <a href="#">Daftar disini</a></p>
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </center>
    </>
  )
}
export default Login;