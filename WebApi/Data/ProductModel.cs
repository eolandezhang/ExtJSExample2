using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ExtJS.WebApi.Data
{
    [Serializable]
    [DataContract]
    public class ProductModel
    {
        [DataMember]
        public string ProductId { get; set; }
        [DataMember]
        public string ProductName { get; set; }
        [DataMember]
        public decimal Price { get; set; }
        [DataMember]
        public string Date { get; set; }
        [DataMember]
        public string Introduction { get; set; }
    }

    public class ProductRepository
    {
        public static List<ProductModel> List = new List<ProductModel>()
        {
            new ProductModel() {ProductId="001",ProductName="论语",Price=100,Date="2016/11/11" },
            new ProductModel() {ProductId="002",ProductName="诗经",Price=95,Date="2016/11/12" }
        };
    }
}