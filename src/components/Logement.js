import React from 'react'

import { Card, Icon, Image, Label, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'

const Logement = ({ value, favoris, dispatch }) => {
  const like = () => {
    console.log(favoris)
    const action = {
      type: "FAVORI",
      value: value.id 
    }
    dispatch(action)
  }

  return(
    <Card>
    <Image src='/maison.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{value.nom}</Card.Header>
      <Card.Meta>
        <span className='date'>Publié hier</span>
      </Card.Meta>
      <Card.Description>
        Appartement disponible à Yaoundé Tsinga.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button as='div' labelPosition='right' onClick={like}>
        <Button icon>
          <Icon name='heart' />
          Like
        </Button>
        <Label as='a' basic pointing='left'>
          2,048
        </Label>
      </Button>
    </Card.Content>
  </Card>
  ) 

}

const mapStateToProps = (state) => {
  return {favoris: state.favoris}
}

export default connect(mapStateToProps)(Logement)