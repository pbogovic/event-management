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
        public string CreatedBy_Name { get; set; }
        public string CreatedBy_Surname { get; set; }
        public string CreatedBy_Img_url { get; set; }
        public string Category_Name { get; set; }
        public string Category_Img_url { get; set; }
    }
}