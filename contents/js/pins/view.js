var DoctorView = React.createClass({

    getInitialState: function() {
        return {doctor: null}
    },

    render: function() {
        
        if (this.state.doctor){

            return ( 
                <div className="doctorView" >
                    <h2 className="doctorName">
                        {this.state.doctor.name}
                    </h2>
                    {this.state.doctor.full_address}
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})