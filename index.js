(function () {

    const POI = {
        init: function () {
            console.log('init');
        },
    };

    if (typeof window !== 'undefined') {
        window.P11 = window.P11 || {};
    }

        if (typeof window !== 'undefined') {
            window.P11.POI = POI;
        }

})();