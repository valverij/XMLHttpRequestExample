using System.Collections.Generic;

namespace XMLHttpRequestExample.Data
{
    public class ItemRepository : IItemRepository
    {
        private static readonly List<string> _items = new List<string>() 
        {
            "Computer", "Car", "Baseball", "Carrot"
        };

        public List<string> GetAll()
        {
            return _items;
        }

        public void Insert(string item)
        {
            _items.Add(item);
        }
    }
}