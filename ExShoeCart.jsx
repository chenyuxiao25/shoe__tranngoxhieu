import React, { Component } from 'react'
import { dataShoe } from './data'
import ListShoe from './ListShoe';
import ModalShoe from './ModalShoe';

export default class ExShoeCart extends Component {
  state = {
    dataShoe: dataShoe,
    dataShow: {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    },
  }
  handleChangeShoe = (shoe) => {
    this.setState({
      dataShow: shoe
    })

  }


  render() {
    let data = this.state.dataShoe;
    console.log("🚀 ~ ExShoeCart ~ render ~ data:", data)

    return (
      <div>
        <ListShoe dataListShoe={this.state.dataShoe}
          handleChangeShoe={this.handleChangeShoe} />
        <div id="exampleModal" >

          <ModalShoe carShow={this.state.dataShow}
          />
        </div>
      </div>
    )
  }
}
