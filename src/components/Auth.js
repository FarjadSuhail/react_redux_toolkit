import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';

const Auth = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  console.log(isAuthenticated)
  const dispatch = useDispatch();

  const loginHandler = () => {
    console.log("a")
    dispatch(authActions.login());
  }
  
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button hidden={isAuthenticated} onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
