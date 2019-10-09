import React, {Fragment} from 'react'

import PerfilHeader from '../PerfilHeader/PerfilHeader'
import {Row, Col} from 'reactstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class PerfilMain extends React.Component {

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
                            <PerfilHeader/>
                        </Col>

                        <Col md="3">
                            1
                        </Col>

                        <Col md="3">
                            2
                        </Col>

                        <Col md="3">
                            3
                        </Col>

                        <Col md="3">
                            4
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>

            </Fragment>
        )
    }
}

export default PerfilMain