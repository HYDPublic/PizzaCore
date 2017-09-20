using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PizzaCore.Server.Models
{
    public class PizzaOrder
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public IEnumerable<Pizza> Pizzas { get; set; }

        public bool Pickup { get; set; }
    }
}
