using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetProjectBackEnd.Models
{
    public class Payment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PaymentId { get; set; }
        public string CardType { get; set; }
        public string CardNumber { get; set; }
        public int ExpiryMonth { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NameOnCard { get; set; }
        public long PriceBeforeDiscount { get; set; }
        public long TotalDiscount { get; set; }
        public long PriceAfterDiscount { get; set; }
        public int ExpiryYear { get; set; }
    }
}
