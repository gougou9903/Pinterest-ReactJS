var BoardListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.item)
        this.props.onListItemClicked(this.props.item.name)
    },

    render: function() {

        var item = this.props.item

        return ( 
            <div className="item row" >
                <div className="itemName nine columns" onClick={this.handleClick}>
                    <h4>
                    {item.name} 
                    </h4>                   
                </div>
                      
            </div>
        )
  }
})