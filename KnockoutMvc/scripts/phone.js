function Phone(code, number) {
    var self = this;
    self.CountryCode = ko.observable(code);
    self.PhoneNumber = ko.observable(number);
}

function PhoneViewModel() {
    var self = this;
    self.PhoneList = ko.observableArray([new Phone("00", "00-00-00")]);
    self.remove = function () {
        self.PhoneList.remove(this);
    };
    self.add = function () {
        self.PhoneList.push(new Phone("01", "00-00-01"));
    };
}
$(function () {
    var _vm = new PhoneViewModel();
    ko.applyBindings(_vm);
});