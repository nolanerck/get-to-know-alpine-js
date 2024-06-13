document.addEventListener( 'alpine:init', () => {

    Alpine.store('tabs', 
    {
        current: 'punk',
     
        items: ['punk', 'metal', 'jazz'],
    });

    Alpine.data( 'punkBandApp', () => ({
        punkBands: [ '7 Seconds', 'Green Day', 'DOA', 'The Subhumans', '999', 'The Clash' ]
    }));

    Alpine.data( 'metalBandApp', () => ({
        metalBands: [ 'Megadeth', 'Slayer', 'Anthrax', 'Gojira', 'Behemoth' ]
    }));
    
    Alpine.data( 'jazzBandApp', () => ({
        jazzBands: [ 'Herbie Hancock', 'Chet Baker', 'Wes Montgomery', 'Stanley Jordan' ]
    }));    

});
