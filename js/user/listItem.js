var UserListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.user)
        this.props.onListItemClicked(this.props.user.user_id)
    },

    render: function() {

        var user = this.props.user

        return ( 
            <div className="user row" >
                <div className="userName four columns" onClick={this.handleClick}>
                    {user.name}                    
                </div>
                <div className="userReview_Count four columns">
                    {user.review_count} reviews
                </div>
                <div className="userYelping_Since four columns">
                    {user.yelping_since}
                </div>
            </div>
        )
  }
})