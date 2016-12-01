using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using Newtonsoft.Json;

namespace ExtJS.WebApi.Data
{
    [Serializable]
    [DataContract]
    public class TreeModel
    {
        [DataMember]
        public string Id { get; set; }
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public int Count { get; set; }
        [DataMember]
        public List<TreeModel> Children { get; set; }
    }
    [Serializable]
    [DataContract]
    public class TreeNode
    {
        public TreeNode()
        {
            children = new List<TreeNode>();
        }
        [DataMember]
        public string text { get; set; }
        [DataMember]
        public bool expanded { get; set; }
        [DataMember]
        public bool leaf { get; set; }
        [DataMember]
        public List<TreeNode> children { get; set; }
    }
}