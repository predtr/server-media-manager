using System;
using System.Net.WebSockets;
using System.Text;
using server_media_manager.Interfaces;
using server_media_manager.Models;

namespace server_media_manager.Services
{
	public static class DownloadService
	{
        public static List<IMediaFile> GetList()
        {
            List<IMediaFile> lists = new List<IMediaFile>
            {
            new MediaFile("C:/test/test.mkv"),
            new MediaFile("C:/test/toto.mkv"),
            new MediaFile("C:/test/tata.mkv")
            };
            return lists;
        }

        public static async Task DispatchFiles(WebSocket webSocket)
        {
            var buffer = new byte[1024 * 4];
            var result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
            //_logger.Log(LogLevel.Information, "Message received from Client");

            while (!result.CloseStatus.HasValue)
            {
                var serverMsg = Encoding.UTF8.GetBytes($"Server: Hello. You said: {Encoding.UTF8.GetString(buffer)}");
                await webSocket.SendAsync(new ArraySegment<byte>(serverMsg, 0, serverMsg.Length), result.MessageType, result.EndOfMessage, CancellationToken.None);
                //_logger.Log(LogLevel.Information, "Message sent to Client");

                buffer = new byte[1024 * 4];
                result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                //_logger.Log(LogLevel.Information, "Message received from Client");

            }
            await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
            //_logger.Log(LogLevel.Information, "WebSocket connection closed");
        }
    }
}

