var PinView = React.createClass({

    getInitialState: function() {
        return {pin: null}
    },

    render: function() {
        
        if (this.state.pin){

            return ( 
                <div className="pinView" >
                    <div className="pinName row">
                    <h2>
                        {this.state.pin.name}<br/>
                    </h2>
                    </div>

                    <div className="picture row">
                    <img src={this.state.pin.src}></img><br/>
                    </div>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})