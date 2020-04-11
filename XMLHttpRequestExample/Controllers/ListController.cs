using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace XMLHttpRequestExample.Controllers
{
    public class ListController: Controller
    {
        private readonly ILogger<ListController> _logger;

        private static readonly List<string> _items = new List<string>() 
        {
            "Computer", "Car", "Baseball", "Carrot"
        };

        public ListController(ILogger<ListController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Items()
        {
            return Json(new { Data = _items });
        }

        [HttpPost("/List/Items")]
        public IActionResult AddItem([FromBody]string item)
        {
            if (string.IsNullOrEmpty(item))
            {
                return UnprocessableEntity();
            }

            _items.Add(item);

            return Ok();
        }
    }
}