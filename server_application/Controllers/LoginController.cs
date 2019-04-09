using System;
using Microsoft.AspNetCore.Mvc;
using DotNetProjectBackEnd.Models;
using DotNetProjectBackEnd.Models.Repository;
using DotNetProjectBackEnd.Models.DataManager;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DotNetProjectBackEnd.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private IDataRepository<Customer, long> _iRepo;
        public LoginController(IDataRepository<Customer, long> repo)
        {
            _iRepo = repo;
        }
        // POST api/<controller>
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Post([FromBody]Login login)
        {
            return _iRepo.CheckStatus(login.Email, login.Password);
        }
    }
}
