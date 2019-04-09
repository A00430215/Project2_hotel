using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DotNetProjectBackEnd.Models;
using DotNetProjectBackEnd.Models.Repository;
using DotNetProjectBackEnd.Models.DataManager;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DotNetProjectBackEnd.Controllers
{
    [Route("api/[controller]")]
    public class AmenitiesController : Controller
    {

        private IDataAmenities<Amenities, long> _iRepo;
        public AmenitiesController(IDataAmenities<Amenities, long> repo)
        {
            _iRepo = repo;
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Amenities> Get()
        {
            return _iRepo.GetAll();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Amenities Get(int id)
        {
            return _iRepo.Get(id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]Amenities amenities)
        {
            _iRepo.Add(amenities);
        }

        // PUT api/<controller>/5
        [HttpPut]
        [Authorize]
        public void Put([FromBody]Amenities amenities)
        {
            _iRepo.Update(amenities.AmenitiesID, amenities);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        [Authorize]
        public long Delete(int id)
        {
            return _iRepo.Delete(id);
        }
    }
}
