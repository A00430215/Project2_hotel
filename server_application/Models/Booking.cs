using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetProjectBackEnd.Models
{
    public class Booking
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Booking_Id { get; set; }
        public long Customer_ID { get; set; }
        public int Room_Type { get; set; }
        public double Price  { get; set; }
        public DateTime Check_In_Date { get; set; }
        public DateTime Check_Out_Date { get; set; }
        public long Guest_ID { get; set; }
        public int No_Of_Persons { get; set; }
        public int No_Of_Rooms { get; set; }
        public int PromoID { get; set; }
        public double Total_Price { get; set; }
        public int Refundable { get; set; }
        public DateTime BookingDate { get; set; }
    }
}
