using Infosys.BrandElevateDAL.repos;
using Infosys.BrandElevateDAL.Models;

namespace Infosys.BrandElevateWebApi.Services
{
    public class AdHistoryService
    {
        private readonly AdHistoryRepository _repository;

        public AdHistoryService(AdHistoryRepository repository)
        {
            _repository = repository;
        }

        public List<Ads> GetUserAds(int userId)
        {
            return _repository.GetAdsByUserId(userId);
        }
    }
}
