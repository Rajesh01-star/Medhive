const postformUrl = 'https://medhive-backend.vercel.app/formPost';
const carouselFetchUrl = "https://medhive-backend.vercel.app/hospitals";
// const newsApiKey = "8f3532ad8cbb4a5ba928b437ce5d303d";
// const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&source=bbc=news&category=health&language=en&sortBy=top&apiKey=${newsApiKey}`;
const newsApiUrl = 'https://medhive-backend.vercel.app/News';
// const newsApiUrl = 'https://http://localhost:4000/News';
const fallBackImageUrl =
  "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80";
const searchHospitalUrl = 'https://medhive-backend.vercel.app/Hospitaldetails?'
const searchSpecialityUrl = 'https://medhive-backend.vercel.app/SpecHospitals?'



const HospitalApi = {
  fetchIndividualHospital: async function(id) {
    try {
      const response = await fetch(`${searchHospitalUrl}ID=${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  fetchHospitals : async function(){
    try{
      const response = await fetch(carouselFetchUrl);
      const data = await response.json();
      return data;
    }catch(err){
      return err;
    }
  }
}

const NewsApi = {
  fetchNews : async function(){
    try{
      const response = await fetch(newsApiUrl);
      const data = await response.json();
      console.log(data)
      return data;
    }catch(err){
      return err;
    }
  }
}

export {
  postformUrl,
  carouselFetchUrl,
  fallBackImageUrl,
  newsApiUrl,
  NewsApi,
  searchHospitalUrl,
  searchSpecialityUrl,
  HospitalApi
};