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
    public class TravellerController : Controller
    {
        private IDataTraveller<Traveller, long> _iRepo;
        public TravellerController(IDataTraveller<Traveller, long> repo)
        {
            _iRepo = repo;
        }



        // POST api/values
        [HttpPost]
        public long Post([FromBody]Traveller traveller)
        {
            return _iRepo.Add(traveller);
        }
    }
}