using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DotNetProjectBackEnd.Models;
using DotNetProjectBackEnd.Models.Repository;
using DotNetProjectBackEnd.Models.DataManager;
using Microsoft.AspNetCore.Authorization;

namespace DotNetProjectBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {

        private IDataBooking<Booking, long> _iBookRepo;
        public BookingController(IDataBooking<Booking, long> repo)
        {
            _iBookRepo = repo;
        }


        // GET api/values
        [HttpGet]
        public IEnumerable<Booking> Get()
        {
            return _iBookRepo.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Booking Get(long id)
        {
            return _iBookRepo.Get(id);
        }

        // POST api/values
        [HttpPost]
        [Authorize]
        public void Post([FromBody] Booking booking)
        {
            _iBookRepo.Add(booking);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put([FromBody] Booking booking)
        {
            _iBookRepo.Update(booking.Booking_Id, booking);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public long Delete(long id)
        {
            return _iBookRepo.Delete(id);
        }
    }
}
