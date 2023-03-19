export const getMoviesFromApiAsync = async () => {
    /*try {
      const response = await fetch(
        'http://192.168.1.3:32769/WeatherForecast', {
            method: 'GET',
            headers: {
              Accept: 'text/plain'
            },
            mode:'cors',
          }
      );
      const json = await response.json();
      console.log("rezutas")
      console.log("eh sad="+json[0].title);
      return json;//array of movies
    } catch (error) {
      console.error(error);
    }

*/
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

  };
  export const sendMoviesFromApiAsync = async () => {
    try {
        const response = await fetch(
          'http://192.168.1.3:32769/WeatherForecast/PostMovie', {
              method: 'POST',
              headers: {
                Accept: 'text/plain',
                "Content-Type": 'application/json',
              },
              mode:'cors',
              body: JSON.stringify( {
                id: 0,
                title: "string",
                releaseDate: "2023-03-19",
                genre: "string",
                price: 0
              }), 
            }
        );
        const json = await response.json();
        console.log("rezutas")
        console.log("eh sad1="+json[0].title);
        return json;//array of movies
      } catch (error) {

        console.error(error);
      }
  
    };