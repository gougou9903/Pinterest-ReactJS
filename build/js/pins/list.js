var PinList = React.createClass({displayName: 'PinList',

    getInitialState: function() {
        return {data: []};
    },
  
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(href){
        var pin = _.find(this.state.data, {href: href})
        this.refs.pinView.setState({pin:pin})
    },

    render: function() {

        var self = this

        var pins = this.state.data.map(function (pin) {
        
          return (    
            <PinListItem pin={pin} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="pinPage">
                <div className="pinList six columns">
                    {pins}
                </div>
                <div className="pinView six columns">
                    <PinView ref="pinView"/>
                </div>
            </div>
        )
    }
})
