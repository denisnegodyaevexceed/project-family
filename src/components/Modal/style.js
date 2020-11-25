import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '400px',
        margin: '0 auto',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        width: '100%',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        position: 'relative',
    },
}));

const allUseStyles = {
    useStyles
}

export default allUseStyles