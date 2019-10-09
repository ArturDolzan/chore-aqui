import React, {Fragment} from 'react'
import { Card, CardBody, Button, Input} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

class BuscaReclamar extends React.Component {

    render(){

        return (
            <Fragment>
                <Card className="main-card mb-3 buscaReclamar-minHeight" >
                    <CardBody className="containerBuscaReclamarFlex">
                        
                        <div className="containerBuscaReclamar">
                            <div className="containerBuscaReclamarCentralizado">
                                <Input type="text" placeholder="Procurar por instituição de ensino, curso, etc"/>
                                <Button color="secundary" className="buscaReclamar-botao"> <FontAwesomeIcon className="fa-2x" icon={faSearch}/> </Button>
                            </div>
                        </div>
                        
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}

export default BuscaReclamar