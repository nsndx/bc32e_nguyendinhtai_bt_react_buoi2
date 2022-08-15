import React, { Component } from 'react'
import data from '../dataGlasses.json'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            img: '',
            name: '',
            price: '',
            desc: '',
            display: 'none'
        }
    }

    changeGlass(index) {
        const { url, name, price, desc } = this.state.data[index]
        this.setState({ img: url, name: name, price: price + '$', desc: desc, display: 'block' })
    }

    renderGlass() {
        return this.state.data.map((glass, index) => <img src={glass.url} alt='' onClick={() => this.changeGlass(index)} key={index} />)
    }

    render() {
        return (
            <section className='main'>
                <div className="container">
                    <div className="model">
                        <div className="col">
                            <img src={'./glassesImage/model.jpg'} alt="" />
                            <img src={this.state.data[2].url} alt="" className='imgGlass' />
                            <div className="info">
                                <h3>{this.state.data[2].name}</h3> <span>{this.state.data[2].price}$</span>
                                <p>{this.state.data[2].desc}</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={'./glassesImage/model.jpg'} alt="" />
                            <img src={this.state.img} alt="" className='imgGlass' />
                            <div className="info" style={{ display: this.state.display }}>
                                <h3>{this.state.name}</h3> <span>{this.state.price}</span>
                                <p>{this.state.desc}</p>
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
