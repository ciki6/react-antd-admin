import React, { Component } from "react";
import { Card, Progress } from "antd";
import { connect } from "react-redux";
import PanThumb from '@/components/PanThumb'
import Mallki from '@/components//Mallki'
import './index.less'
class BoxCard extends Component {
  state = {};
  render() {
    const {avatar} = this.props
    return (
		<div className="box-card-component">
			<Card
				cover={
					<img
						alt="example"
						src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2094273148,917260273&fm=26&gp=0.jpg"
						style={{ height: '480px' }}
					/>
				}
			>
				<div style={{ position: 'relative' }}>
					<PanThumb image={avatar} className="panThumb" />
					<Mallki className="mallki-text" text="Ciki6" />
					<div
						style={{ paddingTop: '35px' }}
						className="progress-item"
					>
						<span>React</span>
						<Progress percent={70} />
					</div>
					<div className="progress-item">
						<span>JavaScript</span>
						<Progress percent={18} />
					</div>
					<div className="progress-item">
						<span>Css</span>
						<Progress percent={12} />
					</div>
					<div className="progress-item">
						<span>ESLint</span>
						<Progress percent={100} />
					</div>
				</div>
			</Card>
		</div>
	)
  }
}

export default connect((state) => state.user)(BoxCard);