var BoardView = React.createClass({

    getInitialState: function() {
        return {boardView: null}
    },

    render: function() {
        
        if (this.state.boardView){

            return ( 
                <div className="boardView" >
                    

                </div>
            )


        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})