import React, { Component } from 'react'

export default class ModalShoe extends Component {

    renderCard = () => {
        let { description, price, quantity, shortDescription, name
        } = this.props.carShow;
        return (
            <div>
                <h3>Thong tin chi tiet</h3>

                <div className='row '>

                    <div className="col-3">
                        <h3>{name}</h3>
                        <img height={450} src={this.props.carShow.image} alt="" />
                    </div>
                    <div className="col-9 ">
                        <h3>

                            thong tin chi tiet
                        </h3>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td >description:</td>
                                    <td>{description}</td>
                                </tr>
                                <tr>
                                    <td >Price:</td>
                                    <td>{price}$</td>
                                </tr>
                                <tr>
                                    <td >quantity:</td>
                                    <td>{quantity}</td>
                                </tr>
                                <tr>
                                    <td >shortDescription:</td>
                                    <td>{shortDescription}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    render() {

        return (
            <div>
                {this.renderCard()}
            </div>
        )
    }
}
