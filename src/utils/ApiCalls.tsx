import { PostElement, PostData } from "./DataTypes";
const HOST = 'http://192.168.1.3:32773';
export const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch(
      HOST + '/WeatherForecast/GetMovie', {
      method: 'GET',
      headers: {
        Accept: 'text/plain'
      },
      mode: 'cors',
    }
    );
    const json = await response.json();
    for (var i = 0; i < json.length; i++) {
      try {

        json[i].items = JSON.parse(json[i].items)
      }
      catch (e) {
      }
    }
    return json;//array of movies
  } catch (error) {
    console.error("error",);
  }

  /*
      var request = new XMLHttpRequest();
  request.onreadystatechange = e => {
    if (request.readyState !== 4) {
      return;
    }
  
    if (request.status === 200) {
      console.log('success', request.responseText);
    } else {
      console.warn('error',request.status,request.responseText);
    }
  };
  request.open('POST', 'http://192.168.1.3:32769/WeatherForecast/PostMovie',true);
  request.send("fsgsg");
  */
};
export const sendMoviesFromApiAsync = async (data: any) => {
  try {
    console.log(JSON.stringify(data));
    const response = await fetch(
      HOST + '/WeatherForecast/PostMovie', {
      method: 'POST',
      headers: {
        Accept: 'text/plain',
        "Content-Type": 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(data),
    }
    );
    const json = await response.json();
    console.log("rezutas")
    console.log("eh sad1=" + json);
    return json;//array of movies
  } catch (error) {

    console.error(error);
  }

};

export const getPexelImages = async (searchQuery: string, setImages: any) => {
  try {
    var response = await fetch(
      'https://api.pexels.com/v1/search?query=' + searchQuery, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "Authorization": "hoHFTFjXtj3Wo3A1RAKjO2WO4Z30xrIFUy4F7D2asXLLHZsJcvGFuQpt",
        redirect: 'follow',
      },
    }
    )
    var res = JSON.parse(await response.text())
    if (res.photos) {
      console.log("moaeeeeeeeeeeee", res ? res.photos[0] : 'null heee')
      var res1 = res.photos.map((photo: any) => photo.src.small)

      setImages(res1)
    } return res;
  } catch (error) {

    console.error(error);
  }
  /*
  var myHeaders = new Headers();
myHeaders.append("Authorization", "hoHFTFjXtj3Wo3A1RAKjO2WO4Z30xrIFUy4F7D2asXLLHZsJcvGFuQpt");

fetch("https://api.pexels.com/v1/search?query=cat", {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
})
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
*/
};