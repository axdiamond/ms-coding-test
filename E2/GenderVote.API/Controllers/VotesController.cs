using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GenderVote.API.Models;
using GenderVote.API.Services;

namespace GenderVote.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VotesController : ControllerBase
    {
        public VotesController(IVotesService votes)
        {
            _votes = votes;
        }

        private IVotesService _votes;

        [HttpGet]
        public async Task<Votes> Get() => await _votes.GetVotes();

        [HttpPost("VoteFemale")]
        public async Task VoteFemale() => await _votes.VoteForFemale();

        [HttpPost("VoteMale")]
        public async Task VoteMale() => await _votes.VoteForMale();
    }
}
