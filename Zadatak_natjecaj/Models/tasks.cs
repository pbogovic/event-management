using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EManagement.Models
{
    public class Tasks
    {
        public int id_zaposlenik {get; set;}

        public int rbr { get; set; }

        public string zadatak_naslov { get; set; }

        public bool isComplete { get; set; }



    }
}