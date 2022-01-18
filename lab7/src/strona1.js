import React from "react";
import {Button, ButtonGroup, Container} from "@material-ui/core";
import Business from "@material-ui/icons/Business";
import Typography from '@material-ui/core/Typography'

const Ksiazki = props => {
  const pozycje = ['Buszyjący w Zbożu', 'Rok 1984', 'Harry Potter', 'Wilk Stepowy', 'Lolita']
  const pozycjeLista = pozycje.map(pozycje => <li key={pozycje}>{pozycje}</li>)
  
  const autorzy = ['Salinger', 'Orwell', 'Rowling', 'Hesse', 'Vladimir Nabokov']
  const autorzyLista = autorzy.map(autorzy => <li key={autorzy}>{autorzy}</li>)
  
  return (
      <div>
          {props.test ? <ul class = "border border-dark">{pozycjeLista}</ul> : <ul class = "border border-dark">{autorzyLista}</ul>}
      </div>
	  
  )
}

class Lista extends React.Component {
  state={
    title: 'Dostepne ksiazki'
  }
  
  pokazAutorow(){
    this.setState({ pokazAutorow : !this.state.pokazAutorow })
  }
  
  render(){
    const zmienTytul = () => this.setState({ title: '8/10' })
    return (
        <div>
          <div>
            <Container fixed maxWidth="md">
              <Typography gutterBottom variant="h5" component="h1">{this.state.title}</Typography>
              <Ksiazki test={this.state.pokazAutorow}/>
			  <ButtonGroup color="primary" aria-label="outlined secondary button group">
				<Button class="btn btn-secondary mr-3 border border-dark" onClick={zmienTytul}> Średnia Ocena Ksiazek </Button>
				<Button class="btn btn-secondary mr-3 border border-dark" onClick={()=>this.pokazAutorow()}> Ksiazki/Autorzy </Button>
			  </ButtonGroup>
            </Container>
          </div>
        </div>
    )
  }
}

export default Lista;