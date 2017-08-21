using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Zadatak_natjecaj.Models.Zavrsni
{
    public class Event
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Id_category { get; set; }

        public string Description { get; set; }
    }
}