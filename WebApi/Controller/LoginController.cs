using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ExtJS.WebApi.Models;

namespace ExtJS.WebApi.Controllers
{
    [RoutePrefix("api/Login")]
    public class LoginController : ApiController
    {
        [HttpGet]
        [Route("Validate")]
        public ActionResult<string> Validate(string username, string password)
        {
            if (username == "test" && password == "test")
                return new ActionResult<string>() { success = true };
            return new ActionResult<string>() { success = false, errors = new { Password = "用户名或密码错误" } };
        }
    }
}
