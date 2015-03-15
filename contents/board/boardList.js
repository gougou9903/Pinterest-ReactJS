var BoardList = React.createClass({displayName: 'BoardList',

    getInitialState: function() {
        return {data: []};
    },

    handleListItemClicked: function(name){
        var list = _.find(this.props.data, {name: name})
        this.refs.boardView.setState({list:list})
    },

    render: function() {

        var self = this

        var items = this.props.data.map(function (item) {
        
          return (    
            <ColourListItem item={item} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="boardList">
                <div className="boardList five columns">
                    {items}
                </div>
                <div className="boardView seven columns">
                    <boardView ref="boardView"/>
                </div>
            </div>
        )
    }
})