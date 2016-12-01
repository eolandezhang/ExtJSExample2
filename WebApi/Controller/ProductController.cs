using System.Collections.Generic;
using System.Web.Http;
using ExtJS.WebApi.Data;
using System.Linq;
using ExtJS.WebApi.Models;

namespace ExtJS.WebApi.Controllers
{
    [RoutePrefix("api/Product")]
    public class ProductController : ApiController
    {
        [HttpGet]
        public List<ProductModel> Get()
        {
            return ProductRepository.List;
        }

        [HttpGet]
        [Route("GetById")]
        public ActionResult<ProductModel> GetById(string productId)
        {
            var result = ProductRepository.List.FirstOrDefault(x => x.ProductId == productId);
            if (result != null)
                return new ActionResult<ProductModel>() { success = true, data = result };
            return new ActionResult<ProductModel>() { success = false, errorMessage = "未找到" };
        }
    }
}

