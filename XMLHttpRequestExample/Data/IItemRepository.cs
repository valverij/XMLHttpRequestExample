using System.Collections.Generic;

namespace XMLHttpRequestExample.Data
{
    public interface IItemRepository
    {
        List<string> GetAll();
        void Insert(string item);
    }
}