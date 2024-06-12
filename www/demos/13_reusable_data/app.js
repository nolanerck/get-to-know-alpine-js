document.addEventListener( 'alpine:init', () => {
    Alpine.data( 'bandMembers', () => ({
        guitar: 'Jason White',
        vocals: 'Billie Joe Armstrong',
        bass: 'Mike Dirnt',
        drums: 'Tre Cool'
    }
    ));
});