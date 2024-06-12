document.addEventListener( 'alpine:init', () => {
    Alpine.data( 'parentApp', () => ({
        guitar: 'Jason White',
        vocals: 'Billie Joe Armstrong',
        bass: 'Mike Dirnt',
        drums: 'Tre Cool'
    }
    ));


    Alpine.data( 'childApp', () => ({
        bandname: 'Green Day',
        yearFormed: '1989',
        homeTown: 'Berkeley, CA'
    }
    ));    
});