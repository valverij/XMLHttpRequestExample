using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using XMLHttpRequestExample.Data;

namespace XMLHttpRequestExample.Controllers
{
    public class ListController : Controller
    {
        private readonly IItemRepository _itemRepository;

        public ListController(IItemRepository itemRepository)
        {
            _itemRepository = itemRepository;
        }

        [HttpGet]
        public IActionResult Items()
        {
            var items = _itemRepository.GetAll();
            return Json(new { Data = items });
        }

        [HttpPost("/List/Items")]
        public IActionResult AddItem([FromBody]string item)
        {
            if (string.IsNullOrEmpty(item))
            {
                return UnprocessableEntity();
            }

            _itemRepository.Insert(item);

            return Ok();
        }
    }
}