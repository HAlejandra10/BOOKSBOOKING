import React from 'react'
import Search from './Search'
import './Menu.css'
import PanelAdd from './PanelAdd'

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {newItemPanel: false};

        //Esta es una forma de bindear (1)

        this.add = this.add.bind(this);
        this.onCancel= this.onCancel.bind(this);
    }
//extiste otra forma de bindear con arrow function (2)
// add= () => {
//      this.setState({newItemPanel:true});
//   }
    add (){
        this.setState({newItemPanel: true});
        console.log("mensaje");
    }

    onCancel =(e) => {
        this.setState({newItemPanel: false});
    }

    
    render() {
        return (
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                {this.props.title}
                    </div>
                    <div className="search">
                <Search onsearch={this.props.onsearch}/>
                    </div>
                    <div className="actions">
                <button onClick={this.add}  className="button btn-blue">+ Añadir nuevo libro</button>
                    </div>
                </div>
                {
                    (this.state.newItemPanel)?
                    <PanelAdd oncancel ={this.onCancel} onadd={this.props.onadd}/>
                    :
                    ''
                } 
            </div>
        );
    }



}



export default Menu
