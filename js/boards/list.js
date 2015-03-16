var BoardList = React.createClass({displayName: 'BoardList',

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
                console.log("asdfasdf")
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(name){
        var item = _.find(this.state.data, {name: name})
        this.refs.boardView.setState({item:item})
    },

    render: function() {

        var self = this

        var items = this.state.data.map(function (item) {
        
          return (    
            <BoardListItem item={item} onListItemClicked={self.handleListItemClicked}/>

            )
        })        

        return (
            <div className="boardPage">
                <div className="boardList six columns">
                    {items}
                </div>
                <div className="boardView six columns">
                    <BoardView ref="boardView"/>
                </div>
            </div>
        )
    }
})
