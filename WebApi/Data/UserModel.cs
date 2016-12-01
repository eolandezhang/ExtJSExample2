using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ExtJS.WebApi.Data
{
    [Serializable]
    [DataContract]
    public class UserModel
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string Name { get; set; }
    }
    public class UserRepository
    {
        public static List<UserModel> List;

        static UserRepository()
        {
            List = new List<UserModel>()
        {
            new UserModel() {Id=1,Name="张三"},
            new UserModel()  {Id=2,Name="李四"}
        };

            for (int i = 3; i < 30; i++)
            {
                List.Add(new UserModel() { Id = i, Name = "Name_" + i });
            }
        }
    }
}