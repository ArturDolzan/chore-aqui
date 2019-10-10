import React, {Fragment} from 'react'
import { withRouter } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
    Col, Row, Card, CardBody,
    CardTitle, 
    Table
} from 'reactstrap'
import MelhoresInstituicoes from './MelhoresInstituicoes/MelhoresInstituicoes'
import MaisReclamadas from './MaisReclamadas/MaisReclamadas'
import BuscaReclamar from './BuscaReclamar/BuscaReclamar'
import UltimasReclamacoes from './UltimasReclamacoes/UltimasReclamacoes'

import avatar1 from '../../../assets/utils/images/avatars/logoSatc.png';
import avatar2 from '../../../assets/utils/images/avatars/logoUnesc.png';
import avatar3 from '../../../assets/utils/images/avatars/logoEsucri.png';

const melhores = [
    {
        Id: 1,
        Nome: 'Associação Beneficente da Indústria Carbonífera de Santa Catarina',
        Ranking: 1,
        Percentual: 'tem que ve%',
        Logo: avatar1
    },
    {
        Id: 2,
        Nome: 'UNESC',
        Ranking: 2,
        Percentual: '50%',
        Logo: avatar2
    },
    {
        Id: 3,
        Nome: 'ESUCRI',
        Ranking: 3,
        Percentual: '25%',
        Logo: avatar3
    }
]

const maisReclamadas = [
    {
        Id: 1,
        Nome: 'SATC - Associação Beneficente ...',
        QtdeReclamacoes: 115445,
        QtdeRespondidas: 50,
        Logo: avatar1
    },
    {
        Id: 2,
        Nome: 'UNESC',
        QtdeReclamacoes: 150,
        QtdeRespondidas: 5,
        Logo: avatar2
    },
    {
        Id: 3,
        Nome: 'ESUCRI',
        QtdeReclamacoes: 100,
        QtdeRespondidas: 50,
        Logo: avatar3
    }
]

class Reclamar extends React.Component {

    constructor(props){
        super(props)
    }

    clickMaisReclamadas(item){
        
        this.props.history.push(`perfil/${item.Id}`)
    }

    clickMelhores(item){
        
        this.props.history.push(`perfil/${item.Id}`)
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

                        <Col md="4">
                            <MelhoresInstituicoes dados={melhores} onClickMelhores={(item) => this.clickMelhores(item)}/>
                        </Col>

                        <Col md="4">
                            <UltimasReclamacoes/>
                        </Col>

                        <Col md="4">
                            <MaisReclamadas dados={maisReclamadas} onClickMaisReclamadas={(item) => this.clickMaisReclamadas(item)}/>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}

export default withRouter(Reclamar)