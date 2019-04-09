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
    public class ReviewController : Controller
    {

        private IDataReview<Review, long> _iRepo;
        public ReviewController(IDataReview<Review, long> repo)
        {
            _iRepo = repo;
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Review> Get()
        {
            return _iRepo.GetAll();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Review Get(int id)
        {
            return _iRepo.Get(id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]Review review)
        {
            _iRepo.Add(review);
        }

        // PUT api/<controller>/5
        [HttpPut]
        [Authorize]
        public void Put([FromBody]Review review)
        {
            _iRepo.Update(review.ReviewerID, review);
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
