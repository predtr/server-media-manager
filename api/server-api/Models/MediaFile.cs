using System;
using server_media_manager.Interfaces;

namespace server_media_manager.Models
{
	public class MediaFile : IMediaFile
	{
        public string FullPath { get; }
        public int TemporaryID { get; set; }
        public string FileName => Path.GetFileName(FullPath);

        public MediaFile(string fullPath)
        {
            if (string.IsNullOrEmpty(fullPath))
                throw new Exception("You can't instanciate MediaFile class without fullpath");
            if (!File.Exists(fullPath))
                throw new FileNotFoundException($"The file : {fullPath} does not exists");

            FullPath = fullPath;
        }
    }
}

