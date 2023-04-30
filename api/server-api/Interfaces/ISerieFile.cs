using System;

namespace server_media_manager.Interfaces
{
	public interface ISerieFile : IMediaFile
	{
		int Season { get; set; }
		int Epidose { get; set; }
	}
}

