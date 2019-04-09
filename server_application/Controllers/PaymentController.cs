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
    public class PaymentController : Controller
    {
        private IDataPayment<Payment, long> _iPayRepo;
        public PaymentController(IDataPayment<Payment, long> repo)
        {
            _iPayRepo = repo;
        }

        // GET: api/values
        [HttpGet]
        [Authorize]
        public IEnumerable<Payment> Get()
        {
            return _iPayRepo.GetAll();
        }


        // POST api/<controller>
        [HttpPost]
        [Authorize]
        public double Post([FromBody]Payment value)
        {
            return _iPayRepo.Add(value);
        }

       
    }
}
