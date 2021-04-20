import React from 'react';
import { makeStyles, Button, TextField  } from '@material-ui/core'

const useStyles = makeStyles({
    userLogin: {
        width: '500px',
        height: '400px',
        padding: '50px',
        marginTop: '10px',
        marginLeft: '375px',
    },
    myHelpText: {
        fontSize: '100px',
        marginLeft: '60px'
    },
    formControlUser: {
        display: 'flex',
    },
    textFieldUser: {
        width: '100%',

    },
    formControlSenha: {
        display: 'flex',
    },
    textFieldSenha: {
        width: '100%',
    },
    divButtonEntrarCadastrar: {
        width: '100%%',
        marginTop: '25px'
    },
    buttonEntrar: {
        marginLeft: '30px',
        backgroundColor: '#64b5f6',
    },
    buttonCadastrar: {
        marginLeft: '250px',
        backgroundColor: '#64b5f6',
    }
})

const LoginMyHelp = () => {

    const classes = useStyles();

    return(
        <div className={classes.userLogin}>
            <h1 className={classes.myHelpText}>MyHelp!</h1>
            <form>
                <div className={classes.formControlUser}>
                    <TextField 
                    id="user" 
                    type="text" 
                    name="user" 
                    label="Email" 
                    className={classes.textFieldUser}
                    />
                </div>
                <div className={classes.formControlSenha}>
                    <TextField 
                    id="password" 
                    type="password" 
                    name="password" 
                    label="Senha" 
                    className={classes.textFieldSenha}
                    />
                </div>
                <div className={classes.divButtonEntrarCadastrar}>
                    <Button
                        type="submit"
                        theme="contained-green"
                        className={classes.buttonEntrar}
                        rounded>
                        Entrar
                    </Button>
                    <Button
                        type="submit"
                        theme="contained-green"
                        className={classes.buttonCadastrar}
                        rounded>
                            Cadastre-se
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default LoginMyHelp;