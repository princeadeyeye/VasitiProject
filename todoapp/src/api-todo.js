import Axios from 'axios'

export class RestdataSource {
  constructor(base_url) {
    this.Base_URL = base_url
  }

  GetData(callback) {
    this.SendRequest('get', this.Base_URL, callback)
  }

  async GetOne(id, callback) {
    this.SendRequest('get', `${this.Base_URL}/${id}`, callback)
  }

  async Store(data, callback) {
   this.SendRequest('post', `${this.Base_URL}`, data, callback) 
  }

  async Update(data, callback) {
    this.SendRequest('put', `${this.Base_URL}/${data._id}`, callback)
  }

  async Delete (data, callback) {
    this.SendRequest('delete', `${this.Base_URL}/${data}`, callback)
  }

  async SendRequest (method, url, callback, data) {
      let response = await Axios.request({
        method:method,
        url: url,
        data: data
      })
      console.log(response)
      callback(response.data)
  }
}