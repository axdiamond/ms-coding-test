using Microsoft.WindowsAzure.Storage.Table;

namespace GenderVote.API.Models
{
    public class Votes : TableEntity
    {
        public int MaleScore { get; set; }
        public int FemaleScore { get; set; }
    }
}
