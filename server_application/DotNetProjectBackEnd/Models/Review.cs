using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetProjectBackEnd.Models
{
    public class Review
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ReviewerID { get; set; }
        public string Title { get; set; }
        public string Reviewer { get; set; }
        public DateTime Date { get; set; }
        public string Feedback { get; set; }
        public int Rating { get; set; }
    }
}
