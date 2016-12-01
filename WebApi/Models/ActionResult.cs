using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtJS.WebApi.Models
{
    public class ActionResult<T>
    {
        public bool success { get; set; }
        public T data { get; set; }
        public string errorMessage { get; set; }
        public object errors { get; set; }
    }
}