document.addEventListener( 'alpine:init', () => {
    Alpine.store('tabs', 
    {
        current: 'punk',
     
        items: ['punk', 'metal', 'jazz'],
    });
});