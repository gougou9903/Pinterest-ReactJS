

var UserView = React.createClass({

    getInitialState: function() {
        return {user: null}
    },

    render: function() {
        
        if (this.state.user){
            var converter = new Showdown.converter()
            htmlString = ""

            for(var name in this.state.user.compliments){
                htmlString += "<li>" + name + ": "
                htmlString += this.state.user.compliments[name]+"</li>"
            }

            var rawMarkup = converter.makeHtml(htmlString)

            return ( 
                <div className="userView" >
                    <h2 className="userName">
                        {this.state.user.name}
                    </h2>
                    <div className="row">
                    <h2 >
                        {'Yelping since: ' + this.state.user.yelping_since}
                    </h2>
                    </div>

                    <div className="row">
                    <h5 >
                        {'User Stats'}
                    </h5>

                        <div className="two columns">
                        </div>

                        <div className="ten columns">
                            <div className="row">
                            <b >
                            {'Review Count: ' + this.state.user.review_count}
                            </b>
                            </div>

                            <div className="row">
                            <b >
                            {'Average Rating: ' + this.state.user.average_stars}
                            </b>
                            </div>

                            <div className="row">
                            <b >
                            {'Friends: ' + this.state.user.friends.length}
                            </b>
                            </div>

                            <div className="row">
                            <b >
                            {'Fans: ' + this.state.user.fans}
                            </b>
                            </div>

                            <div className="row">
                            <b >
                            {'Compliments: '}
                            </b>

                            <div className="three columns">
                            </div>

                            <div className="ninde columns">
                            <ul>
                                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
                            </ul>
                            </div>


                            
                    </div>
                        </div>

                    </div>



                </div>

                 //<div className=
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})