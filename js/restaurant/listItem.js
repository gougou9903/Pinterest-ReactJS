var RestaurantListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.restaurant)
        this.props.onListItemClicked(this.props.restaurant.business_id)
    },

    render: function() {
    
        var restaurant = this.props.restaurant

        return ( 
            <div className="restaurant row" >
                <div className="restaurantName six columns" onClick={this.handleClick}>
                    {restaurant.name}                    
                </div>
                <div className="restaurantCity six columns">
                    {restaurant.city}   
                </div>
           </div>
        )
    }
})
