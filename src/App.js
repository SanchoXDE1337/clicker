import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SimpleCard from "./componets/SimpleCard";

const MAX_VALUE = 10;
const MIN_VALUE = 0;

class App extends React.Component {

    state = {articles: [], value: 0};


    async componentDidMount() {
        await this.addArticle();
        this.setState({value: this.state.articles.length});

    }

    addArticle = async () => {
        const title = (await (await fetch('https://fish-text.ru/get?type=title')).json()).text;
        const content = (await (await fetch('https://fish-text.ru/get')).json()).text;
        this.setArticle({title, content})
    };

    setArticle = (article) => this.setState({articles: [...this.state.articles, article]});

    deleteArticle = () => {
        this.state.articles.pop();
        this.setState({articles: this.state.articles})
    };


    handleDecrement = () => {
        if (this.state.value !== MIN_VALUE) {
            this.setState({value: this.state.value - 1});
            this.deleteArticle();
        }
    };

    handleIncrement = () => {
        if (this.state.value !== MAX_VALUE) {
            this.setState({value: this.state.value + 1});
            this.addArticle()
        }
    };

    handleChange = (e) => {
        if (e.target.value <= MAX_VALUE && e.target.value >= MIN_VALUE) {
            const dif = e.target.value - this.state.value;
            dif > 0
                ? Array.from({length: dif}).forEach((_, i) => this.addArticle())
                : Array.from({length: dif * -1}).forEach((_, i) => this.deleteArticle());
            this.setState({value: +e.target.value});

        }
    };

    inputClick = (e) => e.target.select();

    render() {
        const {value, articles} = this.state;
        return(
                <Grid
                    container={true}
                    spacing={3}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <h1>Clicker</h1>
                    </Grid>

                    <Grid item>
                        <Grid
                            container
                            justify="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item xl>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    size={"large"}
                                    onClick={this.handleDecrement}
                                >-</Button>
                            </Grid>
                            <Grid item xl>
                                <TextField
                                    id="outlined-number"
                                    label="Articles:"
                                    value={value}
                                    onChange={this.handleChange}
                                    type="number"
                                    onClick={this.inputClick}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xl>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size={"large"}
                                    onClick={this.handleIncrement}
                                >+</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item md={4}>
                        {articles.map(({title, content}, i) => <SimpleCard title={title} content={content} key={i}/>)}
                    </Grid>
                </Grid>
        )
    }
}

export default App;
