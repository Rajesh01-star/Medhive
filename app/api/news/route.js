import { newsApiKey } from "@/app/utils/url"


export async function newsFetch(){
const url = `https://newsapi.org/v2/top-headlines?country=in&source=bbc=news&category=health&language=en&sortBy=top&apiKey="8f3532ad8cbb4a5ba928b437ce5d303d"?limit=10`;

async function newsFetchingfunc(url) {
try{
  const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
    return null;
  }
}

}