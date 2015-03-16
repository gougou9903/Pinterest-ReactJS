var BoardView = React.createClass({

    getInitialState: function() {
        return {item: null}
    },

    render: function() {
        
        if (this.state.item){

            return ( 
                <div className="itemView" >
                    <h2 className="itemName">
                        {this.state.item.name}
                    </h2>
                    
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})