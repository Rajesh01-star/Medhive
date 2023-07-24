const postformUrl = 'http://localhost:3001/formPost';
const carouselFetchUrl = "http://localhost:4000/hospitals";
const newsApiKey = "8f3532ad8cbb4a5ba928b437ce5d303d";
const fallBackImageUrl =
  "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80";
const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&source=bbc=news&category=health&language=en&sortBy=top&apiKey=${newsApiKey}`;
const searchHospitalUrl = 'http://localhost:8000/Hospitaldetails?'
const searchSpecialityUrl = 'http://localhost:8000/SpecHospitals?'


export {
  postformUrl,
  carouselFetchUrl,
  newsApiKey,
  fallBackImageUrl,
  newsApiUrl,
  searchHospitalUrl,
  searchSpecialityUrl
};
