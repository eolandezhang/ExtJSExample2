using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ExtJS.WebApi.Data
{
    [Serializable]
    [DataContract]
    public class UserProductModel
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string Title { get; set; }
        [DataMember]
        public int User_Id { get; set; }
    }
    public class UserProductRepository
    {
        public static List<UserProductModel> List = new List<UserProductModel>()
        {
            new UserProductModel() {Id=1,Title="电视",User_Id=1},
            new UserProductModel()  {Id=2,Title="冰箱",User_Id=1},
            new UserProductModel()  {Id=3,Title="洗衣机",User_Id=2}
        };
    }
}