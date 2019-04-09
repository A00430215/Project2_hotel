using Microsoft.EntityFrameworkCore;

namespace DotNetProjectBackEnd.Models
{
    public class ApplicationContext: DbContext
    {
        public ApplicationContext(DbContextOptions opts) : base(opts)
        {
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Booking> Booking { get; set; }
        public DbSet<Amenities> Amenities { get; set; }
        public DbSet<Option> Options { get; set; }
        public DbSet<RoomType> RoomType { get; set; }
        public DbSet<Room> Room { get; set; }
        public DbSet<Traveller> Traveller { get; set; }
        public DbSet<Review> Review { get; set; }
        public DbSet<Payment> Payment { get; set; }
        public DbSet<Promo> Promo { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

    }
}
