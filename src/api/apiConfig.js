const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e35a86eb7582c56b2e49f2ca43f75d9b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;