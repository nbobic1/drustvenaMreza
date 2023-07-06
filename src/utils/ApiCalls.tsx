import { PostElement, PostData } from "./DataTypes";
const HOST = 'http://192.168.1.13:8000';
import uuid from 'react-native-uuid';
var token = 'eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVWWljbEE4MFd3MXMzZnBWNFQ1TmtIdWpPNE5XM0JYZTM1RUFsOXNBeDBoQ0UwS1oiLCJpc3MiOiJodHRwczpcL1wvYXBpLmZsYXRpY29uLmNvbVwvb2F1dGhcL3Rva2VuIiwiZXhwIjoxNjg1ODcxOTMyLCJpYXQiOjE2ODU3ODU1MzIsImp0aSI6ImE3ODFiYjNkLTNhODItNGNlNC1hN2VmLTEyZDRmM2E3YWY1MyIsImNsaWVudF9pZCI6IlVZaWNsQTgwV3cxczNmcFY0VDVOa0h1ak80TlczQlhlMzVFQWw5c0F4MGhDRTBLWiJ9.0y6NtNik_Pt7vYcjw-6FfTSgRgfDiCWWtu0m_a6lioc';
/*
export const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch(
      // HOST + '/WeatherForecast/GetMovie', {
      'http://192.168.1.3:8000/app/', {
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
      'http://192.168.1.3:8000/app/', {
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
*/
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

};

