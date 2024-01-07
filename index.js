(function () {

    const POI = {
        init: function (options) {
            console.log('You have called the init function and this options object was passed', options);
        },
    };

    if (typeof window !== 'undefined') {
        window.P11 = window.P11 || {};
    }

        if (typeof window !== 'undefined') {
            window.P11.POI = POI;
        }

})();