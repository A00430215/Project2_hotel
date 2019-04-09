using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetProjectBackEnd.Models
{
    public class LoginResponse
    {
        public string TokenString { get; set; }
        public long CustomerId { get; set; }
        public string CustomerName { get; set; }
        public DateTime? DateOfRegistration { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}
