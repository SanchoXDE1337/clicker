import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default class SimpleCard extends React.Component {
    render () {
        const {title, content} = this.props;
        return(
        <Card style={{marginBottom:"10px"}}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" component="p" style={{paddingTop:"10px"}}>
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="outlined"
                    color="secondary"
                    size={"small"}
                    onClick={this.props.onClick}
                    id={this.props.id}
                >
                    <DeleteForeverOutlinedIcon/>
                </Button>
            </CardActions>
        </Card>
        )
    }
}