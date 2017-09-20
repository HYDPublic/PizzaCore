using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PizzaCore.Server.Controllers
{
    [Produces("application/json")]
    [Route("api/PizzaToppings")]
    public class PizzaToppingsController : Controller
    {
    }
}