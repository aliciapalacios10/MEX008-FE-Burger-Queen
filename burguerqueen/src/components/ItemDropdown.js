import React from 'react';
import { DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import ItemDrop from "../components/ItemDrop"


export default class ItemDropdown extends React.Component {
  constructor() {
    super();

    this.state = {
menu: '',
prices: '', 
typeFood: '',
subsection: ''
    };
}



componentDidMount(){
  this.setState({
    menu: this.props.menu,
    prices: this.props.prices,
    typeFood: this.props.typefood,
})
}

setSubsection(data) {

  this.setState({
    subsection: data
  }); 
  console.log(this.state.subsection);
      
} 

  render() {

    const {typeFood, menu} = this.state;
 //   const addItem = this.props.addItem();
    if (!typeFood || !menu ) {
      return (<DropdownMenu>
        <DropdownItem>  <Badge color="dark" pill>No hay dataFood</Badge>  </DropdownItem>
  </DropdownMenu>)  
    } else {
      if (typeFood === "POSTRES") {

        return(
          <DropdownMenu>
        { 
          //onClick={()=>this.props.addItem([item])}
          this.state.menu.POSTRES.map( (item,i) => ( 
          <DropdownItem key={`postres-items-${i}`} toggle={false} onClick={() => this.props.addItem(item)}>  
              
              <Badge color="dark" pill>{item}</Badge>  
              
          </DropdownItem>
        ))}
      </DropdownMenu>
      )
          }
      if (typeFood === "COMIDA") {
        return(
          <div>
          <DropdownMenu>
  {    
    Object.keys(this.state.menu.COMIDA).map( (subsection, i )=> 
          <DropdownItem  key={i} toggle={false} data-subsection={subsection} onClick={() => {this.setSubsection(subsection)}}>  
          <Badge color="dark" pill>{subsection}</Badge>  
          </DropdownItem>
      ) 
      }
      <ItemDrop subsection={this.state.subsection} menu={this.state.menu.COMIDA[this.state.subsection]} prices={this.state.prices} addItem={this.props.addItem}/> 
          </DropdownMenu> 
          </div>
             )
           }
    
           if (typeFood === "BEBIDAS") {
            return(
              <div>
              <DropdownMenu>
      {    
        Object.keys(this.state.menu.BEBIDAS).map( (subsection, i )=> 
              <DropdownItem  key={i} toggle={false} data-subsection={subsection} onClick={() => {this.setSubsection(subsection)}}>  
              <Badge color="dark" pill>{subsection}</Badge>  
              </DropdownItem>
          ) 
          }
          <ItemDrop subsection={this.state.subsection} menu={this.state.menu.BEBIDAS[this.state.subsection]} prices={this.state.prices} addItem={this.props.addItem}/> 
              </DropdownMenu> 
              </div>
                 )
               }

    }

  }
}

