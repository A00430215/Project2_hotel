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
    public class CustomerController : Controller
    {
        private IDataRepository<Customer, long> _iRepo;
        public CustomerController(IDataRepository<Customer, long> repo)
        {
            _iRepo = repo;
        }

        // GET: api/values
        [HttpGet]
        [Authorize]
        public IEnumerable<Customer> Get()
        {
            return _iRepo.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        [Authorize]
        public Customer Get(int id)
        {
            return _iRepo.Get(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Customer customer)
        {
            _iRepo.Add(customer);
        }

        // POST api/values
        [HttpPut]
        [Authorize]
        public void Put([FromBody]Customer customer)
        {
            _iRepo.Update(customer.CustomerId, customer);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        [Authorize]
        public long Delete(int id)
        {
            return _iRepo.Delete(id);
        }
    }
}