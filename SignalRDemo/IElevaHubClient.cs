using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRDemo
{
    public interface IElevaHubClient
    {
        Task SendNotification(string type, string message);
    }
}
