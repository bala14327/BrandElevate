using Infosys.BrandElevateDAL.Models;

namespace Infosys.BrandElevateDAL.repos
{
    public class AdHistoryRepository
    {
        private readonly BrandElevateDbContext _context;

        public AdHistoryRepository(BrandElevateDbContext context)
        {
            _context = context;
        }

        public List<Ads> GetAdsByUserId(int userId)
        {
            return _context.Ads
                .Where(a => a.UserId == userId)
                .OrderByDescending(a => a.GeneratedOn)
                .ToList();
        }
    }
}
