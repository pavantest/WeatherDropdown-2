import React from 'react';
import styles from '../../css/styles.scss';


// STATEFULL class called Dropdown that extends the base React Component class
export default class Dropdown extends React.Component {
    constructor() {
        super();
        this.state = {
          selectedListItem: null,
          isListVisible: false
        }
        this.dropDownClickHandler = this.dropDownClickHandler.bind(this);
        this.dropDownListItemClickHandler = this.dropDownListItemClickHandler.bind(this);
     }

      // Handling the event of Dropdown click
      dropDownClickHandler(){
        this.setListVisibleState (!this.state.isListVisible);
      }

      // Handling the event of Dropdown list
      dropDownListItemClickHandler(e){
        const index = e.currentTarget.getAttribute('data-index');
        this.setState({
          selectedListItem: this.props.items[index]
        })
        this.setListVisibleState(!this.state.isListVisible);
      }

      // Function to toggeling the visible and invisible state of the list coantainer
      setListVisibleState(isListVisible){
        this.setState({
          isListVisible:isListVisible
        });
      }

      // Function will render Dropdown and its Dropdownlist component 
      render() {
      	const WeatherComponent = this.props.itemComponent;
      	const listItems = this.props.items.map( (item,i) => <li className="dropdown-list-items" data-index={i} 
        onClick={this.dropDownListItemClickHandler}  listItem={item}><WeatherComponent  {...item} /></li>)      
        return <div className="custom-dropdown-holder">
                  <h2>React Assignment - Weather Dropdown</h2>
                  <div className="custom-dropdown">
                     <button className="btn btn-default" type="button" 
                      onClick={this.dropDownClickHandler}>
                      <div className={!this.state.selectedListItem ? 'list-show' : 'list-hide'}>
                        {this.props.placeholder}
                        <span className="caret pull-right"></span>
                      </div>
                      <div className={this.state.selectedListItem ? 'list-show' : 'list-hide'}>
                        <WeatherComponent  {...this.state.selectedListItem} />
                        <span className="caret pull-right"></span>
                      </div> 
                     </button>
                     <ul className={this.state.isListVisible ? 'list-show' : 'list-hide'}>
                     		{listItems}
                     </ul>
                  </div>
              </div>
      }
}