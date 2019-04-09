using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetProjectBackEnd.Models
{
    public class Room
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long RoomNumber { get; set; }
        public int RoomTypeID { get; set; }
        public int OptionID { get; set; }
        public int Status { get; set; }


    }
}
