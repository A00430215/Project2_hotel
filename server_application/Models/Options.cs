using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetProjectBackEnd.Models
{
    public class Option
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OptionID { get; set; }
        public string OptionName { get; set; }
        public int Recommended { get; set; }
        public int Breakfast { get; set; }
        public int NonRefundable { get; set; }
        public string Included { get; set; }
        public double DiscountedPrice { get; set; }
        public double RealPrice { get; set; }
        public string Deal { get; set; }
        public string PromoID { get; set; }

    }
}
