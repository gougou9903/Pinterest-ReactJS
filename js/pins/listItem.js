var PinListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.pin)
        this.props.onListItemClicked(this.props.pin.href)
    },

    render: function() {

        var pin = this.props.pin

        return ( 
            <div className="pin row" >
                <div className="doctorName twelve columns" onClick={this.handleClick}>
                    <b>
                    {pin.desc}
                    </b>                   
                </div>
                
                
            </div>
            
        )
  }
})