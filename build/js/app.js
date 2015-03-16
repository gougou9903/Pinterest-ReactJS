$( "#boards" ).on( "click", function( event ) {
    React.render(
        <BoardList url='https://unpinterest.herokuapp.com/board/list'/>,
        document.getElementById('content')
    )
})

$( "#pins" ).on( "click", function( event ) {
    React.render(
        // <UserList url='data/users.json.data'/>,
        // document.getElementById('content')
    )
})


