using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PizzaCore.Web.Models
{
    public class PizzaOrder
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public IEnumerable<string> SelectedToppings { get; set; }

        public string Size { get; set; }
    }
}
