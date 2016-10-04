"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var activities = [
            { id: 2, name: 'Lawn Tennis' },
            { id: 3, name: 'Crocodile High Tea' },
            { id: 4, name: 'Artichoke Throwing' },
            { id: 5, name: 'Egg Sniffing' },
            { id: 6, name: 'Colour Naming' },
            { id: 7, name: 'Arm Wrestling' },
            { id: 8, name: 'Eyeball Rolling' },
            { id: 9, name: 'Coffee Perking' },
            { id: 10, name: 'Toffee Chewing' }
        ];
        return { activities: activities };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map