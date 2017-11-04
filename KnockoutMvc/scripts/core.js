function Employee() {
    var that = this;
    that.FirstName = ko.observable("");
    that.LastName = ko.observable("");
    that.FullName = ko.computed(function () {
        return that.FirstName() + " " + that.LastName();
    });
    that.DateOfBirth = ko.observable("");
    that.EducationList = ko.observableArray();
    that.Gender = ko.observable("0");
    that.DepartmentList = ko.observableArray([{ Id: '0', Name: "CSE" }, { Id: '1', Name: "MBA" }]);
    that.DepartmentId = ko.observable("1");
}
function EmployeeVM() {
    var that = this;
    that.Employee = new Employee();
    that.reset = function () {
        that.Employee.FirstName("");
        that.Employee.LastName("");
        that.Employee.DateOfBirth("");
    };
    that.submit = function () {
        var json1 = ko.toJSON(that.Employee);
        $.ajax({
            url: '/Employee/SaveEmployee',
            type: 'POST',
            dataType: 'json',
            data: json1,
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                var message = data.Message;
            }
        });
    };
};
var _vm = new EmployeeVM();
$(function () {
    ko.applyBindings(_vm);
});