import React, {Fragment} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
    Col, Row, Card, CardBody,
    CardTitle, 
    Table
} from 'reactstrap'

class Reclamar extends React.Component {

    clickGrid(event){
        alert('teste')
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
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Melhores Universidades</CardTitle>
                                    
                                    <Table striped className="mb-0">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nome</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr onClick={(e) => this.clickGrid(e)} style={{cursor: 'pointer'}}>
                                            <th scope="row">1</th>
                                            <td>SATC - Associação Beneficente ...</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Unesc</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Esucri</td>
                                        </tr>
                                        </tbody>
                                    </Table>

                                </CardBody>
                            </Card>
                            
                        </Col>

                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Universidades + Reclamadas</CardTitle>
                                    
                                    <Table striped className="mb-0">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nome</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>SATC - Associação Beneficente ...</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Unesc</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Esucri</td>
                                        </tr>
                                        </tbody>
                                    </Table>

                                </CardBody>
                            </Card>
                            
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}

export default Reclamar