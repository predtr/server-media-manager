using System;

namespace server_media_manager.Interfaces
{
	public interface IMediaFile
	{
		string FullPath { get; }
        int TemporaryID { get; set; }
    }
}

