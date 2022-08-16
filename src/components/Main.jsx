import React, { Component } from 'react'
import data from '../dataGlasses.json'

export default class Main extends Component {
    state = {
        glass: {},
        display: 'none'
    }

    changeGlass = (glass) => {
        this.setState({ glass: glass, display: 'block' })
    }

    renderGlass = () => {
        return data.map(glass => <img src={glass.url} alt='' onClick={() => this.changeGlass(glass)} key={glass.id} />)
    }

    render() {
        return (
            <section className='main'>
                <div className="container">
                    <div className="model">
                        <div className="col">
                            <img src={'./glassesImage/model.jpg'} alt="" />
                            <img src={data[2].url} alt="" className='imgGlass' />
                            <div className="info">
                                <h3>{data[2].name}</h3> <span>{data[2].price}$</span>
                                <p>{data[2].desc}</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={'./glassesImage/model.jpg'} alt="" />
                            <img src={this.state.glass.url} alt="" className='imgGlass' />
                            <div className="info" style={{ display: this.state.display }}>
                                <h3>{this.state.glass.name}</h3> <span>{this.state.glass.price}$</span>
                                <p>{this.state.glass.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="listGlass">
                        {this.renderGlass()}
                    </div>
                </div>
            </section>
        )
    }
}
