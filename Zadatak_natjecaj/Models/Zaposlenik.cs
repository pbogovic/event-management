using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Zadatak_natjecaj
{
    public class Zaposlenik
    {
        public int Id { get; set; }

        public string name { get; set; }

        public string surname { get; set; }

        public DateTime birthDate { get; set; }

        public int odjel_id { get; set; }

        public string odjel_naziv { get; set; }

        public float placa { get; set; }

        public string info { get; set; }

        public string img_url { get; set; }

        public string pic_url { get; set; }

        public string zadaci { get; set; }

        /*
        public Zaposlenik(int _id, string _name, string _surname, string _DOB)
        {
            id = _id;
            name = _name;
            surname = _surname;
            birthDate = _DOB;
        }
        */
    }
}