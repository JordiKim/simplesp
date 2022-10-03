const news = [
  {
    id: 1,
    title: "連6天較上周同期增！新冠肺炎今增4萬3040例本土 添48人死亡、227例中重症",
    url: "https://tw.news.yahoo.com/%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E5%A2%9E-4-%E8%90%AC-3040-%E4%BE%8B%E6%9C%AC%E5%9C%9F-%E6%B7%BB-48-%E4%BA%BA%E6%AD%BB%E4%BA%A1-060327218.html",
    publishedAt: "2022/10/01",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/n8ZYUdPCj9b.UcxrjsdNPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxNTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/ab8666c0-414e-11ed-9ded-411b4b65a64c",
  },
  {
    id: 2,
    title: "連6天較上周同期增！新冠肺炎今增4萬3040例本土 添48人死亡、227例中重症",
    url: "https://tw.news.yahoo.com/%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E5%A2%9E-4-%E8%90%AC-3040-%E4%BE%8B%E6%9C%AC%E5%9C%9F-%E6%B7%BB-48-%E4%BA%BA%E6%AD%BB%E4%BA%A1-060327218.html",
    publishedAt: "2022/10/02",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/n8ZYUdPCj9b.UcxrjsdNPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxNTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/ab8666c0-414e-11ed-9ded-411b4b65a64c",
  },
  {
    id: 3,
    title: "連6天較上周同期增！新冠肺炎今增4萬3040例本土 添48人死亡、227例中重症",
    url: "https://tw.news.yahoo.com/%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E5%A2%9E-4-%E8%90%AC-3040-%E4%BE%8B%E6%9C%AC%E5%9C%9F-%E6%B7%BB-48-%E4%BA%BA%E6%AD%BB%E4%BA%A1-060327218.html",
    publishedAt: "2022/10/03",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/n8ZYUdPCj9b.UcxrjsdNPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxNTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/ab8666c0-414e-11ed-9ded-411b4b65a64c",
  },
  {
    id: 4,
    title: "連6天較上周同期增！新冠肺炎今增4萬3040例本土 添48人死亡、227例中重症",
    url: "https://tw.news.yahoo.com/%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E5%A2%9E-4-%E8%90%AC-3040-%E4%BE%8B%E6%9C%AC%E5%9C%9F-%E6%B7%BB-48-%E4%BA%BA%E6%AD%BB%E4%BA%A1-060327218.html",
    publishedAt: "2022/10/04",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/n8ZYUdPCj9b.UcxrjsdNPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxNTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/ab8666c0-414e-11ed-9ded-411b4b65a64c",
  },
  {
    id: 5,
    title: "連6天較上周同期增！新冠肺炎今增4萬3040例本土 添48人死亡、227例中重症",
    url: "https://tw.news.yahoo.com/%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E5%A2%9E-4-%E8%90%AC-3040-%E4%BE%8B%E6%9C%AC%E5%9C%9F-%E6%B7%BB-48-%E4%BA%BA%E6%AD%BB%E4%BA%A1-060327218.html",
    publishedAt: "2022/10/05",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/n8ZYUdPCj9b.UcxrjsdNPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxNTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/ab8666c0-414e-11ed-9ded-411b4b65a64c",
  },
  {
    id: 6,
    title: "連6天較上周同期增！新冠肺炎今增4萬3040例本土 添48人死亡、227例中重症",
    url: "https://tw.news.yahoo.com/%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E5%A2%9E-4-%E8%90%AC-3040-%E4%BE%8B%E6%9C%AC%E5%9C%9F-%E6%B7%BB-48-%E4%BA%BA%E6%AD%BB%E4%BA%A1-060327218.html",
    publishedAt: "2022/10/06",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/n8ZYUdPCj9b.UcxrjsdNPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxNTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/ab8666c0-414e-11ed-9ded-411b4b65a64c",
  },
  {
    id: 7,
    title: "連6天較上周同期增！新冠肺炎今增4萬3040例本土 添48人死亡、227例中重症",
    url: "https://tw.news.yahoo.com/%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E5%A2%9E-4-%E8%90%AC-3040-%E4%BE%8B%E6%9C%AC%E5%9C%9F-%E6%B7%BB-48-%E4%BA%BA%E6%AD%BB%E4%BA%A1-060327218.html",
    publishedAt: "2022/10/07",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/n8ZYUdPCj9b.UcxrjsdNPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxNTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/ab8666c0-414e-11ed-9ded-411b4b65a64c",
  },
  {
    id: 8,
    title: "連6天較上周同期增！新冠肺炎今增4萬3040例本土 添48人死亡、227例中重症",
    url: "https://tw.news.yahoo.com/%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E5%A2%9E-4-%E8%90%AC-3040-%E4%BE%8B%E6%9C%AC%E5%9C%9F-%E6%B7%BB-48-%E4%BA%BA%E6%AD%BB%E4%BA%A1-060327218.html",
    publishedAt: "2022/10/08",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/n8ZYUdPCj9b.UcxrjsdNPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxNTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/ab8666c0-414e-11ed-9ded-411b4b65a64c",
  },
  {
    id: 9,
    title: "連6天較上周同期增！新冠肺炎今增4萬3040例本土 添48人死亡、227例中重症",
    url: "https://tw.news.yahoo.com/%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E5%A2%9E-4-%E8%90%AC-3040-%E4%BE%8B%E6%9C%AC%E5%9C%9F-%E6%B7%BB-48-%E4%BA%BA%E6%AD%BB%E4%BA%A1-060327218.html",
    publishedAt: "2022/10/09",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/n8ZYUdPCj9b.UcxrjsdNPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxNTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/ab8666c0-414e-11ed-9ded-411b4b65a64c",
  },
  {
    id: 10,
    title: "連6天較上周同期增！新冠肺炎今增4萬3040例本土 添48人死亡、227例中重症",
    url: "https://tw.news.yahoo.com/%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E5%A2%9E-4-%E8%90%AC-3040-%E4%BE%8B%E6%9C%AC%E5%9C%9F-%E6%B7%BB-48-%E4%BA%BA%E6%AD%BB%E4%BA%A1-060327218.html",
    publishedAt: "2022/10/10",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/n8ZYUdPCj9b.UcxrjsdNPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxNTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/ab8666c0-414e-11ed-9ded-411b4b65a64c",
  },
];

export default news;
