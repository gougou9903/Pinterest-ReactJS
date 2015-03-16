var BoardView = React.createClass({

    getInitialState: function() {
        return {item: null}
    },

    render: function() {
        
        if (this.state.item){

            return ( 
                <div className="itemView" >
                    <h2 className="itemName">
                        {this.state.item.name}<br/>
                    </h2>
                    
                    <img src={this.state.item.src}></img><br/>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})