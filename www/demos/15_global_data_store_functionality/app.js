document.addEventListener( 'alpine:init', () => {

    Alpine.store('tabs', 
    {
        current: 'punk',
     
        items: ['punk', 'metal', 'jazz'],
    });

    Alpine.data( 'theApp', () => ({

        init()
        {
            console.log( 'init the app' );

            // this.genre = 'punk rock';
        },

        punkBands: [ '7 Seconds', 'Green Day', 'DOA', 'The Subhumans', '999', 'The Clash' ],
        metalBands: [ 'Megadeth', 'Slayer', 'Anthrax', 'Gojira', 'Behemoth' ],
        jazzBands: [ 'Herbie Hancock', 'Chet Baker', 'Wes Montgomery', 'Stanley Jordan' ]

    }));

});
