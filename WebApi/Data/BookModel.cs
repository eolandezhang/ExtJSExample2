using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ExtJS.WebApi.Data
{
    [Serializable]
    [DataContract]
    public class BookModel
    {
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public string Desc { get; set; }
    }

    public class BookRepository
    {
        public static List<BookModel> List = new List<BookModel>()
        {
            new BookModel() {Name="论语",Desc="论语别裁" },
            new BookModel() {Name="诗经",Desc="关关雎鸠，在河之洲。" }
        };
    }
}