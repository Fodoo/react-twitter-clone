import React from 'react';
// import theme from '../theme';
import { Button, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

import { ModalBlock } from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1DA1F2',
    flexBasis: '55%',
    overflow: 'hidden',
  },
  blueSideBigInfo: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '45%',
    height: '45%',
    color: 'rgb(255, 255, 255)',
  },

  loginSide: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: 16,
    flexBasis: '45%',
  },
  loginSideWrapper: {
    padding: 20,
    width: 720,
  },
  loginSideTwitterIcon: {
    fontSize: 50,
  },
  loginSideTitle: {
    letterSpacing: '-1.2px',
    lineHeight: 'calc(84px)',
    fontWeight: 700,
    marginBottom: 30,
    marginTop: 48,
  },
  loginSideSubtitle: {
    marginBottom: 10,
    fontSize: 35,
    fontWeight: 700,
  },
  loginSideBtns: {
    display: 'flex',
    flexDirection: 'column',
    width: 380,
  },
  loginSideBtn: {
    height: 48,
    marginBottom: 20,
  },
  loginSideField: {
    marginBottom: 18,
    width: 400,
  },
  registerSideField: {
    marginBottom: 30,
    width: 400,
  },

  // dialogClose: {
  //   marginRight: 15,
  //   color: '#1DA1F2',
  // },
}));

function SignIn() {
  const classes = useStylesSignIn();

  const [visibleModal, setiVisibleModal] = React.useState<'signIn' | 'signUp'>();

  const handleClickOpenSignIn = (): void => {
    setiVisibleModal('signIn');
  };

  const handleClickOpenSignUp = (): void => {
    setiVisibleModal('signUp');
  };

  const handleCloseModal = (): void => {
    setiVisibleModal(undefined);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <section className={classes.blueSide}>
          <TwitterIcon color="primary" className={classes.blueSideBigInfo} />
          <img
            src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"
            draggable="false"
            alt="icon_twitter"></img>
        </section>
        <section className={classes.loginSide}>
          <div className={classes.loginSideWrapper}>
            <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
            <Typography variant="h2" className={classes.loginSideTitle}>
              В курсе происходящего
            </Typography>
            <br />
            <Typography variant="h2" className={classes.loginSideSubtitle}>
              <b>Присоединяйтесь к твиттеру прямо сейчас!</b>
            </Typography>
            <br />
            <div className={classes.loginSideBtns}>
              <Button
                onClick={handleClickOpenSignUp}
                className={classes.loginSideBtn}
                variant="contained"
                color="primary">
                Зарегистрироваться
              </Button>
              <Button
                onClick={handleClickOpenSignIn}
                className={classes.loginSideBtn}
                variant="outlined"
                color="primary">
                Войти
              </Button>
            </div>
            <ModalBlock
              visible={visibleModal === 'signIn'}
              onClose={handleCloseModal}
              // classes={classes}
              title="Войти в аккаунт"
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description">
              <FormGroup>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-mail"
                  type="email"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  type="password"
                  variant="filled"
                  fullWidth
                />
                <Button
                  onClick={handleCloseModal}
                  style={{ marginBottom: 10 }}
                  variant="contained"
                  color="primary"
                  fullWidth>
                  Войти
                </Button>
              </FormGroup>
            </ModalBlock>

            <ModalBlock
              visible={visibleModal === 'signUp'}
              onClose={handleCloseModal}
              // classes={classes}
              title="Создайте учетную запись"
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description">
              <FormGroup>
                <TextField
                  className={classes.registerSideField}
                  autoFocus
                  id="name"
                  label="Имя"
                  type="name"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  className={classes.registerSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  type="email"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  className={classes.registerSideField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  type="password"
                  variant="filled"
                  fullWidth
                />
                <Button
                  // onClick={handleCloseModal}
                  style={{ marginBottom: 10 }}
                  variant="contained"
                  color="primary"
                  fullWidth>
                  Далее
                </Button>
              </FormGroup>
            </ModalBlock>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignIn;
