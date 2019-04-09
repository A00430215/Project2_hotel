using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetProjectBackEnd.Models.Repository
{
    public interface IDataRoom<TEntity, U> where TEntity : class
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(U id);
        long Add(TEntity b);
        long Update(U id, TEntity b);
        long Delete(U id);
    }
}