export const searchForIcons = async (keyword: any) => {
  try {
    const response = await fetch(
      'https://api.flaticon.com/v3/search/icons?iconType=stickers&q=' + keyword, {
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
      'http://api.giphy.com/v1/gifs/search?' + new URLSearchParams({
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
    console.log("response===gip=", JSON.stringify(json), "\nrespo=", response);
    return json.data.slice(1, 10).map((a: any) => 'https://i.giphy.com/media/' + a.id + '/giphy.mp4');//array of movies
  } catch (error) {

    console.error('err==', error, '\n\n', JSON.stringify(error));
  }


};



export const Login = async (email: string, password: string) => {

  try {
    console.log('Login')
    const response = await fetch(
      HOST + '/api/login'
      , {
        method: 'POST',
        body: JSON.stringify({
          "email": email,
          "password": password,
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      }
    );
    const json = await response.json();
    console.log(JSON.stringify(json))
    if (json.access)
      return json.access;
    else return null;
  } catch (error) {

    console.log('Login errr')
    console.error(error);
  }


};



export const Register = async (username: string, password: string, confirmPassword: string) => {
  console.log('Register')
  try {
    fetch(
      HOST + '/api/register'
      , {
        method: 'POST',
        body: JSON.stringify({
          "email": username,
          "password": password,
          "confirm_password": confirmPassword,
          "is_staff": true
        }),
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    ).then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));// const json = await response.json();
    //return json.data.slice(1, 10).map((a: any) => 'https://i.giphy.com/media/' + a.id + '/giphy.mp4');//array of movies
  } catch (error) {

    console.log('Register err')
    console.error(JSON.stringify(error));
  }


};
export const GetPosts = (token: string | null) => {
  console.log('Posts')
  return new Promise((resolve, reject) => {
    try {
      const response = ''
      fetch(
        HOST + '/api/posts'
        , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        }
      ).then(response => response.text())
        .then(result => {
          console.log(result.slice(0, 30000));
          var obj = JSON.parse(result)
          var nizPermisa = []
          for (var i = 0; i < obj.count; i++) {
            nizPermisa.push(GetPost(token, obj.results[i].id))
          }
          Promise.all(nizPermisa).then(result => {
            resolve(result)
          })
        })

        .catch(error => console.log('error', error.slice(0, 30000)));// const json = await response.json();
      //return json.data.slice(1, 10).map((a: any) => 'https://i.giphy.com/media/' + a.id + '/giphy.mp4');//array of movies
    } catch (error) {

      console.log('Register err')
      console.error(JSON.stringify(error));
    }
  })

};

export const GetPost = async (token: string | null, id: string) => {
  console.log('Post1')

  return new Promise((resolve, reject) => {
    try {
      const response = ''
      console.log('pije ve=', token)
      fetch(
        HOST + '/api/post/' + id
        , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        }
      ).then(response => { console.log('dafaf'); return response.text() })
        .then(result => {
          console.log('rss=', result);
          var tres = JSON.parse(result)
          tres.content.sort((a, b) => { return a.index - b.index })
          resolve(tres)
        })

        .catch(error => {
          //console.log('error=', JSON.stringify(error.message))
          reject(error)
        });// const json = await response.json();
      //return json.data.slice(1, 10).map((a: any) => 'https://i.giphy.com/media/' + a.id + '/giphy.mp4');//array of movies
      console.log('ne radiiiii')
    } catch (error) {

      console.log('Register err')
      //  console.error(JSON.stringify(error));
      reject(error)
    }
  })

};
const fileType = (arg: string) => {
  if (arg.includes("mp4"))
    return "mp4"
  else if (arg.includes("png"))
    return "png"
  else if (arg.includes("jpeg"))
    return "jpeg"
  else if (arg.includes("webp"))
    return "webp"
  else if (arg.includes("tiff"))
    return "tiff"
  else return "jpg"
}
export const MakePosts = (token: string | null, post: PostData) => {
  console.log('Posts')
  var nizPermisa = []
  for (var i = 0; i < post.content.length; i++) {
    nizPermisa.push(CreateContent(token, post.content[i]))
    console.log('for con=', JSON.stringify(post.content[i]))
  }
  Promise.all(nizPermisa).then(nizId => {
    try {
      var formdata = new FormData();
      formdata.append("title", post.title);
      var p = ''
      p = fileType(post.url)
      formdata.append("url",
        {
          uri: post.url,
          type: 'image/' + p,
          name: 'mojaaa222a.' + p
        })
      console.log('conn idsss=', JSON.stringify(nizId), nizId.toString())
      for (var i = 0; i < nizId.length; i++)
        formdata.append("content_ids[" + i + "]", JSON.stringify(nizId[i]))

      const response = ''
      console.log('krece pziv')
      fetch(
        HOST + '/api/post'
        , {
          method: 'POST',
          body: formdata,

          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token,
          },
        }
      )
      /* .then(response => {
        console.log('resusssssss'); return response.text()
      })
 */        .then(result => {
        console.log('res=========', result);
      })
        .catch(error => console.log('error', error));// const json = await response.json();
      //return json.data.slice(1, 10).map((a: any) => 'https://i.giphy.com/media/' + a.id + '/giphy.mp4');//array of movies
    } catch (error) {

      console.log('Posts create err')
      console.error(JSON.stringify(error));
    }
  })



};




export const CreateContent = async (token: string | null, element: PostElement) => {

  return new Promise((resolve, reject) => {
    try {
      console.log('Cotent craete', element.index)
      var formdata = new FormData();
      formdata.append("name", "");
      formdata.append("index", element.index.toString());
      if (element.hasOwnProperty("text")) {
        formdata.append("text", element.text);
        formdata.append("style", JSON.stringify(element.style));
      }
      if (element.hasOwnProperty("question")) {
        formdata.append("style", JSON.stringify(element.style));
        formdata.append("question", element.question);
        formdata.append("answer", element.answer);
      }
      if (element.hasOwnProperty("url")) {
        var p = ''
        p = fileType(element.url)
        formdata.append("url",
          {
            uri: element.url,
            type: 'image/' + p,
            name: uuid.v4() + p
          })
      }
      formdata.append("type", element.type.toString());
      console.log('urlllll=', JSON.stringify(formdata))
      fetch(
        HOST + '/api/content'
        , {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token,
          },
        }
      ).then(response => response.text())
        .then(result => {
          console.log('napravljen content;', JSON.stringify(result).slice(0, 30000));
          resolve(JSON.parse(result).id)//result.id)
        }
        )
        .catch(error => { console.log('eror  con=', error.slice(0, 30000)); throw new Error(error) });// const json = await response.json();


      /*
      const response = ''
      fetch('file:///data/user/0/com.nbobic1.diplomskiv2/cache/ImagePicker/26695d86-3a70-4f80-a785-1a4faa95fd29.jpeg')
        .then((response) => response.blob())
        .then((blob) => {
          // do something with the blob (e.g. upload to server)
          console.log(blob);
  
  
          // console.log('sadS', formdata);
          const reader = new FileReader();
          console.log('api call token=', token);
          reader.addEventListener(
            "load",
            () => {
              // convert image file to base64 string
              var formdata = new FormData();
              formdata.append("name", "Video Test");
              formdata.append("index", "2");
              formdata.append("url",
                {
                  uri:
                    // reader.result,
                    // 'file:///data/user/0/com.nbobic1.diplomskiv2/cache/ImagePicker/f31937ec-1f55-4520-b0ef-b348829933bf.jpeg',
                    'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
                  type: 'image/jpeg',
                  name: 'moj1a.jpeg'
                })
              //reader.result)//?.toString())
              // new Blob([blob], { type: 'image/jpeg' }), 'file.jpeg');
              formdata.append("type", "3");
              fetch(
                HOST + '/api/content'
                , {
                  method: 'POST',
                  body: formdata,
                  redirect: 'follow',
                  headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token,
                  },
                }
              ).then(response => response.text())
                .then(result => {
                  console.log(result.replace(" ", "").slice(0, 40000));
                 }
                )
                .catch(error => console.log('error', error, JSON.stringify(error)));// const json = await response.json();
  
            },
            false
          );
          reader.readAsDataURL(blob);
          //return json.data.slice(1, 10).map((a: any) => 'https://i.giphy.com/media/' + a.id + '/giphy.mp4');//array of movies
        })
        .catch((error) => {
          console.log(error);
        });
  */
    }
    catch (error) {
      reject(error)
    }
  })

};