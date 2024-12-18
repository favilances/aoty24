export const useAlbums = () => {
  const albums = ref([
    {
      id: 1,
      name: "gnx",
      artist: "Kendrick Lamar ",
      coverUrl: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Faa7b86debf8b362bad3018cb881cfdc1.1000x1000x1.png",
      year: "2024",
      playUrl: "https://music.apple.com/album/gnx/1781270319"
    },
    {
      id: 2,
      name: "Missionary ",
      artist: "Snoop Dogg  & Dr. Dre ",
      coverUrl: "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F8ea002e07ce93708fec0bff73273e2fa.1000x1000x1.png",
      year: "2024",
      playUrl: "https://music.apple.com/album/missionary/1784628144"
    },
    {
      id: 3,
      name: "MILENYUM",
      artist: "JEFE",
      coverUrl: "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Fa559341817a17fa01905230ea0708467.1000x1000x1.png",
      year: "2024",
      playUrl: "https://music.apple.com/album/mi-lenyum/1744561396"
    },
    {
      id: 4,
      name: "Ölüm",
      artist: "Allame ",
      coverUrl: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F91f50a379d622ad9c2d06affdf4faa1e.1000x1000x1.png",
      year: "2024",
      playUrl: "https://music.apple.com/album/%C3%B6l%C3%BCm/1738907393"
    },
    {
      id: 5,
      name: "taycan",
      artist: "motive ",
      coverUrl: "https://t2.genius.com/unsafe/905x0/https%3A%2F%2Fimages.genius.com%2F9c6909ecb9e2cf0a7ab0ec206a3fbbf3.1000x1000x1.jpg",
      year: "2024",
      playUrl: "https://music.apple.com/album/taycan/1780434054"
    },
    {
      id: 6,
      name: " OBSESIF ",
      artist: "BLOK3  ",
      coverUrl: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F7fe1b2e2a0963eeeea2b55ebb6e17359.1000x1000x1.png",
      year: "2024",
      playUrl: "https://music.apple.com/album/obsesif/1767436720"
    },
    {
      id: 7,
      name: " Manifesto ",
      artist: "Ati242   ",
      coverUrl: "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F10849fabb4b8a162675a160e7db90c9b.1000x1000x1.jpg",
      year: "2024",
      playUrl: "https://music.apple.com/album/manifesto/1771701272"
    }
  ])

  return {
    albums
  }
}