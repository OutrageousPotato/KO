function Member(name, number, food) {
    var self = this;
    self.Name = ko.observable(name);
    self.PhoneNumber = ko.observable(number);
    self.Food = ko.observable(food);
}

function MemberModel() {
    var self = this;
    self.MemberList = ko.observableArray([
        new Member("Abraham Lincoln", "503-754-8096", "Pizza"),
        new Member("Ted Danson", "816-931-3548", "Poison")
    ]);

    self.remove = function () {
        self.MemberList.remove(this);
    };
    self.add = function() {
        self.MemberList.push(new Member("name", "number", "food"));
    };
}
$(function () {
    var _vm = new MemberModel();
    ko.applyBindings(_vm);
});