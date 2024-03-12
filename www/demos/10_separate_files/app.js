document.addEventListener( 'alpine:init', () => {
    Alpine.data( 'theApp', () => ({
        guitar: 'Jason White',
        vocals: 'Billie Joe Armstrong',
        bass: 'Mike Dirnt',
        drums: 'Tre Cool',

        get allBandMembers()
        {
            return this.guitar + ' ' + this.vocals + ' ' + this.bass + ' ' + this.drums;
        }
    }
    ));
});