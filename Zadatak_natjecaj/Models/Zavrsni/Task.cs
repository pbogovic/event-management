using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EManagement.Models.Zavrsni
{
    public class Task
    {
        public int Id { get; set; }

        public int Id_Event { get; set; }

        public string Name { get; set; }

        public bool IsComplete { get; set; }

        public int Rbr { get; set; }
    }
}