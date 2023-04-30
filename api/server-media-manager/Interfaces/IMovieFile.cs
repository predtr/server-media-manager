using System;
using server_media_manager.Models;

namespace server_media_manager.Interfaces
{
	public interface IMovieFile : IMediaFile
	{
		int Year { get; set; }
	}
}

