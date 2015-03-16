var RestaurantView = React.createClass({

    getInitialState: function() {
        return {restaurant: null}
    },

    render: function() {
        
        if (this.state.restaurant){

            return ( 
                <div className="restaurantView" >
                    <h2 className="restaurantName">
                        {this.state.restaurant.name}
                    </h2>
                    {this.state.restaurant.full_address}
                </div>
            )
        }

        else {

            return (
                <h2>Click an item to see details</h2>
            )
        }
  	}
})