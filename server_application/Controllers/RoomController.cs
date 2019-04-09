using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DotNetProjectBackEnd.Models;
using DotNetProjectBackEnd.Models.Repository;
using DotNetProjectBackEnd.Models.DataManager;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;

namespace DotNetRoom.Controllers
{
    [Route("api/[controller]")]
    public class RoomController : Controller
    {
        
        private IDataRoom<Room, long> _iRepo;
        public RoomController(IDataRoom<Room, long> repo)
        {
            _iRepo = repo;
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Room> Get()
        {
            return _iRepo.GetAll(); 
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Room Get(int id)
        {
            return _iRepo.Get(id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]Room room)
        {
            _iRepo.Add(room);
        }

        // PUT api/<controller>/5
        [HttpPut]
        [Authorize]
        public void Put([FromBody]Room room)
        {
            _iRepo.Update(room.RoomNumber, room);
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
