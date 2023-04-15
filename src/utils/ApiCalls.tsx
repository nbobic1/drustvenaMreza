import { PostElement, PostData } from "./DataTypes";
const HOST = 'http://192.168.1.3:32773';
var token = 'eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVWWljbEE4MFd3MXMzZnBWNFQ1TmtIdWpPNE5XM0JYZTM1RUFsOXNBeDBoQ0UwS1oiLCJpc3MiOiJodHRwczpcL1wvYXBpLmZsYXRpY29uLmNvbVwvb2F1dGhcL3Rva2VuIiwiZXhwIjoxNjgwOTY1MjYyLCJpYXQiOjE2ODA4Nzg4NjIsImp0aSI6IjFlZjM2NmZiLTFkNmUtNDBhNC1iNjc0LWUxODA3NWMwYmM5OSIsImNsaWVudF9pZCI6IlVZaWNsQTgwV3cxczNmcFY0VDVOa0h1ak80TlczQlhlMzVFQWw5c0F4MGhDRTBLWiJ9.QwF88kih4iUihlKGLgVHqfhTSy6BlHZr4eOVcBkmkIo';
export const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch(
      // HOST + '/WeatherForecast/GetMovie', {
      'http://192.168.1.3:8000/app', {
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


};

export const sendMoviesFromApiAsync = async (data: any) => {
  try {
    console.log(JSON.stringify(data));
    const response = await fetch(
      //HOST + '/WeatherForecast/PostMovie', {
      'http://192.168.1.3:8000/app', {
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

export const searchForIcons = async (keyword: any) => {
  try {
    const response = await fetch(
      'https://api.flaticon.com/v3/search/icons?query=' + keyword, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    }
    );
    const json = await response.json();
    console.log("flatiocns")
    console.log("search results=" + JSON.stringify(json));
    var k = json.data.slice(1, 10).map((a: { images: { [x: string]: any; }; }) => a.images["64"]);
    return k;//array of movies
  } catch (error) {

    console.error(error);
  }

};

export const getTokenForIcons = async () => {
  try {
    const response = await fetch(
      'https://api.flaticon.com/v3/app/authentication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 'apikey': 'UYiclA80Ww1s3fpV4T5NkHujO4NW3BXe35EAl9sAx0hCE0KZ' }),
    }
    );
    const json = await response.json();
    console.log("toke je dole ispod")
    console.log("token=" + JSON.stringify(json));
    return json;//array of movies
  } catch (error) {

    console.error(error);
  }

};
export const getGiffs = async (query: string) => {

  try {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/search?' + new URLSearchParams({
        api_key: 'yorzqylzWnLBVFHqGjkyQCR0w3Yff5hz',
        q: query
      })
      , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      }
    );
    const json = await response.json();
    return json.data.slice(1, 10).map((a: any) => 'https://i.giphy.com/media/' + a.id + '/giphy.mp4');//array of movies
  } catch (error) {

    console.error(error);
  }


};


