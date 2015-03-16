$( "#boards" ).on( "click", function( event ) {
    React.render(
        <BoardList url='https://pinterest-react-server.herokuapp.com/board/list'/>,
        document.getElementById('content')
    )
})

$( "#pins" ).on( "click", function( event ) {
    React.render(
         <PinList url='https://pinterest-react-server.herokuapp.com/pin/list'/>,
        document.getElementById('content')
    )
})


