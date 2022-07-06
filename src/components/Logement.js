
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Logement = () => (
  <Card>
    <Image src='/maison.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Appartement moderne</Card.Header>
      <Card.Meta>
        <span className='date'>Publié hier</span>
      </Card.Meta>
      <Card.Description>
        Appartement disponible à Yaoundé Tsinga.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
       Empire IMMO
      </a>
    </Card.Content>
  </Card>
)


export default Logement