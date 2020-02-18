import React from 'react'
import Counter from './Counter'

class Cart extends React.Component {
    state = {
        data: this.props.data
    }
    handlePlus = (i) => {
        const cardData = this.props.data
        cardData[i]['qty'] = cardData[i]['qty'] + 1
        this.setState({
            data: cardData
        })
    }
    handleMinus = (i) => {
        const cardData = this.props.data
        cardData[i]['qty'] = cardData[i]['qty'] - 1
        this.setState({
            data: cardData
        })
    }
    render() {
        const data = this.state.data
        const totalItems = data.reduce((acc, cur) => acc + cur.qty, 0);
        const totalPrice = data.reduce((acc, cur) => acc + cur.qty * cur.price, 0);
        return (
            <div className="cart" >
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td colSpan={1}></td>
                            <td>
                                <h4>
                                    <span className="badge badge-primary">Total Items {totalItems}</span>
                                </h4>
                            </td>
                            <td>
                                <h4>
                                    <span className="badge badge-primary">Total Price {totalPrice}</span>
                                </h4>
                            </td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {this.props.data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Counter
                                        value={item.qty}
                                        handlePlus={this.handlePlus}
                                        handleMinus={this.handleMinus}
                                        index={index}
                                    />
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cart;