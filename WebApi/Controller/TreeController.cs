using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ExtJS.WebApi.Data;

namespace ExtJS.WebApi.Controllers
{
    [RoutePrefix("api/Tree")]
    public class TreeController : ApiController
    {
        [HttpGet]
        [Route("GetList")]
        public TreeNode GetList()
        {
            var r = new TreeNode() { text = "总公司", expanded = true, leaf = false };
            var l1 = new TreeNode() { text = "分公司一", expanded = true, leaf = false };
            l1.children.Add(new TreeNode() { text = "分公司一1", expanded = true, leaf = true });
            var l2 = new TreeNode() { text = "分公司二", expanded = true, leaf = false };
            l2.children.Add(new TreeNode() { text = "分公司二1", expanded = true, leaf = true });
            r.children.Add(l1);
            r.children.Add(l2);
           
            return r;
        }


        [HttpGet]
        public List<TreeModel> Get(string Id)
        {
            var result = new List<TreeModel>();
            if (Id == "-1")
            {
                result = new List<TreeModel>()
                {
                    new TreeModel() { Id = "100", Name = "总公司", Count = 100 }
                };
            }
            else if (Id == "100")
            {
                result = new List<TreeModel>()
                {
                    new TreeModel() { Id = "110", Name = "分公司一", Count = 110 },
                    new TreeModel() { Id = "120", Name = "分公司二", Count = 80 }
                };
            }
            else if (Id == "120")
            {
                result = new List<TreeModel>()
                {
                    new TreeModel() { Id = "121", Name = "部门一", Count = 30 },
                    new TreeModel() { Id = "122", Name = "部门二", Count = 50 }
                };
            }
            return result;
        }
    }
}
