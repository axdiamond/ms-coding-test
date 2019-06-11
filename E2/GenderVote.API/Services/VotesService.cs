using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage.Table;
using GenderVote.API.Models;

namespace GenderVote.API.Services
{
    public class VotesService : IVotesService
    {
        public VotesService(string connectionString)
        {
            _connectionString = connectionString;
        }

        private const string VOTES_TABLE_NAME = "Votes";
        private const string VOTES_PARTITION_KEY = "All";
        private const string VOTES_ROW_KEY = "GenderVotes";

        private string _connectionString;

        private CloudTable _table;

        private async Task<CloudTable> GetTable()
        {
            if (_table != null)
                return _table;

            var storageAccount = CloudStorageAccount.Parse(_connectionString);
            var client = storageAccount.CreateCloudTableClient();

            _table = client.GetTableReference(VOTES_TABLE_NAME);
            await _table.CreateIfNotExistsAsync();

            return _table;
        }

        public async Task<Votes> GetVotes()
        {
            var table = await GetTable();

            var operation = TableOperation.Retrieve<Votes>(VOTES_PARTITION_KEY, VOTES_ROW_KEY);

            var result = await table.ExecuteAsync(operation);

            return (Votes)result.Result;
        }

        public async Task VoteForFemale()
        {
            var table = await GetTable();
            var votes = await GetVotes();

            votes.FemaleScore++;
            var operation = TableOperation.InsertOrReplace(votes);

            await table.ExecuteAsync(operation);
        }

        public async Task VoteForMale()
        {
            var table = await GetTable();
            var votes = await GetVotes();

            votes.MaleScore++;
            var operation = TableOperation.InsertOrReplace(votes);

            await table.ExecuteAsync(operation);
        }
    }
}
