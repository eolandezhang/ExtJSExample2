using System.Collections.Generic;
using System.Web.Http;
using ExtJS.WebApi.Data;
using System.Linq;

namespace ExtJS.WebApi.Controllers
{
    [RoutePrefix("api/Book")]
    public class BookController : ApiController
    {
        [HttpGet]
        public List<BookModel> Get()
        {
            return BookRepository.List;
        }

        [HttpGet]
        [Route("Search")]
        public List<BookModel> Search(string name)
        {
            return string.IsNullOrEmpty(name) ? BookRepository.List
                : BookRepository.List.Where(x => x.Name.Contains(name)).ToList();
        }
    }
}