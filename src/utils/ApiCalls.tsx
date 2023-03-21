import { PostElement,PostData } from "./DataTypes";

export const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'http://192.168.1.3:32771/WeatherForecast/GetMovie', {
            method: 'GET',
            headers: {
              Accept: 'text/plain'
            },
            mode:'cors',
          }
      );
      const json = await response.json();
      console.log("rezutas"+json.length)
      console.log("eh sad="+JSON.stringify(JSON.parse(json[0].items)[0]));
      for(var i=0; i<json.length; i++)
      {
        json[i].index=json[i].id;
        json[i].text=json[i].index.toString();
        json[i].items=JSON.parse(json[i].items)
      }
      return json;//array of movies
    } catch (error) {
      console.error(error);
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
  export const sendMoviesFromApiAsync = async (data:any) => {
    try {
      console.log(JSON.stringify(data));
        const response = await fetch(
          'http://192.168.1.3:32771/WeatherForecast/PostMovie', {
              method: 'POST',
              headers: {
                Accept: 'text/plain',
                "Content-Type": 'application/json',
              },
              mode:'cors',
              body: JSON.stringify(data), 
            }
        );
        const json = await response.json();
        console.log("rezutas")
        console.log("eh sad1="+json[0]);
        return json;//array of movies
      } catch (error) {

        console.error(error);
      }
  
    };