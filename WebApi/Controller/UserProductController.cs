using System;
using System.Collections.Generic;
using System.Web.Http;
using ExtJS.WebApi.Data;
using System.Linq;


namespace ExtJS.WebApi.Controllers
{
    [RoutePrefix("api/UserProduct")]
    public class UserProductController : ApiController
    {
        [HttpGet]
        public List<UserProductModel> Get(string filter)
        {
            //[{"property":"user_id","value":1}]
            var f = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Filter>>(filter);
            var m = f.FirstOrDefault();
            var v = Convert.ToInt32(m.value);
            return UserProductRepository.List.Where(x => x.User_Id == v).ToList();
        }

    }

    public class Filter
    {
        public string property { get; set; }
        public string value { get; set; }
    }
}