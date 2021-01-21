"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataStringToDate = void 0;
var dataStringToDate = function (dateString) {
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[-1], dateParts[0]);
};
exports.dataStringToDate = dataStringToDate;
