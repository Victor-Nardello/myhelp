import React from 'react';
import { makeStyles } from '@material-ui/styles'
import { Avatar } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles({
    post: {
        display: 'flex',
        alignItems: 'flex-start',
        borderBottom: '1px solid var(--twitter-background)',
        borderRadius: '10px',
        paddingBottom: '10px',
        maxWidth: '600px',
        border: '1px solid gray',
        padding: '16px',
        marginTop: '20px'
    },
    postAvatar: {
    },
    postBody: {
        borderRadius: '20px',
        width: '100%'
    },
    postHeader: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    postHeaderText: {
        fontSize: '15px',
        marginBottom: '15px',
    },
    descriptionPost: {
        maxWidth: '100%',
        wordWrap: 'break-word'
    },
    postHeaderDescription: {
        fontSize: '10px',
        marginBottom: '15px',
        maxWidth: '100%'
    },
    configImg: {
        borderRadius: '20px',
        maxWidth: '400px',
        maxHeight: '400px',
    },
    nomeAoLadoAvatarPost: {
        marginLeft: '10px'
    },
    divIcons: {
        
    },
    dividerDivIcons: {
        display: 'flex',
        paddingTop: '10px',
        justifyContent: 'space-evently'
    }
  })

function Post() {
    const classes = useStyles();

    return(
        <div className={classes.post}>
            <div className={classes.postAvatar}>
                <Avatar></Avatar>
            </div>
            <div className={classes.postBody}>
                <div className={classes.postHeader}>
                    <div className={classes.postHeaderText}>
                       <p className={classes.nomeAoLadoAvatarPost}>Victor Nardello</p> 
                    </div>
                    <div className={classes.postHeaderDescription}>
                        <h2 className={classes.descriptionPost}>Eu só queria dizer que sou uma pessoa muito, muito maravilhosa. Estou escrevendo essas palavras porque amo digitar no teclado que minha namorada me deu e tambem pra testar o que estou fazendo! Aparentemente deu certo, na verdade esta dando certo. Essa rede social vai ser muito boa. Eu, Marcos e Armandinho vamos fazer um trabalho muito bom e vender pro tio Mark, por 99999 quinzilhões de reais. ficando assim, aproximadamente 999 bilhoes pra cada. Podendo se aposentar e desfrutando o dinheiro por um trabalho que nao deu tanto trabalho pra fazer huahuahuahu</h2>
                    </div>
                    <img className={classes.configImg} src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.0-9/68836869_2498286866920614_2987193421300498432_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_eui2=AeG5Bw1uUx1HVc3c8cE70RrHKkwYwecjIRYqTBjB5yMhFuxzZgddmo5pwU9ulZWx6cpRv7rChQ2sKHQnS9pP4Ht_&_nc_ohc=sXtwKGHinjgAX8bfC3n&_nc_ht=scontent.fcpq2-1.fna&oh=1781fa673c0d4e5b69b78aa6bc08cb0d&oe=5FEE4808" alt="usuario" />
                </div>
                <div className={classes.divIcons}>
                   <ThumbUpAltIcon />
                   <div className={classes.dividerDivIcons}/>
                   <CommentIcon />
                </div>
            </div>
        </div>
    )
}

export default Post;