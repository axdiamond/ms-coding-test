using System.Threading.Tasks;
using GenderVote.API.Models;

namespace GenderVote.API.Services
{
    public interface IVotesService
    {
        Task VoteForMale();
        Task VoteForFemale();
        Task<Votes> GetVotes();
    }
}
