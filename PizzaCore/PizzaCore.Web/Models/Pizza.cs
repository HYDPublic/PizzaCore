﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PizzaCore.Web.Models
{
    public class Pizza
    {
        public bool WholeWheatCrust { get; set; }

        public IEnumerable<string> Toppings { get; set; }

    }
}
