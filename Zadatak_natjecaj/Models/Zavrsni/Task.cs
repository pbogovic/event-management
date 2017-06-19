using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Zadatak_natjecaj.Models.Zavrsni
{
    public class Task { 
    
        public int event_id { get; set; }

        public int task_id { get; set; }

        public int task_name { get; set; }

        public bool isComplete { get; set;}


    }
}