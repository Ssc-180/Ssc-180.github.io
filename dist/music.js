const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true,
  lrcType: 3,
  audio: [
    {
      name: "Say It Again",
      artist: '盘尼西林',
      url: 'https://gitee.com/ZPSource/BinRepo/raw/master/%E7%9B%98%E5%B0%BC%E8%A5%BF%E6%9E%97%20-%20Say%20It%20Again.mp3',
      cover: 'https://gitee.com/ZPSource/BinRepo/raw/master/%E7%9B%98%E5%B0%BC%E8%A5%BF%E6%9E%97%20-%20Say%20It%20Again%20-%20Cover.jpg',
    }
  ]
});