using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EManagement.Models.Zavrsni
{
    public class User
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public DateTime birthDate { get; set; }

        public string Info { get; set; }

        public string Img_url { get; set; }
    }
}