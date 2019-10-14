import React, {Fragment} from 'react'
import Rating from '@material-ui/lab/Rating'
import {Row, Col, Label} from 'reactstrap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

import avatar1 from '../../../../assets/utils/images/avatars/1.jpg'

class PerfilBodyResumoTab extends React.Component {

    render(){

        return (
			<Fragment>
				
				<Row>
					<Col md="1">
						<div className="containerPerfilBodyResumoTabAvatar">
							<img width={80} className="rounded-circle" src={avatar1} alt=""/>
						</div>

						<div className="containerPerfilBodyResumoTabTituloAvatar">
							<Label className="labelPerfilHeaderBotaoReclamarLabel">Ótimo</Label>
						</div>

						<div className="containerPerfilBodyResumoTabTituloAvatar">
							<Label>Média 4.6</Label>
							<FontAwesomeIcon className="ml-2 fa-lg" icon={faStar}/>
						</div>
					</Col>

					<Col md="11">
						
						<div>
							<Row>
								<Col md="3">
									<Label>Satisfação Geral</Label>
								</Col>
							</Row>

							<Row>
								<Col md="3">
									<Rating value={5}
									name="estrelasSatisfacaoGeral"
									/>
								</Col>
							</Row>
						</div>

						<div>
							<Row>
								<Col md="3">
									<Label >Qualidade do Ensino</Label>
								</Col>
							</Row>

							<Row>
								<Col md="3">
									<Rating value={3}
									name="estrelasQualidadeDoEnsino"
									/>
								</Col>
							</Row>
						</div>

						<div>
							<Row>
								<Col md="3">
									<Label >Estrutura Física</Label>
								</Col>
							</Row>

							<Row>
								<Col md="3">
									<Rating value={4}
									name="estrelasEstruturaFisica"
									/>
								</Col>
							</Row>
						</div>

						<div>
							<Row>
								<Col md="3">
									<Label >Coordenações</Label>
								</Col>
							</Row>

							<Row>
								<Col md="3">
									<Rating value={2}
									name="estrelasCoordenacoes"
									/>
								</Col>
							</Row>
						</div>

						<div>
							<Row>
								<Col md="3">
									<Label >Professores</Label>
								</Col>
							</Row>

							<Row>
								<Col md="3">
									<Rating value={1}
									name="estrelasProfessores"
									/>
								</Col>
							</Row>
						</div>

					</Col>
				</Row>
			</Fragment>
        )        
    }
}

export default PerfilBodyResumoTab