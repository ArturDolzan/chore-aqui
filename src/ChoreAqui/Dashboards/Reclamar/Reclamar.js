import React, {Fragment} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
    Col, Row, Card, CardBody,
    CardTitle, 
    Table
} from 'reactstrap'
import MelhoresInstituicoes from './MelhoresInstituicoes/MelhoresInstituicoes'
import MaisReclamadas from './MaisReclamadas/MaisReclamadas'
import BuscaReclamar from './BuscaReclamar/BuscaReclamar'

const melhores = [
    {
        Id: 1,
        Nome: 'SATC - Associação Beneficente ...',
        Ranking: 1,
        Percentual: 'tem que ve%'
    },
    {
        Id: 2,
        Nome: 'UNESC',
        Ranking: 2,
        Percentual: '50%'
    },
    {
        Id: 3,
        Nome: 'ESUCRI',
        Ranking: 3,
        Percentual: '25%'
    }
]

const maisReclamadas = [
    {
        Id: 1,
        Nome: 'SATC - Associação Beneficente ...',
        QtdeReclamacoes: 115445,
        QtdeRespondidas: 50
    },
    {
        Id: 2,
        Nome: 'UNESC',
        QtdeReclamacoes: 150,
        QtdeRespondidas: 5
    },
    {
        Id: 3,
        Nome: 'ESUCRI',
        QtdeReclamacoes: 100,
        QtdeRespondidas: 50
    }
]

class Reclamar extends React.Component {

    constructor(props){
        super(props)
    }

    clickMaisReclamadas(item){
        
    }

    clickMelhores(item){
        
    }

    render(){

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    
                    <Row>

                        <Col md="12">
                            <BuscaReclamar/>
                        </Col>

                        <Col md="6">
                            <MelhoresInstituicoes dados={melhores} onClickMelhores={this.clickMelhores}/>                            
                        </Col>

                        <Col md="6">                            
                            <MaisReclamadas dados={maisReclamadas} onClickMaisReclamadas={this.clickMaisReclamadas}/>                            
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}

export default Reclamar