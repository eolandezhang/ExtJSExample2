using System.Collections.Generic;
using System.Web.Http;
using ExtJS.WebApi.Data;
using System.Linq;

namespace ExtJS.WebApi.Controllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        [HttpGet]
        public List<UserModel> Get()
        {
            return UserRepository.List;
        }
        [HttpGet]
        [Route("GetList")]
        public ListResult GetList(int page, int start, int limit)
        {
            var list = UserRepository.List;
            var result = list.Skip((page - 1) * limit).Take(limit).ToList();
            return new ListResult()
            {
                results = list.Count,
                rows = result
            };
        }
    }

    public class ListResult
    {
        public int results { get; set; }
        public List<UserModel> rows { get; set; }
    }
}