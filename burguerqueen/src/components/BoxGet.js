import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, CardImg } from 'reactstrap';

import logo from '../imgFED/logo.png';
import arrow from '../assets/arrow.png';

class BoxGet extends React.Component {
  handleClick(ev) {
    ev.preventDefault();
    this.props.history.push('/Home');
  }

<<<<<<< HEAD
  render() {
    return (
      <section className={'form-in'} >
        <section className={'box-welcome'} >
          <img className={'img-log'} src={logo} alt="logo" />

          <div className={'text-welcome'}>
            <h2>¡TE DAMOS LA </h2>
            <h2>BIENVENIDA!</h2>
          </div>

=======
  handleAdm(ev) {
    ev.preventDefault();
    this.props.history.push('/Kitchen');
  }

  render() {
    return (
      <section className={'form-in'}>
        <section className={'box-welcome'}>
          <img className={'img-log'} src={logo} alt="logo" />

          <div className={'text-welcome'}>
            <h2>¡TE DAMOS LA </h2>
            <h2>BIENVENIDA!</h2>
          </div>

>>>>>>> b40d5e1818e5f6267b92abbcb5be2391ee8fea73
          <div className={'box-btn-welcome'}>
            <Button className={'btn-login'} color="secondary">
              <h4>EQUIPO</h4>
            </Button>
<<<<<<< HEAD
            <Button className={'btn-login'} color="secondary">
=======
            <Button
              onClick={this.handleAdm.bind(this)}
              className={'btn-login'}
              color="secondary"
            >
>>>>>>> b40d5e1818e5f6267b92abbcb5be2391ee8fea73
              <h4>ADMINISTRACIÓN</h4>
            </Button>
          </div>
        </section>

        <section className={'box-password'}>
          <section className={'box-center'}>
            <h3>
              <strong>Ingresa tu contraseña</strong>
            </h3>
            <input type="password" className={'input-password'}></input>
            <div className={'box-buttons'}>
              <div>
                <input className={'btn-number'} type="button" value="7"></input>
                <input className={'btn-number'} type="button" value="8"></input>
                <input className={'btn-number'} type="button" value="9"></input>
              </div>
              <div>
                <input className={'btn-number'} type="button" value="4"></input>
                <input className={'btn-number'} type="button" value="5"></input>
                <input className={'btn-number'} type="button" value="6"></input>
              </div>
              <div>
                <input className={'btn-number'} type="button" value="1"></input>
                <input className={'btn-number'} type="button" value="2"></input>
                <input className={'btn-number'} type="button" value="3"></input>
              </div>
              <div>
                <input className={'btn-number'} type="button" value="<"></input>
                <input className={'btn-number'} type="button" value="0"></input>
                <input className={'btn-number'} type="button" value="C"></input>
              </div>
            </div>

<<<<<<< HEAD
            <button 
              className={'btn-valid-password'} 
              onClick={this.handleClick.bind(this)}
            >
                <CardImg width="12 px" src={arrow} alt="arrow" />
            </button>ñ
=======
            <button
              className={'btn-valid-password'}
              onClick={this.handleClick.bind(this)}
            >
              <CardImg width="12 px" src={arrow} alt="arrow" />
            </button>
>>>>>>> b40d5e1818e5f6267b92abbcb5be2391ee8fea73
          </section>
        </section>
      </section>
    );
  }
}

export default withRouter(BoxGet);
