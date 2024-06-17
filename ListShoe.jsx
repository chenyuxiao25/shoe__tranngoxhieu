import React, { Component } from 'react'
import ModalShoe from './ModalShoe';
export default class ListShoe extends Component {
    renderDataListShoe = () => {
        let { dataListShoe } = this.props;
        return dataListShoe.map((shoe, index) => {
            return (
                <div key={index} className="col-4">

                    <div className="card " >
                        <img className="card-img-top" src={shoe.image} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{shoe.name}</h4>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                                this.props.handleChangeShoe(shoe)
                            }
                            }>xem chi tiet</button>
                        </div>
                    </div>
                </div>

            )
        }
        )
    }


    render() {
        return (
            <div className='row'>{this.renderDataListShoe()}</div>

        )
    }
}
