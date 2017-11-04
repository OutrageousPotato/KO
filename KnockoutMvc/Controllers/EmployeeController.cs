using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KnockoutMvc.Models;

namespace KnockoutMvc.Controllers
{
    public class EmployeeController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View("EmployeeInfo");
        }

        [HttpPost]
        public ActionResult SaveEmployee(Employee emp)
        {
            //EmployeeMode save code here
            return View("EmployeeInfo");
        }

        [HttpGet]
        public  ActionResult PhoneList()
        {
            return View("EmployeePhone");
        }

        [HttpGet]
        public ActionResult MemberList()
        {
            return View("MemberList");
        }

    }
}
