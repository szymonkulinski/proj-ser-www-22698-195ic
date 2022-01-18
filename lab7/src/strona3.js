import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import {Container, Card,InputAdornment, CardMedia,CardContent,Typography, Grid, TextField, Button as ButtonMUI} from "@material-ui/core"
import { AccountCircle, LockRounded } from '@material-ui/icons';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Logowanie() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div class="login-panel">
            <Grid container style={{minHeight: '67vh'}}> {/* <Grid> z ModernUI*/}
                <Grid container item xs={12} sm={12} alignItems='center' direction='column' justify="space-between" style={{padding: 10}}>
                    <div/>
                    <div style={{display:'flex', flexDirection:'column', maxWidth:360, minWidth:360}}>
                        <Grid container justify="center">
                            <h2>Panel Logowania</h2>
                        </Grid>
                        <TextField label='Login' margin='normal' InputProps={{startAdornment:<InputAdornment><AccountCircle/></InputAdornment>}}/> {/* <TextField> z ModernUI*/}
                        <TextField label='Hasło' margin='normal' InputProps={{startAdornment:<InputAdornment><LockRounded/></InputAdornment>}}/> {/* Dodatkowo ikony */}
                    <div style={{height:20}}/>
                        <ButtonMUI variant='contained' style={{margin:'auto',display:'flex', flexDirection:'column', maxWidth:240, minWidth:240}}> {/* <Button> z ModernUI*/}
                            Zaloguj
                        </ButtonMUI>
                    </div>
                    <div/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Logowanie;