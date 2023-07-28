using System;
using Microsoft.AspNetCore.Mvc;
using server_media_manager.Interfaces;
using server_media_manager.Models;
using server_media_manager.Services;

namespace server_media_manager.Controllers;

[ApiController]
[Route("[controller]")]
public class DownloadController : ControllerBase
{
    private readonly ILogger<DownloadController> _logger;

    public DownloadController(ILogger<DownloadController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public ActionResult Get()
    {
        return new OkResult();
    }

    [HttpGet("lists")]
    public List<IMediaFile> GetDownloadedFileList()
	{
        return DownloadService.GetList();
	}

    [HttpGet("dispatch")]
    public async Task DispatchFiles()
    {
        if(HttpContext.WebSockets.IsWebSocketRequest)
        {
            using var webSocket = await HttpContext.WebSockets.AcceptWebSocketAsync();
            _logger.Log(LogLevel.Information, "WebSocket connection established");
            await DownloadService.DispatchFiles(webSocket);
        }
        else
        {
            HttpContext.Response.StatusCode = 400;
        }
    }
}

